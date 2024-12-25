import React from "react";
import './Side_part2.css'
import NewsBoard from "./NewsBoard";
import NewsItem from "./NewsItem";
import TrialCard from "./TrialCard";
function Side_part2() {
    // const [category,setCategory]=useState("general") 
    return (
        <>
            
            <div className="card bg-success border" style={{ width: '50%', height:'80vh',position:'relative', margin:'2rem 0 0 0rem',overflow:"scroll",scrollbarWidth:"none"}}>
            <h2 className="text-center"style={{margin:"0.5rem 0.4rem 0.5rem 4rem"}}>Top<span className="badge bg-danger"style={{margin:"0rem 0rem 0rem 0.3rem"}}>Heading</span></h2>
            {/* <NewsBoard/> */}
            {/* <NewsItem/> */}
            {/* <NewsBoard category={category}/> */}
            {/* <TrialCard/> */}
            {/* <NewsItem/> */}
            </div>
        </>
    )
}

export default Side_part2;
