package net.atos.quality.controller.ihm;

import com.fasterxml.jackson.annotation.JsonView;
import net.atos.quality.model.Views;
import net.atos.quality.model.build.Build;
import net.atos.quality.model.build.BuildProduct;
import net.atos.quality.model.compare.*;
import net.atos.quality.model.deploy.DeployPF;
import net.atos.quality.model.git.GitBranch;
import net.atos.quality.model.git.GitRepository;
import net.atos.quality.model.message.Message;
import net.atos.quality.service.build.SBuild;
import net.atos.quality.service.build.SBuildProduct;
import net.atos.quality.service.deploy.SDeployPF;
import net.atos.quality.service.git.SGitBranch;
import net.atos.quality.service.git.SGitRepository;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.text.DecimalFormat;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.temporal.ChronoUnit;
import java.util.*;
import java.util.stream.Collectors;


@RestController
@RequestMapping("production/compare")
public class CCompare {

    private static final DecimalFormat df = new DecimalFormat("0.00");

    private SBuildProduct sBuildProduct;
    private SBuild sBuild;
    private SDeployPF sDeployPF;
    private SGitRepository sGitRepository;
    private SGitBranch sGitBranch;


    protected CCompare(SBuildProduct SBuildProduct, SBuild SBuild, SDeployPF SDeployPF, SGitRepository SGitRepository, SGitBranch SGitBranch) {
        this.sBuildProduct = SBuildProduct;
        this.sBuild = SBuild;
        this.sDeployPF = SDeployPF;
        this.sGitRepository = SGitRepository;
        this.sGitBranch = SGitBranch;
    }

    /*
     * Return :
     */
    @JsonView(value = {Views.BuildProduct.class})
    @GetMapping("{product}/{type}")
    public ResponseEntity getACompareReport(@PathVariable("product") String product, @PathVariable("type") String type,
                                            @RequestHeader("startDate") String startDate, @RequestHeader("endDate") String endDate) throws ParseException {

        switch (type.toUpperCase()) {
            case "BUILD":
                List<BuildProduct> t = sBuildProduct.getBuildProductForAProductBeetweenTwoDate(product, startDate, endDate);

                if (t.isEmpty()) {
                    return ResponseEntity.ok().body(new Message("Aucun build de produit trouvé sur la période", "ERROR"));
                }

                return this.getABuildCompare(t, startDate, endDate);

            case "DEPLOY":
                List<DeployPF> d = sDeployPF.getDeployForAProductBeetweenTwoDate(product, startDate, endDate);

                if (d.isEmpty()) {
                    return ResponseEntity.ok().body(new Message("Aucun déploiement de produit trouvé sur la période", "ERROR"));
                }

                return this.getADeployCompare(d, startDate, endDate);

            default:
                return ResponseEntity.ok().body(new Message("Le seul type valable est :'BUILD' ou 'DEPLOY'", "ERROR"));
        }
    }
    @JsonView(value = {Views.BuildProduct.class})
    @GetMapping("branche")
    public ResponseEntity<?> getACompareReportBrancheDetail(@RequestHeader("startDate") String startDate,
                                                            @RequestHeader("endDate") String endDate,
                                                            @RequestHeader("name") String name,
                                                            @RequestHeader("buildProducts") String allBuildProduct) throws ParseException {

        // Récupère la branche à partir du nom
        GitBranch branch = sGitBranch.findByName(name);
        List<String> allId = List.of(allBuildProduct.split(","));

        List<DeployPF> deploys = sDeployPF.getDeployWithProductForAProductBeetweenTwoDate(
                branch.getName(), startDate, endDate
        );
        long numWeeks = ChronoUnit.WEEKS.between(LocalDate.parse(startDate), LocalDate.parse(endDate));
        long numMonths = ChronoUnit.MONTHS.between(LocalDate.parse(startDate), LocalDate.parse(endDate));

        Map<String, List<String>> cutDeployResult = new HashMap<>();
        List<String> allKey = new ArrayList<>();

        // Parcours des déploiements pour créer une Map<String, List<String>> <Date, List<Resultat>>
        for (DeployPF deploy : deploys) {
            String timeName = "";

            if (numWeeks < 13) {
                timeName = "S" + this.getWeekNumber(deploy.getStartDate().toString());
            } else if (numMonths < 13) {
                timeName = deploy.getStartDate().getMonth().name();
                timeName = getFrenchMonth(timeName);
            }

            // Ajoute les résultats dans la Map en fonction de la période
            if (cutDeployResult.containsKey(timeName)) {
                List<String> list = cutDeployResult.get(timeName);
                list.add(deploy.getResult());
            } else {
                List<String> l = new ArrayList<>();
                l.add(deploy.getResult());
                cutDeployResult.put(timeName, l);
                allKey.add(timeName);
            }
        }

        String[] resultType = {"SUCCESS", "UNSTABLE", "FAILURE", "ABORTED"};
        return ResponseEntity.ok().body(createLinePercentCharth(cutDeployResult, allKey, "Details de '" + name + "'", resultType, startDate, endDate));
    }


    @JsonView(value = {Views.BuildProduct.class})
    @GetMapping("repository")
    public ResponseEntity getACompareReportRepositoryDetail(@RequestHeader("startDate") String startDate, @RequestHeader("endDate") String endDate, @RequestHeader("name") String name, @RequestHeader("buildProducts") String allBuildProduct) throws ParseException {


        GitRepository repository = sGitRepository.getRepositoryByName(name);
        List<String> allId = List.of(allBuildProduct.split(","));

        List<Build> builds = sBuild.getAllBuildBeetweenTwoDate(repository.getId(), allId.stream().map(Long::parseLong).collect(Collectors.toList()), startDate, endDate);

        long numWeeks = ChronoUnit.WEEKS.between(LocalDate.parse(startDate), LocalDate.parse(endDate));
        long numMonth = ChronoUnit.MONTHS.between(LocalDate.parse(startDate), LocalDate.parse(endDate));

        Map<String, List<String>> cutBuildProductResult = new HashMap<>();
        List<String> allKey = new ArrayList<>();
        //Parcours des builds products pour faire une Map<String, List<String>> <Date,List<Resultat>>
        for (Build b : builds) {
            String timeName = "";
            if (numWeeks < 13) {
                timeName = "S" + this.getWeekNumber(b.getStartDate().toString());
            } else if (numMonth < 13) {
                timeName = b.getStartDate().getMonth().name();
                timeName = getFrenchMonth(timeName);

            }

            if (cutBuildProductResult.containsKey(timeName)) {
                List<String> list = cutBuildProductResult.get(timeName);
                list.add(b.getResultBuild());
            } else {
                List<String> l = new ArrayList<>();
                l.add(b.getResultBuild());
                cutBuildProductResult.put(timeName, l);
                allKey.add(timeName);
            }

        }

        //TO DO LE GRAPH LINE PERCENT
        String[] resultType = {"SUCCESS", "UNSTABLE", "FAILURE", "ABORTED"};
        return ResponseEntity.ok().body(createLinePercentCharth(cutBuildProductResult, allKey, "Details de '" + name + "'", resultType, startDate, endDate));
    }
    protected ResponseEntity getABuildCompare(List<BuildProduct> buildProducts, String startDate, String endDate) throws ParseException {

        Integer sizeBuildProduct = buildProducts.size();
        List<Long> allIdBuildProduct = buildProducts.stream()
                .map(BuildProduct::getId)
                .toList();

        List<String> allresult = buildProducts.stream()
                .map(BuildProduct::getResult)
                .collect(Collectors.toList());

        Map<String, List<String>> resByModule = new HashMap<>();
        for (BuildProduct bp : buildProducts) {
            for (Build b : bp.getBuilds()) {
                if (resByModule.get(b.getRepository().getName()) == null) {
                    List<String> res = new ArrayList<>();
                    res.add(b.getResultBuild());
                    resByModule.put(b.getRepository().getName(), res);
                } else {
                    resByModule.get(b.getRepository().getName()).add(b.getResultBuild());
                }
            }
        }


        long numWeeks = ChronoUnit.WEEKS.between(LocalDate.parse(startDate), LocalDate.parse(endDate));
        long numMonth = ChronoUnit.MONTHS.between(LocalDate.parse(startDate), LocalDate.parse(endDate));

        Map<String, List<String>> cutBuildProductResult = new HashMap<>();
        List<String> allKey = new ArrayList<>();
        //Parcours des builds products pour faire une Map<String, List<String>> <Date,List<Resultat>>
        for (BuildProduct bp : buildProducts) {
            String name = "";
            if (numWeeks < 13) {
                name = "S" + this.getWeekNumber(bp.getStartDate().toString());
            } else if (numMonth < 13) {
                name = bp.getStartDate().getMonth().name();
                name = getFrenchMonth(name);

            }

            if (cutBuildProductResult.containsKey(name)) {
                List<String> list = cutBuildProductResult.get(name);
                list.add(bp.getResult());
            } else {
                List<String> l = new ArrayList<>();
                l.add(bp.getResult());
                cutBuildProductResult.put(name, l);
                allKey.add(name);
            }

        }


        //::::::::
        //Graph:::
        //::::::::
        List<Graph> allGraph = new ArrayList<>();
        String[] resultType = {"SUCCESS", "UNSTABLE", "FAILURE", "ABORTED"};

        //Graph -> LineChart : Evolution des résultats globaux
//        allGraph.add(createLinePercentChartGraph(buildProducts, "Evolution des résultats globaux", "Pourcentage", 12, resultType));

        //Graph -> DonutChart : Résultat global
        allGraph.add(createDoughnutPercentChartGraph(allresult, "Résultat global", resultType));

        //Graph -> BarChart : Résultat par module
        allGraph.add(createBarPercentChartGraph(resByModule, "Résultat par module", "Module", "Pourcentage", resultType));

        //Graph -> BubbleChart : Details des builds
        allGraph.add(createColumnPercentCharth(cutBuildProductResult, allKey, "Evolution résultat global", resultType, startDate, endDate));

        //:::::::::::::
        //Indicator :::
        //:::::::::::::
        List<Indicator> allIndicator = new ArrayList<>();
        List<IndicatorDetails> indicatorsDetails = new ArrayList<>();
        IndicatorDetails aDetails;

        long nbSnapshot = (buildProducts.stream().filter(str -> str.getVersion().contains("SNAPSHOT")).toList()).size();
        long nbNull = buildProducts.stream().filter(""::equals).count();

        //Indicator : Number of release
        indicatorsDetails = new ArrayList<>();
        aDetails = new IndicatorDetails("Total", sizeBuildProduct - (nbSnapshot + nbNull));
        indicatorsDetails.add(aDetails);
        allIndicator.add(new Indicator("Nombre de Release", indicatorsDetails));

        //Indicator : Number of version of each branch
        Map<String, Long> v = buildProducts.stream().filter(str -> str.getVersion().contains("SNAPSHOT")).collect(Collectors.groupingBy(e -> e.getBranch().getName(), Collectors.counting()));
        indicatorsDetails = new ArrayList<>();
        List<IndicatorDetails> finalIndicatorsDetails = indicatorsDetails;
        v.entrySet().stream().sorted(Collections.reverseOrder(Map.Entry.comparingByValue())).forEach(va -> {
            finalIndicatorsDetails.add(new IndicatorDetails(va.getKey(), va.getValue()));
        });
        allIndicator.add(new Indicator("Nombre de snapshot", indicatorsDetails));


        //:::::::::::::
        //Compare :::::
        //:::::::::::::
        return ResponseEntity.ok().body(new ReportCompare(allIdBuildProduct, allGraph, allIndicator));
    }

    protected ResponseEntity<ReportCompare> getADeployCompare(List<DeployPF> deployPFS, String startDate, String endDate) throws ParseException {

        // Nombre total de déploiements
        int sizeDeployPF = deployPFS.size();
        List<Long> allIdBuildProduct = deployPFS.stream()
                .map(DeployPF::getId)
                .collect(Collectors.toList());

        List<String> allresult = deployPFS.stream()
                .map(DeployPF::getResult)
                .collect(Collectors.toList());

        // Map pour stocker les résultats par branche
        Map<String, List<String>> resByBranch = new HashMap<>();
        for (DeployPF dp : deployPFS) {
            String branchName = dp.getBuildProduct().getBranch().getName();
            resByBranch.computeIfAbsent(branchName, k -> new ArrayList<>()).add(dp.getResult());
        }

        long numWeeks = ChronoUnit.WEEKS.between(LocalDate.parse(startDate), LocalDate.parse(endDate));
        long numMonth = ChronoUnit.MONTHS.between(LocalDate.parse(startDate), LocalDate.parse(endDate));

        // Map pour découper les résultats par périodes (semaines/mois)
        Map<String, List<String>> cutDeployPfResult = new HashMap<>();
        List<String> allKey = new ArrayList<>();
        for (DeployPF bp : deployPFS) {
            String name = numWeeks < 13 ? "S" + this.getWeekNumber(bp.getStartDate().toString()) : getFrenchMonth(bp.getStartDate().getMonth().name());
            cutDeployPfResult.computeIfAbsent(name, k -> new ArrayList<>()).add(bp.getResult());
            if (!allKey.contains(name)) {
                allKey.add(name);
            }
        }

        // :::::::::::
        // Graphes
        // :::::::::::
        List<Graph> allGraph = new ArrayList<>();
        String[] resultType = {"SUCCESS", "UNSTABLE", "FAILURE", "ABORTED"};

        // Graph -> DonutChart : Résultat global
        allGraph.add(createDoughnutPercentChartGraph(allresult, "Résultat global", resultType));

        allGraph.add(createBarPercentChartGraph(resByBranch, "Résultat par branche", "Branche", "Pourcentage", resultType));

        allGraph.add(createColumnPercentCharth(cutDeployPfResult, allKey, "Evolution résultat global", resultType, startDate, endDate));

        // :::::::::::
        // Indicateurs
        // :::::::::::
        List<Indicator> allIndicator = new ArrayList<>();
        List<IndicatorDetails> indicatorsDetails;

        // Compter les appels de chaque branche
        Map<String, Long> branchCountMap = deployPFS.stream()
                .collect(Collectors.groupingBy(dp -> dp.getBuildProduct().getBranch().getName(), Collectors.counting()));

        // Indicateur : Nombre de déploiements
        indicatorsDetails = new ArrayList<>();
        IndicatorDetails deploymentDetails = new IndicatorDetails("Total", (long) sizeDeployPF);
        indicatorsDetails.add(deploymentDetails);
        allIndicator.add(new Indicator("Nombre de Déploiements", indicatorsDetails));

        // Indicateur : Liste des branches avec leur nombre d'appels
        indicatorsDetails = branchCountMap.entrySet().stream()
                .map(entry -> new IndicatorDetails(entry.getKey(), entry.getValue()))
                .collect(Collectors.toList());
        allIndicator.add(new Indicator("Liste des Branches", indicatorsDetails));

        // :::::::::::
        // Comparaison
        // :::::::::::
        return ResponseEntity.ok().body(new ReportCompare(allIdBuildProduct, allGraph, allIndicator));
    }

    protected Graph createDoughnutPercentChartGraph(List<String> results, String title, String[] categoriesName) {
        Graph doughnutGraph = new Graph();

        doughnutGraph.setTitle(title);
        doughnutGraph.setType(GraphType.DOUGHNUTCHART);

        List<Data> datas = new ArrayList<>();

        Data data = new Data();
        List<DataPoint> dataPoints = new ArrayList<>();

        for (String name : categoriesName) {
            String res = df.format((double) (100 * results.stream().filter(name::equals).count()) / results.size());
            dataPoints.add(new DataPoint(res, name));
        }
        data.setTitle(title);
        data.setDataPoints(dataPoints);
        datas.add(data);

        doughnutGraph.setDataList(datas);
        return doughnutGraph;
    }

    protected Graph createBarPercentChartGraph(Map<String, List<String>> resByObjects, String title, String typeAxeX, String typeAxeY, String[] categoriesName) {
        Graph barGraph = new Graph();

        barGraph.setTitle(title);
        barGraph.setType(GraphType.BARCHART);
        barGraph.setAxeXName(typeAxeX);
        barGraph.setAxeYName(typeAxeY);

        List<Data> datas = new ArrayList<>();
        for (String name : categoriesName) {
            Data data = new Data();
            data.setTitle(name);
            List<DataPoint> dataPoints = new ArrayList<>();

            for (Map.Entry<String, List<String>> moduleRes : resByObjects.entrySet()) {

                List<String> res = moduleRes.getValue();
                String value = df.format((double) (100 * res.stream().filter(name::equals).count()) / res.size());
                dataPoints.add(new DataPoint(value, moduleRes.getKey()));

            }
            data.setDataPoints(dataPoints);
            datas.add(data);
        }


        barGraph.setDataList(datas);
        return barGraph;
    }

    protected Graph createColumnPercentCharth(Map<String, List<String>> resByObjects, List<String> allKey, String title, String[] categoriesName, String startDate, String endDate) throws ParseException {


        Graph columnChart = new Graph();
        columnChart.setTitle(title);
        columnChart.setType(GraphType.COLUMNCHART);
        columnChart.setAxeYName("Pourcentage");

        List<Data> datas = new ArrayList<>();
        //Parcours des catégories
        for (String categorie : categoriesName) {
            Data data = new Data();
            data.setTitle(categorie);
            List<DataPoint> dataPoints = new ArrayList<>();
            for (String key : allKey) {
                List<String> result = resByObjects.get(key);
                long total = result.size();
                long count = result.stream().filter(categorie::equals).count();
                DataPoint dataPoint = new DataPoint();
                dataPoint.setName(key);
                dataPoint.setY(df.format((double) (100 * count) / total));
                dataPoints.add(dataPoint);
            }
            data.setDataPoints(dataPoints);
            datas.add(data);
        }

        columnChart.setDataList(datas);
        return columnChart;
    }

    protected Graph createLinePercentCharth(Map<String, List<String>> cutObjectResult, List<String> allKey, String title, String[] categoriesName, String startDate, String endDate) throws ParseException {

        Graph lineChart = new Graph();
        lineChart.setTitle(title);
        lineChart.setType(GraphType.LINECHART);
        lineChart.setAxeYName("Pourcentage");

        List<Data> datas = new ArrayList<>();
        //Parcours des catégories
        for (String categorie : categoriesName) {
            Data data = new Data();
            data.setTitle(categorie);
            List<DataPoint> dataPoints = new ArrayList<>();

            for (String key : allKey) {
                List<String> result = cutObjectResult.getOrDefault(key, new ArrayList<>());
                long total = result.size();
                long count = result.stream().filter(categorie::equals).count();

                System.out.println(key);

                DataPoint dataPoint = new DataPoint();
                dataPoint.setX(key);
                if (total > 0) {
                    dataPoint.setY(df.format((double) (100 * count) / total));  // Calculer le pourcentage
                } else {
                    dataPoint.setY("0.00");  // Pas de résultats, donc 0%
                }
                dataPoint.setName(null);
                dataPoints.add(dataPoint);
            }

            data.setDataPoints(dataPoints);
            datas.add(data);
        }

        lineChart.setDataList(datas);
        return lineChart;
    }


    protected int getWeekNumber(String date) throws ParseException {
        Calendar calendar = Calendar.getInstance();
        SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd", Locale.FRENCH);
        calendar.setTime(sdf.parse(date));
        return calendar.get(Calendar.WEEK_OF_YEAR);
    }

    protected String getFrenchMonth(String month) {
        String frenchMonth = "";
        switch (month) {
            case "JANUARY":
                frenchMonth = "Janvier";
                break;
            case "FEBRUARY":
                frenchMonth = "Février";
                break;
            case "MARCH":
                frenchMonth = "Mars";
                break;
            case "APRIL":
                frenchMonth = "Avril";
                break;
            case "MAY":
                frenchMonth = "Mai";
                break;
            case "JUNE":
                frenchMonth = "Juin";
                break;
            case "JULY":
                frenchMonth = "Juillet";
                break;
            case "AUGUST":
                frenchMonth = "Aout";
                break;
            case "SEPTEMBER":
                frenchMonth = "Septembre";
                break;
            case "OCTOBER":
                frenchMonth = "Octobre";
                break;
            case "NOVEMBER":
                frenchMonth = "Novembre";
                break;
            case "DECEMBER":
                frenchMonth = "Décembre";
                break;
            default:
                frenchMonth = month;
                break;
        }
        return frenchMonth;
    }



    protected String createValueOfResult(String result) {

        //SUCCESS : 2.7 > 3.3
        //UNSTABLE : 1.7 > 2.3
        //FAILURE : 0.7 > 1.3
        //ABORTED : 0> 0.6
        Random r = new Random();
        Double re = r.nextDouble(0.6);

        Double base = 0.7;
        switch (result) {
            case "SUCCESS":
                base += 2;
                break;
            case "UNSTABLE":
                base += 1;
                break;
            case "FAILURE":
                base = base;
                break;
            default:
                base = 0.0;
                break;
        }
        base += re;
        return df.format(base);

    }

}