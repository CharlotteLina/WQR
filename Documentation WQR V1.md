

<p style="text-align: center;font-size:2em;font-weight:bold"><font color="F44336">WQR</font></p>

L'API **weather-quality-report** est développée en Java avec le framework spring boot. 
L'IHM weather quality report est développée en HTML, CSS et TS avec le framwork Angular

# Sommaire

```table-of-contents
maxLevel:3
```

#  Prérequis 
---
**Pour procéder au développement de**: 

- l'ensemble : 
    - **un serveur disponible Centos 7**(*Action menée par l'équipe infra*):
            - Docker installé dessus (*Action menée par l'équipe Infra*) 
            - Une connexion SSH vers ce serveur
            - Une connexion du serveur vers GIT en générant un clé SSH sur le serveur que l'on placera dans les paramètres de GIT
    - **MobaXterm** pour bénéficier de la connexion à distance sur notre serveur ([MobaXterm Xserver with SSH, telnet, RDP, VNC and X11 - Home Edition (mobatek.net)](https://mobaxterm.mobatek.net/download-home-edition.html))

 - l'API :
    - **Postman** afin de pouvoir tester l'API et d'avoir la documentation ([Download Postman | Get Started for Free](https://www.postman.com/downloads/))
    - **Intelliji** (*Préconisé*) ou autre IDE ([Other Versions - IntelliJ IDEA (jetbrains.com)](https://www.jetbrains.com/idea/download/other.html))

- la BDD : 
    - HeidiSQL** pour la visualisation direct de la base de données ([Download HeidiSQL](https://www.heidisql.com/download.php))

- l'IHM
<div style="page-break-after: always;"></div>
    - **Visual studio code** ([Download Visual Studio Code - Mac, Linux, Windows](https://code.visualstudio.com/download)) ou autre IDE 

---
# 1 - Généralités

## 1.1 Les environnements 

|               | Nom              | IP            |
| ------------- | ---------------- | ------------- |
| Prod          | wqr.sics         | 10.106.46.211 |
| Préprod       | sandbox-fab.sics | 10.106.46.196 |
| Développement | localhost        | 127.0.0.0     |

Pour voir l'installation d'un serveur voir [Installation WQR.SICS](Installation%20WQR.SICS.md)

## 1.2 Architecture

![Diagram 4|600](Diagram%204.svg|800)


Le serveur WQR.sics va contenir trois conteneur docker principaux : 
- MariaDB : Pour la base de donnée
- WQR/back-end : Pour l'API
- wqr-angular-prod: Pour l'IHM

Les jobs Jenkins viennent alimenter la base de donnée DB_WQR via l'API WQR. 
L'IHM vient communiquer avec l'API pour récupérer des rapports en fonction de la donnée enregistré. 
La base de donnée DB_WQR_TEST elle sert lors du lancement de l'API pour les tests unitaires. Elle ne contient jamais aucun donnée. 

---
# 2 - Installation environnement local

Pour le développement en local il faudra avoir 
- une base de donnée installé  ( via Docker) et configuré avec les bases nécessaires
-  Lancer le serveur de l'API ( possiblement via Docker)
-  Lancer le serveur de l'IHM (possiblement via Docker)

## 2.1 Installation Docker Destop

Il est conseillé d'utiliser DockerDestop
- Télécharger DockerDesktop ([Docker Desktop: The #1 Containerization Tool for Developers | Docker](https://www.docker.com/products/docker-desktop/))
- S'inscrire ou connecter son compte
- Installer les extensions suivantes : 
    - Disk Usage
    - Logs Explorer
    - Registry Explorer
    - Ressource Usage
    - Volume backup & share
- Allez récupérer les images voulues (Ne pas prendre latest, prendre une version nommée pour savoir à partir de quel version nous sommes)
    - MariaDB : [mariadb Tags | Docker Hub](https://hub.docker.com/_/mariadb/tags) 
    - eclipse-temurin  : 17-jdk-alpine  [eclipse-temurin Tags | Docker Hub](https://hub.docker.com/_/eclipse-temurin/tags) --> Image essentielle pour le build docker en local du back-end
    - node : 19-alpine  [node Tags | Docker Hub](https://hub.docker.com/_/node/tags?page=&page_size=&ordering=&name=18-alpine)--> Image essentielle pour le build docker en local du front-end
## 2.2 Configuration de l'IDE pour Spring

*La documentation de l'installation pour le développement est faite pour l'IDE Intellij, il est bien évidemment possible d'utiliser un autre IDE il faut juste trouver les équivalences.* 

- Récupérer le repo GIT : ssh://git@gitlab.sics:5001/SICS/engineering/docker/weather-quality-report.git
- Télécharger intellij IDEA (Version utilisé : 2023.1)
- Télécharger JDK 17

- Ouvrir le folder "back-end" du repo git clôné 
- Dans Setting > Project Structure > Projet Settings > Project :  Mettre le JDK téléchargé juste avant
![](Pasted%20image%2020230629155321.png)

- Dans Setting > Settings >Build, Execution, Deployment > Compiler > Java compiler : Verifier que le compiler est bien "Javac" ainsi que le module quality est bien relié à la version 17 
![](Pasted%20image%2020230629155509.png)
- Dans Setting > Settings > Build, Execution, Deployment >Build Tools > Maven : Utiliser un fichier personnalisé pour "User settings file " ici nommé settings-spring.xml  
![](Pasted%20image%2020230629160406.png)

Le fichier settings-spring.xml : 
```xml
<settings xmlns="http://maven.apache.org/SETTINGS/1.0.0" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://maven.apache.org/SETTINGS/1.0.0 https://maven.apache.org/xsd/settings-1.0.0.xsd">
    <proxies>
        <proxy>
            <id>httpProxy</id>
            <active>true</active>
            <protocol>http</protocol>
            <host>w3p2.atos-infogerance.fr</host>
            <port>8080</port>
            <nonProxyHosts>localhost|*.bull.fr|*.sics|127.*|10.106.*</nonProxyHosts>
        </proxy>
        <proxy>
            <id>httpsProxy</id>
            <active>true</active>
            <protocol>https</protocol>
            <host>w3p2.atos-infogerance.fr</host>
            <port>8080</port>
            <nonProxyHosts>localhost|*.bull.fr|*.sics|127.*|10.106.*</nonProxyHosts>
        </proxy>
    </proxies>
</settings>
```


- Lancer un "mvn clean install " pour récupérer les différentes dépendances qui existe dans le pom, la première fois cela peut prendre un peu de temps. Ou double clique sur install dans les commandes maven. 
<div style="page-break-after: always;"></div>

Et pour finir il faut aussi ajouter le plugin Lombok sur intellij afin de pouvoir bénéficier des différents Getter/Setteur générer automatiquement. 
![](Pasted%20image%2020230918141538.png)
> [!info]
> Si le marketplace n'apparait pas, allez dans la configuration à droite de "Installed" et "HTTP Proxy Settings". Verifiez que vous êtes bien sur "Auto-Detect"

<div style="page-break-after: always;"></div>



## 2.3 Installation d'Angular 

#TODO
Installation node JS
## 2.4 Utilisation HeidiSQL


**Démarrer une nouvelle connexion** 
Fichier > Gestionnaire de session 

![](Pasted%20image%2020231002155517.png)
Pour la version local si vous utilisez via Docker il faudra définir un mot de passe et ensuite venir l'utiliser ici et dans la configuration de l'API 

Pour les versions de prod et de préprod les mots de passe sont disponible dans le KeyPass
    - Prod : vms/wqr/(Prod) MariaDB WQR.sics ( Username:  root ou user)
    - Prépro : vms/wqr/(Preprod) MariaDB sandbox-fab.sics (Username : admin)


![](Pasted%20image%2020240527130818.png)

--- 
# 3 - Base de donnée

Le moteur de base de donnée est MariaDB
Sur n'importe quelle environnement (Pro, Préprod ou Développement) il faudra avoir deux bases :
    - DB_WQR                 --> Base de donnée général
    - DB_WQR_TEST        --> Base de donnée de test (Pour les tests unitaires)

![](Pasted%20image%2020240527120402.png)

---
# 4 -  API

## 4.1 Arborescence

La structure du projet est la suivante : 

 - **main**                                        ---> Dossier principal de l'application
     - **java** /
         - **config**/                            ---> Folder pour la configuration des différents roles (*Voir section Developpement du produit > Fichier de configuration> SecurityConfiguration)
         - **controller**/                       ---> Folder qui permet de gérer les interactions entre l'utilisateur de l'application et l'application
         - **model**/                            ---> Folder représentant les modèles de nos objets métiers qui seront manipulés par les autres couches 
         - **repository**/                      ---> Folder qui représente les interactions avec les sources de données externes (Notre BDD)
         - **service**/                           ---> Folder contenant l'implémentation des traitements spécifiques à l'application 
         - **QualityApplication**.java   ---> Main de l'API 
    - **ressources**/                           ---> Contient les différents fichiers de configuration pour l'application  (*Voir section Developpement du produit > Fichier de configuration>application.properties)
 - **test**                                          ---> Dossier contenant l'ensemble des tests unitaires  (*Voir section Developpement du produit > Test)

Dans les dossier controller, model, repository, service ou test on retrouvera les dossiers : Build, CodeCoverage, Command, Deploy, Product,Test,User,Quality,Report    
Chacun a un ou plusieurs fichiers liés directement au modèle de base de données. 

Retrouvez l'explication du code pour controller, model, repository et service dans la section *Developpement du produit > Code*

## 4.2 Fichier de configuration
#### application.properties 

Il existe 3 application.properties : 
- application.properties : utilisé pour la prod
- application-dev.properties  : pour les développement
- application-test.properties  : utilisé pour nos tests unitaires

**Exemple celui de dev :** 
```Properties
1 - spring.jpa.hibernate.ddl-auto=create-drop                                               
2 - spring.datasource.url=jdbc:mariadb://localhost:3305/DB_WQR 
3 - spring.datasource.username=admin  
4 - spring.datasource.password=*****  
5 - spring.jpa.show-sql= true  
6 - spring.jpa.properties.hibernate.dialect = org.hibernate.dialect.MariaDBDialect  
7 - spring.datasource.driver-class-name=org.mariadb.jdbc.Driver  
8 - spring.jpa.defer-datasource-initialization=true  
9 - spring.sql.init.mode=always
```

1 - Contrôle le comportement de notre base de données : ici create-drop, donc a chaque démarrage de l'application il y aura création des tables dans la BDD et suppression lors de l'arrêt de l'API. Dans le fichier de prod ce champs est mis sur update car on souhaite conserver la donnée même si l'API est arrêtée. 
2 - Le lien de connexion vers notre base de données, dans notre exemple, la dernière valeur est le nom de notre base (ici pour Dev : qualimetrie_dev)
3 - 4 - Username et password pour notre base de données on peut retrouver l'information dans le keyPass (Sandbox>wqr>Admin BDD)
5 - Va permettre d'être plus verbeux au niveau des logs et surtout des commandes SQL exécutées
6 - Va permettre à Hibernate de générer un meilleur SQL pour la base de données choisie
7 - Le nom du driver par rapport à la base de données choisie (MariaDB)
8 - Cette propriété permet d'attendre la fin de l'initialisation de Hibernate avant d'exécuter le script SQL
9 - Pour les initialisations à partir d'un script
Le 8 et 9 ne sont pas présents pour la prod, on n'exécute jamais le script SQL qui est un jeu de données de test

<div style="page-break-after: always;"></div>
#### Pom.xml

MariaDB : 
```
<dependency>  
    <groupId>org.mariadb.jdbc</groupId>  
    <artifactId>mariadb-java-client</artifactId>  
    <scope>runtime</scope>  
</dependency>
```

Lombok
> [!warning]
>Si votre JDK est > 18, vous obtiendrez peut-être l'erreur ci-dessous
>Vous devrez alors fixer la version de Lombok dans le pom à une version supérieure ou égale à 1.18.30
>>[!danger]
>>Class com.sun.tools.javac.tree.JCTree$JCImport does not have member field 'com.sun.tools.javac.tree.JCTree qualid'
>>>

Voici un exemple. N'hésitez pas à utiliser une version plus récente selon quand vous lisez cette documentation.
```xml 
<dependency>  
    <groupId>org.projectlombok</groupId>  
    <artifactId>lombok</artifactId>  
    <version>1.18.26</version>  
    <optional>true</optional>  
</dependency> 
```

#### SecurityConfiguration

Ce fichier de configuration est mis en place pour la sécurité de l'application et notamment pour les différents rôles et droits associés à eux. 

Ce fichier placé dans le folder config va avoir : 
- L'annotation @Configuration qui permet de déclarer que le composant ne sert qu'a configurer le contexte de l'application
- L'annotation @EnableWebSecurity qui permet de trouver et d'appliquer automatiquement la classe à la WebSecurity globale
- Une méthode passwordEncoder pour encoder un mot de passe
- Une méthode securityFilterChain qui définit les droits existant avec les rôles associés (READ,WRITE,DELETE)
- Une méthode userDetailsService qui vient définir les différents types d'utilisateurs (JENKINS-READ,JENKINS-WRITE, ADMIN)


## 4.3 Code 

#### Model

Le modèle représente la définition de nos objets qui sera aussi utilisé pour la création de la donnée dans la base de données. 
On retrouve 
**- Les décorateur :**
    - @Getter & @Setteur qui génèrent automatiquement chaque getter et setter de nos attributs
    - @AllArgsConstructor & @NoArgsConstructor qui génèrent les constructeurs avec l'ensemble des attributs et avec aucun argument
    - @Entity qui nous indique que c'est une classe persistante
    - @Table fixe le nom de la table que l'on retrouvera dans la BDD
    - @Id définit les clés primaires
    - @GeneratedValue qui est utilisé pour les id qui permet de gérer l'auto incrémentation
    - @Column définit le nom des colonnes que l'on retrouvera dans la BDD 
    - @JsonView définit les champs que l'on pourra voir dans les différentes view qui seront utilisées par le controleur (on retrouvera les vues dans la classe model/Views.java )
**- Les attributs de classe** 
**- Les constructeurs (autre que tous les attributs & sans attribut)**
#### Repository

Il s'agit des interfaces qui vont fournir un ensemble de méthodes adapté pour interagir avec la BDD

On retrouve :
- **Le "JpaRepository<Command,Long>**  Nous permet d'accéder aux méthodes de base d'accès pour la base de données (GET,CREATE,UPDATE,DELETE)
- **@Query** qui permet de définir de nouvelles requêtes SQL personnalisées (Il est possible de faire des requêtes qui ne sont pas native (nativeQuery=false))
#### Service

Dans le folder service on va avoir l'implémentation du service 
    On retrouve :
        - La déclaration des 5 méthodes de base (save, getAll, getById, Update and Delete) ainsi que la/les méthode personnalisée
        - **@Service** qui définit que cette classe détient la logique métier

#### Controller

On va ici gérer les interactions entre l'application et l'utilisateur 
On retrouve 
- @RestController : Regroupe les annotations @Controller & @ResponseBody ce qui permet de simplifier d'éviter d'annoter chaque méthode avec @ResponseBody
- @RequestMapping : Permet de mapper les requêtes, ici cela définit la base de notre URI pour les requêtes de l'API 
- @PostMapping, @GetMapping, @PutMapping, @DeleteMapping qui viennent définir les types de requêtes, et aussi de définir la fin de l'URI si besoin
- @JsonView : qui était déjà présente dans nos modèles, elle fait ici le lien au niveau de l'affichage. On va choisir pour certaines requêtes d'avoir des affichages définis pour nos objets ( pour éviter aussi les boucles infinies)
Le code ensuite consomme la classe Service principalement. 
On trouve la méthode checkCommand qui elle est une méthode de sécurité afin de sortir une erreur parlante pour l'utilisateur en cas d'erreur sur la saisie de son json pour la creation et ou la mise à jour d'un objet. 


## 4.4 Création de jar 

La création de nos jar se fait directement sur notre IDE via Maven, en exécutant la commande "mvn clean install" ou bien en double cliquant "install" dans l'arborscence de maven
![](Pasted%20image%2020230823170250.png)

On va ensuite retrouver dans le folder target différents folder ainsi que notre jar avec la version & le nom définit dans le pom 
![](Pasted%20image%2020230823170615.png)

Extrait du Pom :
```xml
<version>0.0.1-SNAPSHOT</version>  
<name>quality</name>
```

<div style="page-break-after: always;"></div>



## 4.5 Couverture de code 
### Classe de Test (TU)
On retrouvera dans le folder test/net/atos/quality les folders suivants : build, codecoverage, command, deploy, product, report et test qui correspondent à nos controlleurs qui eux correspondent à nos différents objets. Dans chaque folder on va trouver un a plusieurs fichiers de test selon le nombre de contrôleurs liés. 
Nos classes de tests sont exécutées sur la BDD de Test (qualimetrie_test) qui est purgée à la fin des tests. 
### Jacoco avec Intellij
Afin de connaitre la couverture de notre code, on peut sur intellij exécuter la commande suivante "Run Tests in 'quality' with Coverage " en utilisant le clique droit sur net.atos.quality a l'intérieur du folder test. On peut aussi jouer de manière unitaire de la même manière. 
<div style="page-break-after: always;"></div>
### Test Integration
#AREFAIRE
Dans wqr/back-end-TI on va trouvé un script java qui vient tester l'ensemble des endpoint exposés par l'API 
Pour définir l'environnement ainsi que l'authentification il faut modifier le fichier  configuration/config.java et  modifier la valeur "MAIN_URL" & "BASIC_AUTH"

A la fin des tests on va retrouver deux fichiers json dans le dossier resultat :
- **globalResult.json** : Contenant un résultat global des tests
- **detailResult.json** :  Va avoir le détail des body retourner par l'API 


## 4.6 Postman 

### Installation

Après avoir télécharger Postman, il faut importer 3 fichiers json situé dans back-end/Postman: 
- **WQR_V1.postman_collection.json** : La collection en elle même avec la documentation intégrée
- Env-(Prod) WQR.sics.postman_environment.json : Environnement de Production
- Env-(Préprod) sandbox-fab.sics.postman_environment.json : Environnement de Préprod
- Env-(Dev) Local.postman_environment.json : Environnement local ( A modifier en fonction de la configuration de votre base de donnée)

Les  environnements ne sont pas obligatoire à importer, il nous permettent d'avoir la variable {{url}} , {{username}} et {{pwd }} utilisée sur l'ensemble des requêtes déjà définies avec la prod, la préprod et le dev et la possibilité de switcher entre les trois sans avoir a changer de valeur mais uniquement en changeant d'environnement. 

Si on ne souhaite pas avoir d'environnement, il faudra sur la collection faire une clic sur les trois '...' > Edit > Onglet Variables : Ajouter les variables 'url' , 'username' et 'pwd'

### Utilisation

![](Pasted%20image%2020230825134933.png)
*On retrouve en haut a droite (Developpement WQR) la possibilité de changer d'environnement sans changer la collection qui est la même*

Pour accéder à la documentation il faut cliquer sur les trois petits point à coté du nom de la collection et faire "View Documentation", on pourra retrouver la définition des objets et des explications succinctes sur les différentes méthodes. 
![](Pasted%20image%2020230823173602.png)
 







---
# 5 -  IHM

L'IHM est développé en Angular 17. 

## 5.1 Arborescence 

![](Pasted%20image%2020240722171034.png)
component : va contenir l'ensemble des composants utile
environments : contient le fichiers avec l'ensemble des variables, et notamment l'URL de l'API ainsi que l'authentification
model : représente les différentes interfaces qui font le lien avec l'API au niveau des objets utilisés 
pages : correspondant aux différentes pages citer dans le fichier app.routes.ts
pipe : correspond au pipe mise en place et utiliser dans le HTML 
services : contient les services avec un service de connexion vers l'API WQR et un service appeller utils qui permet principalement la coloration en fonction des résultats 
asset : contient les images du projet 

app.component (html, sccs, spect.ts, ts ) correspond au composant de base utiliser par la balise ```<app-root>``` dans le index.html
app.config (server.ts et ts) n'ont pas été touché ce sont les fiches de base générer lors de la création d'un projet Angular
app.routes.ts : contient les routes de l'IHM 
index.html est la page de base
style.scss est la feuille de style commune à l'ensemble de l'application 
main (server.ts et ts) n'ont pas été touché ce sont les fichies de base générer lors de la création d'un projet Angular


## 5.2 Les routes

On va retrouver six routes principales : 
 - Les routes de l'accueil :
     - /choose => Permet de choisir un produit 
     - /home   => Accueil de l'application
 - Les routes de génération de rapport 
     - /generate => Choix pour la génération d'un rapport
     - /generate/report => Rapport générer 
 - Les routes de comparaison de rapport 
     - /compare => Choix pour la comparaison d'un rapport
     - /compare/report => Comparaison de rapport générer 


Chaque route correspond à une page disponible dans le dossier page. Ces pages sont en réalité des composants placer à part afin de séparer les composants utilisé à l'intérieur et le composant (page) principale qui appel ces autres composants. 

## 5.3 Les pages et leurs composants 

A savoir que sur la page principale ```app-component``` on aura le composant  ```menu``` (component/home/menu) qui sera par conséquent nativement sur l'ensemble des pages sauf la page de choix d'un produit ou il est rendu invisible

![WQR_Legend.excalidraw|600](WQR_Legend.excalidraw.md)

### 5.3.1. Choix d'un produit ```choose-product```

La page de choix du produit doit être saisie obligatoirement cela permet de définir le produit sur lequel WQR va faire ses recherches. 
Ce composant permet de faire la saisie du produit qui sera conserver dans le localStorage sous le nom "productSelect"

![WQR_PageChooseProduct.excalidraw|600](WQR_PageChooseProduct.excalidraw.md)
### 5.3.2 Page d'accueil ```home```

La page d'accueil contient le nom du produit sélectionné, les 10 derniers rapports pour le produit et les 3 derniers rapports météo
![WQR_PageHome.excalidraw|800](WQR_PageHome.excalidraw.md)

### 5.3.3. Choix de génération de rapport ```generate-report```

La page de choix de génération de rapport est l'endroit ou l'on va pouvoir sélectionner quel rapport l'on veut générer en fonction du produit, du type de rapport et de la version produit 
![WQR_PageGenerateReport.excalidraw|800](WQR_PageGenerateReport.excalidraw.md)

### 5.3.4. Affichage de génération de rapport```generate-report-display```

La page de d'affichage de la génération de rapport contient 4 onglets avec l'accès aux rapports météo, de build, de déploiement et test d'intégration. 

![WQR_PageGenerateReportDisplay.excalidraw|800](WQR_PageGenerateReportDisplay.excalidraw.md)
#### 5.3.4.1 Rapport météo 

Le rapport météo va contenir un résumé global, des trois différents rapports (Build, déploiement et test)

![WQR_RapportMeteo.excalidraw|800](WQR_RapportMeteo.excalidraw.md)
#### 5.3.4.2 Rapport de build 

Le rapport de build va contenir le résumé pour la compilation , les tests unitaires, sonar et Upsource. 
Il va aussi y avoir la possibilité de n'avoir le détail que de l'un des quatre éléments cités précédemment. 
![WQR_RapportBuild.excalidraw|1600](WQR_RapportBuild.excalidraw.md)
#### 5.3.4.3 Rapport de déploiement*

Le rapport de déploiement va contenir le résultat global pour chaque PF et le détail de déploiement effectué pour chacune.
Comme pour les autres rapports on aura les onglets pour avoir le détail uniquement sur une PF 

![WQR_RapportDeploy.excalidraw|1600](WQR_RapportDeploy.excalidraw.md)
#### 5.3.4.4 Rapport de test intégration 

Le rapport de test va contenir le résultat global des tests avec le détails pour chaque test d'intégration effectué avec du détail comme le nombre de test OK, KO, Warning, la durée, le type. 
![WQR_RapportTest.excalidraw|1600](WQR_RapportTest.excalidraw.md)
### 5.3.5. Choix de comparaison de rapport ```compare-report```

La page de choix de comparaison des rapports va permettre de sélectionner le produit, le type de donnée à comparer et la période sur laquelle on veut comparer la donnée. 

![WQR_PageCompareReport.excalidraw|800](WQR_PageCompareReport.excalidraw.md)
### 5.3.6. Affichage de comparaison de rapport ```compare-report-display```



#### 5.3.6.1 Comparaison des builds 



#LesAutresComparaisonsDoiventEtreFaite



---
# 6 -  Jenkins librairie

## 6.1 Arborescence

Dans l'usine Jenkins :
- > src > WQRV1 :
    - WQR.groovy   --> Contient les méthodes génériques (GET POST & PUT) pour l'API WQR
    - WQRAuthentification.groovy   -->  Contient les différents rôles qui peuvent utiliser l'API, utilisés pour l'authentification pour WQR
    - API/ --> Contient autant de script qu'il y a d'objet dans l'API , chaque script va venir appeler le script WQR.groovy avec des spécificités qui sont propres à l'objet 
- >groovy>pipeline > wqr : 
    - WQRV1TestPipeline.groovy  --> Pipeline de test pour l'API 

Le fichier WQR.groovy va contenir le lien vers le serveur que l'on implémente. (wqr.sics pour la prod)
## 6.2 Utilisation librairie 

Dans vars/utilsWQRV1.groovy on va retrouver l'utilitaire appelé directement par nos pipelines.  On retrouvera les méthodes appelant les méthodes des scripts des objets. Il s'agit d'une surcouche qui permet surtout d'être consommé par les pipelines car l'appel comme dans WQRTest n'est pas fonctionnel, il est obligatoire de passer par l'utilitaire. 

## 6.3 Pipeline Jenkins

Plusieurs pipeline vont venir implémenter la base de données

![JenkinsImplArchi|1500](JenkinsImplArchi.md)

A savoir que meme un lancement indépendant de build-project, build-maven ou build-gradle sera enregistré, de même pour le un check-quality-gate

Seul les jobs de déploiement et de test on besoin de recevoir un id correspondant à la version déployé ou tester. Si cette formation est manquante alors n'enregistre pas car la donnée ne serait pas liée. 
#### CI-SICS
- `ci-sics` :
    - `build-sics` : 
        - `build-project` : [BUILD-PROJECT](#BUILD-PROJECT)
    - `check-quality-gate-sics`:
        - `check-quality-gate-project` : [CHECK-QUALITY-GATE-PROJECT](#CHECK-QUALITY-GATE-PROJECT)
    - `deploy-sics`:
        - Création de l'objet DeployPF
        - `pims-deploy`
            - Création de l'objet DeployPFDetail
            - Mise a jour de l'objet DeployPFDetail
        - `sics-platform-deploy`
            - Création de l'objet DeployPFDetail
            - Mise a jour de l'objet DeployPFDetail
        - `codecoverage-platform-deploy`
            - Création de l'objet DeployPFDetail
            - Mise a jour de l'objet DeployPFDetail
    - (PF Engie) `cats-test-runner` : [CATS-TEST-RUNNER](#CATS-TEST-RUNNER)
    - (PF SICS) `spq-test-runner`:
        - `cats-test-runner`:[CATS-TEST-RUNNER](#CATS-TEST-RUNNER)
        - `stimpack-test-runner`: [STIMPACK-TEST-RUNNER](#STIMPACK-TEST-RUNNER)

#### CI-SICSA
- `ci-sicsa` :
    - `build-sicsa` : 
        - `build-project` : [BUILD-PROJECT](#BUILD-PROJECT)
    - `check-quality-gate-sics`:
        - `check-quality-gate-project` : [CHECK-QUALITY-GATE-PROJECT](#CHECK-QUALITY-GATE-PROJECT)
    - `deploy-sicsa`:
        - Création de l'objet DeployPF
        - `pims-deploy`
            - Création de l'objet DeployPFDetail
            - Mise a jour de l'objet DeployPFDetail
        - Création de l'objet DeployPFDetail
        - Mise a jour de l'objet DeployPFDetail

#### CI-SICSD
- `ci-sicsd` :
    - `build-sicsd` : 
        - `build-project` : [BUILD-PROJECT](#BUILD-PROJECT)
    - `deploy-sicsd`:
        - Création de l'objet DeployPF
        - `pims-deploy`
            - Création de l'objet DeployPFDetail
            - Mise a jour de l'objet DeployPFDetail
        - `macsd-platform-deploy`
            - Création de l'objet DeployPFDetail
            - Mise a jour de l'objet DeployPFDetail
        - `apk-platform-deploy`
            - Création de l'objet DeployPFDetail
            - Mise a jour de l'objet DeployPFDetail

    - (PF SICSD) `stimpack-test-runner`: [STIMPACK-TEST-RUNNER](#STIMPACK-TEST-RUNNER)

#### BUILD-PROJECT
- `build-project` :
    - Création de l'objet build_product
    - `build-maven` : 
        - Création de l'objet build
        - Création des objets tests unitaires et mise à jour 
        - Mise a jour de l'objet build en fonction des évènements
    - `build-gradle` : 
        - Création de l'objet build
        - Création des objets tests unitaires et mise à jour 
        - Mise a jour de l'objet build en fonction des évènements
#### CHECK-QUALITY-GATE-PROJECT
- `check-quality-gate-project` :
    - `check-quality-gate` : 
        - Récupération de l'objet GitBranch
        - Récupération de l'objet GitRepository
        - Creation d'une liste de UpsourceCause
#### CATS-TEST-RUNNER
- `cats-test-runner` :
    - Création de l'objet TestIntégration
    - Mise à jour de l'objet TestIntégration
#### STIMPACK-TEST-RUNNER
- `stimpack-test-runner` :
    - Création de l'objet TestIntégration
    - Mise à jour de l'objet TestIntégration
    - Création des objet TestIntegrationDetail
    - Mise à jour de l'objet TestIntegrationDetail



# 7 Livraison 

## 7.1 Manuel

Voir la documentation dans obsidian-planning RELEASE_L_WQR [Template/Release L_WQR.md · master · SICS / engineering / Documents / Obsidian Planning · GitLab](https://gitlab.sics/SICS/engineering/documents/obsidian-planning/-/blob/master/Template/Release%20L_WQR.md)

## 7.2 Automatique

#AmettreEnPlace