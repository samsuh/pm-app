import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
import 'firebase/storage'

const firebaseConfig = {
  apiKey: 'AIzaSyDtzTXRCq85-btERzV7gCcHpIZDwyMc3_Q',
  authDomain: 'web3-pm.firebaseapp.com',
  projectId: 'web3-pm',
  storageBucket: 'web3-pm.appspot.com',
  messagingSenderId: '232361649984',
  appId: '1:232361649984:web:a6c97b629ffc354bfffca5',
}

//initialize firebase
firebase.initializeApp(firebaseConfig)

//init services: firestore and auth
const projectFirestore = firebase.firestore()
const projectAuth = firebase.auth()
const projectStorage = firebase.storage()

//timestamp
const timestamp = firebase.firestore.Timestamp

export { projectFirestore, projectAuth, timestamp, projectStorage }
