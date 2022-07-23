import { useState, useEffect } from 'react'
import {
  // projectAuth,
  auth,
  // projectStorage,
  storage,
  // projectFirestore,
  db,
} from '../firebase/config'
import { useAuthContext } from './useAuthContext'

export const useSignup = () => {
  const [isCancelled, setIsCancelled] = useState(false)
  const [error, setError] = useState(null)
  const [isPending, setIsPending] = useState(false)
  const { dispatch } = useAuthContext()

  const signup = async (email, password, displayName, thumbnail) => {
    setError(null)
    setIsPending(true)

    try {
      // signup
      const res = await auth.createUserWithEmailAndPassword(email, password)

      if (!res) {
        throw new Error('Could not complete signup')
      }

      //uploade user profile image
      const uploadPath = `thumbnails/${res.user.uid}/${thumbnail.name}`
      const img = await storage.ref(uploadPath).put(thumbnail)
      const imgURL = await img.ref.getDownloadURL()

      // add display name to user
      await res.user.updateProfile({ displayName, photoURL: imgURL })

      //create user document
      // await projectFirestore.collection('users').doc(res.user.uid).set({
      await db.collection('users').doc(res.user.uid).set({
        online: true,
        displayName,
        photoURL: imgURL,
      })

      // dispatch login action
      dispatch({ type: 'LOGIN', payload: res.user })

      if (!isCancelled) {
        setIsPending(false)
        setError(null)
      }
    } catch (err) {
      if (!isCancelled) {
        setError(err.message)
        setIsPending(false)
      }
    }
  }

  useEffect(() => {
    return () => setIsCancelled(true)
  }, [])

  return { signup, error, isPending }
}
