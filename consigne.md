## Consignes Mini-projet 
1. Local Storage : 
- Réaliser une fiche de présence des stagiaires pour MolenGeek. Le programme consiste à tout d'abord rajouter des stagiaires un par un via un formulaire. Possibiliter d'ajouter un stagiaire (prenom,nom,age,sa classe). Pour cela, utiliser le "localStorage". C'est une façon de stocker des données comme avec une base de donnée. Rajouter les data sous forme d'objet pour avoir une manipulation plus simple des data. Le principal atout du localStorage est qu'au refresh de la page, les data enregistrées ne se supprime pas. 

- Une fois le stagiaire ajouté, on a la possibilité de valider sa présence via un checkbox/button. On peut également, le delete de la liste

- Faire un button qui remet le storage à zero et un button qui rafraichi la page

- Un button filter, qui va trier toutes vos données(storage) pour afficher les stagiaires par classe

2. Modal : 
- Récupère via une API, l'IP, le pays, la ville, et l'opérateur de l'utilisateur. Utiliser la méthode fetch, fonction async, méthode await

- via la méthode "date", affiche la date actuelle et l'heure actuelle avec les secondes en temps réel. (pas du static) Le format demandé -> JJ/MM/AA - heure:minute:seconde

## Design
- Soyez original pour le design
- La plate-forme doit être en one page. 
- Le formulaire de rajout des stagiaires doit être ouvert via un button qui prend comme format un modal avec une animation js à l'arrivée et au départ du modal
- Le modal avec les informations de l'utilisateur (api) et la date doit être ramené/départ avec une animation js
- Responsive !! 
- Ajouter des animations au choix en plus sur la plate-forme 
    - Exemple : https://www.youtube.com/watch?v=JonZXS4awuc

## Outils 
- Trello 
    - nommé le -> Feuille de présence JS
    - Décomposer le travail et attribuer vous les taches depuis les cards 
    - invitez moi dedans 
- Github 
    - nom du repo -> js_programmePrésence
    - minimum 10 commit 

## Docu pour l'exercice 
1. Storage : 
    https://developer.mozilla.org/fr/docs/Web/API/Window/localStorage
    https://www.youtube.com/watch?v=ITmKqkmHlnY
    https://www.youtube.com/watch?v=AUOzvFzdIk4

2. API : 
    Notes : Vous devez comprendre ce que s'est une API et les méthodes qui en sont liées.
    https://www.youtube.com/watch?v=sGvEqHkDyFc&t=264s
    https://www.youtube.com/watch?v=KLGCGDkn0gc
    https://www.youtube.com/watch?v=cuEtnrL9-H0

3. date : 
    https://www.youtube.com/watch?v=AOtNj3j82WQ


