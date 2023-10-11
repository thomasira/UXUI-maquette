
# Maquettes Stampee | UX/UI

Thomas Aucoin-lo  
e2395387

## index

* [To-do](#to-do)
* [Liens](#liens)
* [Mises à jour](#mises-à-jour)
* [HTML](#sur-la-structure-html)
* [CSS](#sur-la-méthodologie-css)
* [Fonctionnalitées](#sur-les-fonctionnalitées)
* [Javascript](#sur-le-js)


## To-do

accueil->
    header@ 70vh: animation du train left to right, révélant titre?
        voir catalogue
        connexion
        voir actualités
    section pop: 3-4 enchères populaires
        same as section pour 'suggestion' mais en variant?



## Liens  

**webdev**:  
* **page accueil**: https://e2395387.webdev.cmaisonneuve.qc.ca/UXUI-maquette
* **page enchères**: https://e2395387.webdev.cmaisonneuve.qc.ca/UXUI-maquette/enchères
* **page enchère**: https://e2395387.webdev.cmaisonneuve.qc.ca/UXUI-maquette/enchère

**figma**:   
https://www.figma.com/proto/TojHhJMTOzK8Yy7I9FIPIG/Analyse-de-projet?type=design&node-id=29-460&t=j48LX1jvYfjnqQ12-1&scaling=scale-down-width&page-id=0%3A1&mode=design  

**github**:  
https://github.com/thomasIRA/UXUI-maquette  

## Mises à jour

> #### maquette n2 - 04/10/2023
> * ajouter la page [enchère](#pages-enchère) 
> * changer les noms de classes variants
> * rajouter des composants css atomes
> * fixer bug sur séléction filtre
> * rajouter fonctionnalitée sur image hover 

> #### maquette n3 - 11/10/2023
> * ajouter la page [accueil](#page-accueil)
> * corriger la coquille 'contacteras'
> * changer 'encheres.html' pour 'catalogue.html'
> * ajouter fonctionnalitée 'petit train'

## Sur la structure HTML

**ignorer le schoolWrapper*  

Le projet contient deux navigations, une entête, un main(section enchère), une section bas de page ainsi qu'un pied de page. Le contenu est limité à 1400px de large pour l'entièreté du projet.

### Arborescence

#### SITE
* ACCUEIL
    * page accueil*
* ENCHÈRES
    * page catalogue
* ENCHÈRE
    * pages enchère

> ### page accueil
> * nav main  
> * nav sec  
> * entête
> * section lien vers catalogue
> * section lien vers profil ou connexion
> * fonctionnalitée 'petit train'

> ### Pages catalogue
> * nav main  
> * nav sec  
>   * sous-nav *(seulement en écran large)*  
> * entête
> * main *(section enchère)*  
>   * nav enchère  
>   * aside *(filtre)*  
>   * cartes enchères
> * section bas de page
>   * promo, joindre, etc  
>   * autres infos
> * pied de page

> ### Pages enchère
> * nav main  
> * nav sec  
>   * sous-nav *(seulement en écran large)*  
> * fiche enchère 
>   * images et catégories
>   * info du timbre
>   * miser et plus
> * suggestions
>   * 3-4 cartes d'enchère
> * mentions
>   * les tags mentions
> * section bas de pages
>   * promo, joindre, etc  
>   * autres infos
> * pied de page

### commentaires
* Une section promo ou vedette pourrait être rajouté au projet sous l'entête.  
* Un fond d'écran texturé serait intéressant  

## Sur la méthodologie css  

Les feuilles de styles sont organisées et préfixées selon leur type de module. Un fichier de structure gère la structure générale et celle des éléments non classifiés. Les variables de tailles sont pour la plupart '*clampées*' et s'ajustent selon la largeur de l'écran. 

### commentaires

* les propriétées mériteraient une factorisation  
* les '*clamps*' sont parfois utilisées en taille verticale alors qu'elles s'adaptent à l'horizontale.  
* les classes **states** et **modal** sont utilisées par les scripts.

## Sur les fonctionnalitées

**les fonctionnalités de la maquette courante sont superficielles et ne représentent pas nécessairement le produit final.* 

### navigation

> La navigation est toujours présente en haut de page *(tous les formats)* mais elle est simplifiée en version mobile, où le sous-menu n'est pas actif. En format mobile, des onglets sont présents en tout temps dans le bas de l'écran permettant d'ouvrir le menu et autres *(les onglets ne mènent à rien dans la version courante  du projet)*.

### recherche

> La barre de recherche fait parti de la navigation et est donc présente sur toutes les pages. Elle contient un module de recherche avancée accesible par l'icône ***+***. Elle est aussi accessible à partir des onglets d'écran en version mobile.  
**la barre de recherche ne contient aucun module dans la version courante du projet*.

### filtre

> La boîte de filtre est toujours présente sur la page d'enchères. Elle est divisé en 2 sections, soit les filtres normaux, eux-mêmes contenant des sous-filtres et les filtres personnalisés. Les sous-filtres sont accessibles suivant un clic sur le filtre parent. En format écran large, elle suit le défilement de l'écran pour un accès facile. En format mobile, elle reste statique au haut de la page mais est accessible à partir des onglets de bas d'écran.  
**Les filtres présents dans la version courante du projet sont à titre indicatif et ne représentent pas la version finale.*

### petit train

> Le petit train est actif dans le **main** de la page d'accueil. Il suit et fait face au curseur dans la zone délimitée. Pourrait être plus fluide. Consultez **[train.js](./assets/script/class/Train.js)**


## Sur le js

Un script minimal est présent pour activer les fonctionnalités demo.

* boîte filtre  
    * les targets ne sont pas au point, voir checkbox
* image étampe