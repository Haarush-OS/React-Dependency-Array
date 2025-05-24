import { use, useEffect, useState } from 'react'
import axios from 'axios'

function App() {
  const [loading , SetLoading] = useState(false)
  const [crntTab , SetCrntTab] = useState(1)
  const [tabData , SetTabData] = useState({})
  function _1() {
    SetCrntTab(1)
  }
  function _2() {
    SetCrntTab(2)
    
  }
  function _3() {
    SetCrntTab(3)
    
  }
  function _4() {
    SetCrntTab(4)
    
  }


useEffect( ()=>{


  const axiosfunc = async ()=>{
    
    SetLoading(true)
    const res = await axios.get("https://jsonplaceholder.typicode.com/todos/"+crntTab)
    SetLoading(false)
    SetTabData(res.data)
  }
  axiosfunc()


},[crntTab])

  return <div>
    <button onClick={_1} style={{color : crntTab===1 ? "red" : "black"}}>1</button>
    <button onClick={_2} style={{color : crntTab===2 ? "red" : "black"}}>2</button>
    <button onClick={_3} style={{color : crntTab===3 ? "red" : "black"}}>3</button>
    <button onClick={_4} style={{color : crntTab===4 ? "red" : "black"}}>4</button>
    <br />
    <br />
    {loading ? "Loading..." :  crntTab+(tabData.title) }
  </div>
}

export default App
