export const environment = {

  // Connexion a l'API WQR
  // backUrl : "http://localhost:8080/",
     backUrl : "http://sandbox-fab.sics:8085/",
  // backUrl : "https://wqr.sics/api/",


  basicAuth : "Basic SkVOS0lOUy1XUklURTpnOHNXa0ExNjZ4c1FyMDY=",

  // //Global
  title:"wqr",
  report:"report",

  buildType:"BUILD",
  buildTypeLowerCase:"de build",
  testType:"TEST",
  testTypeLowerCase:"de test",
  deployType:"DEPLOIEMENT",
  deployTypeBis:"DEPLOY",
  deployTypeLowerCase:"de déploiement",
  weatherType:"METEO",
  weatherTypeLowerCase:"météo",

  versionNumber:"1.1.4",
  version:"Version",

  storageProductName:"productSelect",

  iconPath:"assets/images/logoWQRFav.png",
  //Tab
  compilation:"COMPILATION",
  unitTest:"TEST UNITAIRES",
  sonar:"SONAR",
  upsource:"UPSOURCE",


  //RESULT
  failure:"FAILURE",
  warning:"WARNING",
  success:"SUCCESS",
  unknown:"UNKNOWN",
  unstable:"UNSTABLE",
  pending:"PENDING",
  ok:"OK",
  ko:"KO",
  error:"ERROR",
  na:"N/A",
  notanalyzed:"NOT ANALYZED",

  //Type
  maven:"MAVEN",
  buildMaven:"build-maven",
  gradle:"GRADLE",
  buildGradle:"build-gradle",

  //URL
  sonarUrl:"http://qualimetrie.sics/sonar/",
  upsourceUrl:"http://qualimetrie.sics/upsource/",
  jenkinsUrl:"http://jenkins.sics/job/",
  testReportUrl:"/testReport",

  //Path
  homePath:"/home",
  choosePath:"/choose",
  generatePath:"/generate",
  generateReportPath:"/generate/report",
  comparePath:"/compare",
  compareReportPath:"/compare/report",

  //BuildProductRole
  component:"component",
  parent:"parent",


  //Column
  firstCol:"#",
  nameCol:"name",
  nbTestCol:"nbTest",
  nbTestOkCol:"nbTestOk",
  nbTestErrorCol:"nbTestError",
  nbTestSkippedCol:"nbTestSkipped",

  typeCol:"type",
  infoCol:"informations",
  authorCol:"author",
  reviewerNotFinishCol:"reviewerNotFinish",

  compilationCol:"compilationcol",
  unitTestCol:"unittestcol",

  availableType:"Types possible: ",
  typeMissing: "Il manque le type de rapport",
  typeisNotCorrect:"Le type de rapport :'",
  availableProduct:"Nom de produit possible: ",
  productMissing: "Il manque le nom du produit",
  productisNotCorrect:"Le nom du produit  :'",
  versionMissing:"Il manque la version du produit",
  versionIsNotCorrect:"Le nom de la version produit :'",
  isNotCorrect: "' n'est pas correct",



};
