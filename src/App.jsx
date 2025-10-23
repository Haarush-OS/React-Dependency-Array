import { use, useEffect, useState } from 'react'
import axios from 'axios'

function App() {
  const [loading , SetLoading] = useState(false)
  const [PresentTAb , SetCrntTab] = useState(1)
  const [tabData , SetTabData] = useState({})

  const Tab1 = () => SetCrntTab(1)
  const Tab2 = () => SetCrntTab(2)
  const Tab3 = () => SetCrntTab(3)
  const Tab4 = () => SetCrntTab(4)
  


useEffect( ()=>{


  const axiosfunc = async ()=>{
    
    SetLoading(true)
    const res = await axios.get("https://jsonplaceholder.typicode.com/todos/"+PresentTAb)
    SetLoading(false)
    SetTabData(res.data)
  }
  axiosfunc()


},[crntTab])

  return <div>
    <button onClick={Tab1} style={{color : crntTab===1 ? "red" : "black"}}>1</button>
    <button onClick={Tab2} style={{color : crntTab===2 ? "red" : "black"}}>2</button>
    <button onClick={Tab3} style={{color : crntTab===3 ? "red" : "black"}}>3</button>
    <button onClick={Tab4} style={{color : crntTab===4 ? "red" : "black"}}>4</button>
    <br />
    <br />
    {loading ? "Loading..." :  crntTab+(tabData.title) }
  </div>
}

export default App
