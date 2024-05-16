# 
 DOCS Testing :


GOOGLE :Pour créer un projet sur Google Cloud Platform (GCP), vous commencez par vous connecter à votre compte Google. Ensuite, vous allez dans la section "Projet" et choisissez "Créer un projet". Vous donnez un nom à votre projet, sélectionnez quelques options comme l'emplacement, puis vous cliquez sur "Créer"

![image](https://github.com/Arthur-Lucas/TDD-deploy/assets/117074766/dc172a9d-dcf6-470f-b2bc-41c0f38d5a74)

Ensuite  aller dans “APIs & services” puis “Enale APIs & services: 
![image](https://github.com/Arthur-Lucas/TDD-deploy/assets/117074766/bab301b4-3b33-4886-8e22-82fdfb46816f)



Aller dans “Library” et rechercher Cloud Function pour activer le produit : 
![image](https://github.com/Arthur-Lucas/TDD-deploy/assets/117074766/f7ee0d2e-13c6-4c1f-b0fa-134119bfe9c9)


Aller dans “Credentials” 
![image](https://github.com/Arthur-Lucas/TDD-deploy/assets/117074766/4a4bfeb7-acab-4199-951c-10974c820b7e)

Cliquer sur create a credentials puis service account : 
![image](https://github.com/Arthur-Lucas/TDD-deploy/assets/117074766/e31d1d5a-40e2-4029-a32d-7edb13485624)


Nommer le service account :  

![image](https://github.com/Arthur-Lucas/TDD-deploy/assets/117074766/c2c11be9-4bf5-4035-8afd-a022291f4675)

Ajouter le role “Cloud 	Function Admin” ou “ Cloud Function Developer “ , cela lui permettra de pouvoir déployer une cloud fonction 
![image](https://github.com/Arthur-Lucas/TDD-deploy/assets/117074766/083be452-bb17-435e-8e01-88e8d0af38d7)


Ensuite cliquer sur le service account nouvellement crée : 
![image](https://github.com/Arthur-Lucas/TDD-deploy/assets/117074766/0a053429-11cf-45ca-b3e0-37f2c8ebb2e3)

Pour déployé une cloud function :
![image](https://github.com/Arthur-Lucas/TDD-deploy/assets/117074766/29187910-d0d1-49ac-ac07-89c892fa57ed)

Cela déploiera la fonction testing
on peux la voir déployer sur l'interface :
![image](https://github.com/Arthur-Lucas/TDD-deploy/assets/117074766/14c30799-f6cb-42a9-b67a-b8f8e3d25e12)

Pour la tester aller dans l'onglet "Testing" puis en bas cliquer sur "run in cloud shell"
![image](https://github.com/Arthur-Lucas/TDD-deploy/assets/117074766/227313d2-9eef-47b0-944d-1635123c7dc8)

Il s'agit d'une simple requête curl, vous pourriez donc la lancer depuis votre code ou bien avec curl mais une header Authaurization est nécéssaire :
![image](https://github.com/Arthur-Lucas/TDD-deploy/assets/117074766/8694471b-224f-43fe-8df5-06b32e9e83a1)







Github ci Gcp : 


Cette pipeline GitHub Actions permet d'automatiser les tests et le déploiement de votre fonction cloud sur Google Cloud Platform (GCP) à chaque push sur la branche principale de votre dépôt GitHub. Elle se compose de deux jobs principaux :
JMeter :

Télécharge le plan de test JMeter.
Exécute les tests de performance avec JMeter.
Télécharge et analyse les résultats des tests avec Latency Lingo.
deploy :

Télécharge le code depuis le dépôt GitHub.
Authentifie l'accès à GCP.
Exécute les tests unitaires de la fonction cloud.
Configure l'environnement Cloud SDK.
Déploie la fonction cloud sur GCP à l'aide de la CLI gcloud, avec diverses options telles que le nom, le runtime, la région, etc.


![image](https://github.com/Arthur-Lucas/TDD-deploy/assets/117074766/9ab77664-5b9c-4520-bf6b-e84b6654084b)





