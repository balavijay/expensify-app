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



//   db.ref('/isSingleq/cc')
//   .remove().then(() => {
//     console.log("Remove succeeded.");
//   }).catch ((e) => {
//       console.log(e);
//   })


  db.ref().set({
      name: 'Boss',
      age: 25,
      stressLevel: 6,
      job: {
          title: 'SSE',
          company: 'Google'
      },
      location : {
          city: 'Blr',
          state: 'KA'
      },
      isSingle: true
  }).then(() => {
      console.log('Data is saved in firebase !!');
  }).catch((e) => {
      console.log(e);
  });

    /// Update

    db.ref().update({
        stressLevel: 9,
        'location/city': 'Hyd',
        'job/company': 'Amazon'
    })


//   db.ref('age').set(30);
//   db.ref('location/city').set("Bengaluru");
//   db.ref('attr/weight').set(3.01);
//   db.ref('attr/height').set(2.01).then(() => {
//       console.log('Call worked !')
//   }).catch((e)=> {
//       console.log(e);
//   })