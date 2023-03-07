import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyD4br9ES9gqp1WdnczMXi09YLpfGCh5JkM",
    authDomain: "linkedin-clone-d0914.firebaseapp.com",
    projectId: "linkedin-clone-d0914",
    storageBucket: "linkedin-clone-d0914.appspot.com",
    messagingSenderId: "1000606372592",
    appId: "1:1000606372592:web:9ca310baa0665dcc806835"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };


// import firebase from 'firebase/compat/app';
// import 'firebase/compat/auth';
// import 'firebase/compat/firestore';
// const firebaseConfig = {
//   apiKey: "AIzaSyBxyKtUyJFWCmlYkRKUF3RbkJ7tz9PSEDM",
//   authDomain: "linkedin-clone-95264.firebaseapp.com",
//   projectId: "linkedin-clone-95264",
//   storageBucket: "linkedin-clone-95264.appspot.com",
//   messagingSenderId: "55656563770",
//   appId: "1:55656563770:web:62f822582201372802e103",
//   measurementId: "G-47PTE07VTR"
// };

// const firebaseApp = firebase.initializeApp(firebaseConfig);
// const db = firebaseApp.firestore();
// const auth = firebase.auth();

// export { db, auth };