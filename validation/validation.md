
## VALIDATION

la validation est effectué sur W3C pour les scripts HTML et CSS.
Lighthouse et Wave sont employé pour avoir une analyse de l'accessibilité et autres statistiques.

#### `HTML`

Les 3 fichiers HTML contiennent des **WARNING** pour toutes sections et articles manquant un titre. Il serait présentement compliqué de changer la structure pour remédier à ces avertissements.

#### `CSS`

Tous les fichiers CSS ont été validées dans un gros fichier. Il ne contient pas d'erreur mais **W3C** ne lit malheureusement pas les champs lorsque une variable dynamique est utilisée. Je n'ai pas inclus de capture du fichier en soi car il fait + de 1000 lignes.

#### `Lighthouse`

Toutes les pages emploient de bonnes pratiques et respectent le SEO. L'accessibilité est handicappé de 2 points pour une mauvaise hiérachie de titre.
La performance tourne autour de 90 points où les scripts de bootstrap et l'imprécision du format et formattage des images viennent ralentir le système. Il serait possible d'optimiser les images et spécifier des tailles précises mais les scripts sont nécéssaires.

#### `Wave`

Les analyses de **Wave** ne contiennent pas d'erreurs. Les avertissements sont les mêmes que **W3C**
