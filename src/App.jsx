import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'

function App() {
  const [Cards, setCards] = useState([])

  const fetchData = async () => {
    const fetchdata = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await fetchdata.json();
    setCards(data)
    console.log(Cards)
      
  }

  useEffect(() => {
    fetchData()
  }, [])
  
  return (

    <>
  
   <Navbar/>
   <br/>
    <div className="container">
  
      {Cards.map(items => {
        return(
          <div className="cards">
            <p>Body:{items.body}</p>
            <br/>
            <p>Title:{items.title}</p>
            <br/>
            <p>UserId:{items.userId}</p>
            <br/>
            <p>Id:{items.id}</p>
          </div>
        )
      })}

    </div>
    </>
  )
}

export default App
