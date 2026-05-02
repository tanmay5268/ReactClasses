import { useState } from "react"
function App() {
const colors=["red","green","yellow","purple","blue"]
 const [color,setcolor]=useState("skyblue")
 const condition =true;
//  function changeColor(desiredColor){
//   setcolor(desiredColor)
//  }
  return (
    <>
      <div style={{backgroundColor:color}} className={`w-screen h-screen`}
      >
        {colors.map((item,index)=>{
          return <div onMouseEnter={()=>{setcolor(item)}} style={{backgroundColor:item}} key={index} className={`w-10 h-10`}>
            </div>
        })}
        {/* conditional rendering */}
        {/* {condition ? <div>tanmay</div> : <div>Aarush</div>} */}
        {
          condition && <div>tanmay</div>
        }
        <h1 className="text-xl font-bold">Welcome to the Color Changer</h1>
        <h2>Change the background color by hovering over the colored squares</h2>
      </div>
    </>
  )
}

export default App
