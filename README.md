
# Maquette Enchères Stampee

Thomas Aucoin-lo  
e2395387

## Sur la structure HTML

**ignorer le schoolWrapper*  

Le projet contient deux navigations, une entête, un main(section enchère), une section bas de page ainsi qu'un pied de page. Le contenu est limité à 1400px de large pour l'entièreté du projet.

> ## Arborescence
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

### commentaires

* Une section promo ou vedette pourrait être rajouté au projet sous l'entête.  
* Un fond d'écran texturé serait intéressant  

## Sur la méthodologie css  

Les feuilles de styles sont organisées et préfixées selon leur type de module. Un fichier de structure gère la structure générale et celle des éléments non classifiés. Les variables de tailles sont pour la plupart '*clampées*' et s'ajustent selon la largeur de l'écran. 

### commentaires

* les propriétées mériteraient une factorisation  
* les '*clamps*' sont parfois utilisées en taille verticale alors qu'elles s'adaptent à l'horizontale.  
* les classes **states** et **modal** sont utilisées par les scripts.

## Sur les fonctionnalités

**les fonctionnalités de la maquette courante sont superficielles et ne représentent pas nécessairement le produit final.* 

### navigation

> La navigation est toujours présente en haut de page *(tous les formats)* mais elle est simplifiée en version mobile, où le sous-menu n'est pas actif. En format mobile, des onglets sont présents en tout temps dans le bas de l'écran permettant d'ouvrir le menu et autres *(les onglets ne mènent à rien dans la version courante  du projet)*.

### recherche

> La barre de recherche fait parti de la navigation et est donc présente sur toutes les pages. Elle contient un module de recherche avancée accesible par l'icône ***+***. Elle est aussi accessible à partir des onglets d'écran en version mobile.  
**la barre de recherche ne contient aucun module dans la version courante du projet*.

### filtre

> La boîte de filtre est toujours présente sur la page d'enchères. Elle est divisé en 2 sections, soit les filtres normaux, eux-mêmes contenant des sous-filtres et les filtres personnalisés. Les sous-filtres sont accessibles suivant un clic sur le filtre parent. En format écran large, elle suit le défilement de l'écran pour un accès facile. En format mobile, elle reste statique au haut de la page mais est accessible à partir des onglets de bas d'écran.  
**Les filtres présents dans la version courante du projet sont à titre indicatif et ne représentent pas la version finale.*

## Sur le js

Un script minimal est présent pour activer les fonctionnalités demo.

* boîte filtre  
    * les targets ne sont pas au point, voir checkbox
* image étampe