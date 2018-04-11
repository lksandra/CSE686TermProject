how to start the project?
1. navigate to the folder path in the nodejs cmd.
2. type "npm start" OR "node index"

to work on the mongodb?
1. install and host the mongodb server on your system.
2. from the db schema, you can create the mongodb db within few minutes.
3. u can access db schema from the "db sample" folder in the github.

mongo commands needed to create a db.
1. db.healthDB //creates a database named healthDB
2. db.healthDB.patientColl // creates a collection named patientColl inside the healthDB.
3. db.healthDB.insuranceColl
4. db.healthDB.hospitalColl
5..............testingCenterColl
6..............pharmacyColl
7.db.healthDB.patientColl.insert(/* copy paste the JSON string here from the db sample folder*/).
8. repeat step 7 for other collections.
9. the db is all set to be used.