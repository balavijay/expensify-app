import * as firebase from 'firebase';


  // Initialize Firebase
  const config = {
    apiKey: "AIzaSyDLqlgzAnl3Kpbn3aS8X13tHbqrpL5MwnM",
    authDomain: "expensify-e9dcc.firebaseapp.com",
    databaseURL: "https://expensify-e9dcc.firebaseio.com",
    projectId: "expensify-e9dcc",
    storageBucket: "expensify-e9dcc.appspot.com",
    messagingSenderId: "287991151276"
  };
  firebase.initializeApp(config);

  const db = firebase.database();
  db.ref().set({
      name: 'Boss',
      age: 25,
      location : {
          city: 'Blr',
          state: 'KA'
      },
      isSingle: true
  });

  db.ref('age').set(30);
  db.ref('location/city').set("Bengaluru");
  db.ref('attr/weight').set(3.01);
  db.ref('attr/height').set(2.01);