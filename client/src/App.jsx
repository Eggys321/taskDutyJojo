import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css';


function App() {
  const [data,setData] = useState([]);
  
  const fetchRequest = async ()=>{
    const fetchUrl = await fetch('http://localhost:6767/api/task');
    const response = await fetchUrl.json();
    console.log(response.success);
    setData(response.tasks)
  }

  useEffect(()=>{
    fetchRequest()
  },[])

  return (
    <>

    {data.map((datum)=>{
      return(
        <div key={datum._id}>

          <h1>  {datum.title}</h1>
          <h2> {datum.description} </h2>
          <p> {datum.tags} </p>

        </div>
      )
    })}
     
    </>
  )
}

export default App
