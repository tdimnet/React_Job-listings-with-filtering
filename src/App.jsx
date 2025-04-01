import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Title from "./components/Title"
import Image from "./components/Image"

import JobTitle from "./components/JobTitle"
import CompanyName from "./components/CompanyName"
import Card from "./components/Card"

function App() {
  const [userData, setUserData] = useState([])

  useEffect(() => {
    async function getData() {
      const res = await fetch("../data.json")
      const data = await res.json()

      setUserData(data)
    }

    getData()
  }, [])

  console.log(userData)

  return (
    <main>
      {
        userData.map(user => (
          <Card key={user.id}>
            <CompanyName name={user.company} />
            <JobTitle jobTitle={user.position} />
          </Card>
        ))
      }
    </main>
  )
}

export default App
