import { useEffect, useState, useRef } from 'react'
// import { projectFirestore } from '../firebase/config' //v8

//firebase v9
import { db } from '../firebase/config'
import { collection, onSnapshot } from 'firebase/firestore'

// export const useCollection = (collection, _query, _orderBy) => {
export const useCollection = (c, _query, _orderBy) => {
  //c is the generalized collection being passed in
  const [documents, setDocuments] = useState(null)
  const [error, setError] = useState(null)

  // if we don't use a ref --> infinite loop in useEffect
  // _query is an array and is "different" on every function call
  const query = useRef(_query).current
  const orderBy = useRef(_orderBy).current

  //get a reference to the collection, set up onSnapshot method to the collection to get realtime data from it
  useEffect(() => {
    //get a reference to the collection
    // let ref = projectFirestore.collection(collection)
    let ref = collection(db, c)

    if (query) {
      ref = ref.where(...query)
    }
    if (orderBy) {
      ref = ref.orderBy(...orderBy)
    }

    //v8
    // const unsubscribe = ref.onSnapshot(
    //   (snapshot) => {
    //     let results = []
    //     snapshot.docs.forEach((doc) => {
    //       results.push({ ...doc.data(), id: doc.id })
    //     })

    //     // update state
    //     setDocuments(results)
    //     setError(null)
    //     console.log('results', results)
    //   },
    //   (error) => {
    //     console.log(error)
    //     setError('could not fetch the data')
    //   }
    // )

    //v9
    const unsub = onSnapshot(ref, (snapshot) => {
      let results = []
      snapshot.docs.forEach((doc) => {
        results.push({ ...doc.data(), id: doc.id })

        // update state
        setDocuments(results)
        setError(null)
        console.log('results', results)
      })

      // unsubscribe on unmount
      // return () => unsubscribe() //v8
      return () => unsub() //v9
    })
    // [collection, query, orderBy]
  }, [c, query, orderBy])
  // return { documents, error } //v8
  return { documents }
}
