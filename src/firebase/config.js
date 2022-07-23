// import firebase from 'firebase/app'
// import 'firebase/firestore'
// import 'firebase/auth'
// import 'firebase/storage'
import { initializeApp } from 'firebase/app'
import { getFirestore, serverTimestamp } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'
import { getStorage } from 'firebase/storage'

const firebaseConfig = {
  apiKey: 'AIzaSyDtzTXRCq85-btERzV7gCcHpIZDwyMc3_Q',
  authDomain: 'web3-pm.firebaseapp.com',
  projectId: 'web3-pm',
  storageBucket: 'web3-pm.appspot.com',
  messagingSenderId: '232361649984',
  appId: '1:232361649984:web:a6c97b629ffc354bfffca5',
}

//initialize firebase
// firebase.initializeApp(firebaseConfig)
initializeApp(firebaseConfig)

//init services: firestore and auth
// const projectFirestore = firebase.firestore()
// const projectAuth = firebase.auth()
// const projectStorage = firebase.storage()

const db = getFirestore()
const auth = getAuth()
const storage = getStorage()

//timestamp
const timestamp = serverTimestamp()

// export { projectFirestore, projectAuth, timestamp, projectStorage }
export { db, auth, timestamp, storage }
