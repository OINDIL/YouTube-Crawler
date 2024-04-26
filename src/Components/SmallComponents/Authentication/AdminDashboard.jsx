import React, { useEffect, useState } from 'react'
import ApiKey from '../ApiKey'
import { useAuth } from '../../Context/AuthContext'
import 'firebase/firestore'
import { collection, getDocs } from 'firebase/firestore'
import { db } from '../../Firebase/firebase'

function AdminDashboard() {
  const { logOut } = useAuth()
  const [ErrorLoader, setErrorLoader] = useState(false)
  const [apiKeys, setApiKeys] = useState([])


  const fetchApiKeys = async () => {
    const querySnapShot = await getDocs(collection(db, "apiKeys"))

    const data = []
    querySnapShot.forEach((docs) => {
      data.push({ id: docs.id, ...docs.data() })
    })
    setApiKeys(data)
  }
  useEffect(() => {
    fetchApiKeys()
  }, [])



  const handleLogOut = async (event) => {
    event.preventDefault()
    try {
      await logOut()
      navigation("/signin")
    } catch (error) {
      setErrorLoader(true)
    }
  };
  return (
    <div>
      {ErrorLoader ? <Alert message={"Log Out Error"} type={"danger"} setButton={setErrorLoader} /> : null}
      <div className="container d-flex justify-content-center align-items-center" style={{ minHeight: '100svh' }}>
        <div className="w-100" style={{ maxWidth: '500px' }}>
          <form className='container d-flex align-items-center flex-column border rounded p-3 shadow' style={{ maxWidth: '600px', marginTop: '70px' }}
            onSubmit={handleLogOut}>
            <h2>Admin Dashboard</h2>
            <div className="mb-2">
              <ApiKey apiKey={apiKeys}/>
            </div>
            <button type="submit" className="btn btn-danger" style={{ marginRight: '3px' }}>Log Out as Admin</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default AdminDashboard