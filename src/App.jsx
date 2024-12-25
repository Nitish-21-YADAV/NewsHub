import React from "react"
import { useState } from "react"
import NavBar from "./component/NavBar"
import NewsBoard from "./component/NewsBoard"
import Side_part from "./component/Side_part"
import Side_part2 from "./component/Side_part2"
function App() {
//  const [category,setCategory]=useState("general")
    return (
      <>
            {/* <NavBar setCategory={setCategory}/> */}
             
            {/* <NewsBoard category={category}/> */}
            <Side_part/> 
      </>
  )
}

export default App
