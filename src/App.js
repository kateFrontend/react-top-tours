import { useState, useEffect } from 'react'
import Loading from './Loading'
import Tours from './Tours'
import './App.css'
import { data } from './data'

function App() {

  const [loading, setLoading] = useState(true);
  const [tours, setTours] = useState(data);
  if(loading){
    return (
      <main>
        <Loading/>
      </main>
    )
  }

  return <h2>Tours Project Setup</h2>
}

export default App