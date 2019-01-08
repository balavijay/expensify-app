import * as firebase from 'firebase';
import expenses from '../selectors/expenses';


  // Initialize Firebase
  const config = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
  };
  firebase.initializeApp(config);

  const db = firebase.database();

  export { firebase, db as default };



//   db.ref('/isSingleq/cc')
//   .remove().then(() => {
//     console.log("Remove succeeded.");
//   }).catch ((e) => {
//       console.log(e);
//   })


//   db.ref().set({
//       name: 'Boss',
//       age: 25,
//       stressLevel: 6,
//       job: {
//           title: 'SSE',
//           company: 'Google'
//       },
//       location : {
//           city: 'Blr',
//           state: 'KA'
//       },
//       isSingle: true
//   }).then(() => {
//       console.log('Data is saved in firebase !!');
//   }).catch((e) => {
//       console.log(e);
//   });

    /// Update

    // db.ref().update({
    //     stressLevel: 9,
    //     'location/city': 'Hyd',
    //     'job/company': 'Amazon'
    // })


//   db.ref('age').set(30);
//   db.ref('location/city').set("Bengaluru");
//   db.ref('attr/weight').set(3.01);
//   db.ref('attr/height').set(2.01).then(() => {
//       console.log('Call worked !')
//   }).catch((e)=> {
//       console.log(e);
//   })

//once
// db.ref('location/city').once('value')
//   .then((snapshot)=> {
//       const val = snapshot.val();
//       console.log("once", val);
//   })
//   .catch((e) => {
//       console.log( "err", e);
//   })

  // db.ref().on('value', (snapshot) => {
  //   const val = snapshot.val();
  //   console.log(`${val.name} is a ${val.job.title} at ${val.job.company}`);
  // });

//Add expense
  // db.ref('expenses').push({
  //   desc: 'Rent',
  //   note: '',
  //   amount: 23.09,
  //   createdAt: 239724724827
  // })


//   db.ref('expenses').on('child_removed', (snapshot) => {
//     console.log('child_remomve', snapshot.val())
// })

// db.ref('expenses').on('child_changed', (snapshot) => {
//   console.log('child_remomve', snapshot.val())
// })

// db.ref('expenses').on('child_added', (snapshot) => {
//   console.log('child_remomve', snapshot.val())
// })

// /// Fire on value change, convert to Array list 
//   db.ref('expenses').on('value', (snapshot) => {
//     let expenses = [];
//       snapshot.forEach((child) => {
//         expenses.push({
//           id: child.key,
//           ...child.val()

//         })
//       })

//       console.log(expenses);
//   });