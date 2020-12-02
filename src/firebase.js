import firebase from 'firebase/app'
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyCmQ0IPpELiv0-RqkdYAmVWvTxanRWc5Yo",
    authDomain: "github-clone-dc472.firebaseapp.com",
    databaseURL: "https://github-clone-dc472.firebaseio.com",
    projectId: "github-clone-dc472",
    storageBucket: "github-clone-dc472.appspot.com",
    messagingSenderId: "325060735218",
    appId: "1:325060735218:web:19a952afb65f462f09606b",
    measurementId: "G-QD288NWRQ0"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export const provider = new firebase.auth.GithubAuthProvider()
  provider.addScope('repo')
  provider.addScope('user')

  export const auth = firebase.auth();

  export default firebase;