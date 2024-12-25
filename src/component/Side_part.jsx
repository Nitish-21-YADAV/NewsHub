import React from "react";
import { useState } from "react";
import './Side_part2.css'
import Side_part1 from "./Side_part1";
import Side_part2 from "./Side_part2";
import NavBar from "./NavBar"
import NewsItem from "./NewsItem";
import NewsItemcard1 from "./NewsItemcard1";
import NewsBoard from "./NewsBoard";
import NewsBoardcopy from "./NewsBoardcopy"


function Side_part() {

    const [category,setCategory]=useState("general")
    return (
        <>
        <NavBar setCategory={setCategory}/>
            <div className="card bg-LIGHT border" style={{ width: '100%', height:'90vh',  margin:'0rem 0 0 0rem',display:'flex',flexDirection:'row',justifyContent:'space-evenly'}}>
                <NewsBoard category={category}/>
            </div>
            
        </>
    )
}

export default Side_part;
