*WIP*

#Adventure Editor

## But du projet

Adventure Editor est un éditeur d'aventures pour un moteur d'aventures de type "Livre dont vous êtes le héro" que nous comptons créer.

Le principe est simple : une aventure est un ensemble d'évènements (de type différents) qui vont s'enchaîner en fonction des choix du joueur. Un évènement peut avoir un ou plusieurs point de sortie, et il existe un ou plusieurs évènements de départ et un ou plusieurs évènements de fin (réussite ou mort du personnage !)

Nous voulons que notre moteur supporte un système de personnage avec statistiques, niveaux et expériences, etc ainsi qu'un système d'équipement comme un RPG classique. Les évènements pourront dépendre de ces statistiques ou de l'équipement du personnage pour conditionner leur succès.

De même, un système d'évènements devra être créés permettant de rediriger vers des états particuliers en fonction d'éléments de jeu classique (pv <= 0 mène vers un évènement de mort par exemple).

## L'éditeur
Le but de l'éditeur est de permettre à tout un chacun de créer les évènements en disposant d'une interface graphique claire et simple d'utilisation.

## Technologies
Nous avons choisi la technologie node-webkit pour pouvoir générer l'application en tant que standalone déployable sur la plupart des systèmes d'exploitations, mais nous gardons la possibilité à l'esprit de générer une application web standard.

Nous utilisons angularjs, angularui et bootstrap comme briques de base de notre application.

### Dépendances
Le projet requiert que NodeJs http://nodejs.org/ soit installé sur la machine.
Il nécessite aussi que bower http://bower.io/ soit installé ainsi que grunt-cli http://gruntjs.com/
Ces applications doivent être installées en utilisant le node package manager (npm) avec l'option global :

```
npm install -g bower
npm install -g grunt-cli
```

### Initialiser le projet
Le code sur GitHub ne comporte pas tous les fichiers nécessaires car ils sont rechargés dans la copie locale du développeur. Pour mettre le projet dans un état initial fonctionnel, faire la commande suivante pour installer les modules NodeJs nécessaires (en utilisant le "Command Prompt" et en se plaçant à la racine du projet) :

```
npm install
```

Afin de télécharger les dépendances bower:

```
bower install
```

Une fois les dépendances téléchargées, un build de test de l'appli peut être réalisé avec :

```
grunt dist-win
```
Un executable est alors généré dans un dossier tmp à la racine du projet.
