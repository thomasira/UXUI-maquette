
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