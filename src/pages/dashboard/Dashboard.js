import './Dashboard.css'
import { useCollection } from '../../hooks/useCollection'
import ProjectList from '../../components/ProjectList'

//testing
// import { projectFirestore } from '../../firebase/config'
// import { useEffect, useState } from 'react'

export default function Dashboard() {
  // const [data, setData] = useState(null)
  // const [isPending, setIsPending] = useState(false)
  // const [error, setError] = useState(false)
  // useEffect(() => {
  //   setIsPending(true)
  //   projectFirestore
  //     .collection('projects')
  //     .get()
  //     .then((snapshot) => {
  //       if (snapshot.empty) {
  //         setError('projects collection is empty')
  //         setIsPending(false)
  //       } else {
  //         // let results = []
  //         // snapshot.docs.forEach((doc) => {
  //         //   results.push({ id: doc.id, ...doc.data() })
  //         // })
  //         // console.log('results from Dashboard is: ', results)
  //         // setData(results)
  //         // console.log('data is now set from results as ', data)
  //         // setIsPending(false)
  //         console.log('snapshot from useEffect in Dashboard: ', snapshot)
  //       }
  //     })
  //     .catch((err) => setError(err.message))
  //   setIsPending(false)
  // }, [])

  const { documents, error } = useCollection('projects')
  console.log('documents from useCollection', documents)

  return (
    <div>
      <h2 className='page-title'>Dashboard</h2>
      {error && <p className='error'>{error}</p>}
      {documents && <ProjectList projects={documents} />}
      {/* {data ? data : 'data is null'} */}
    </div>
  )
}
