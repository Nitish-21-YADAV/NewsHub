import React from "react";
import Newsboard from "./NewsBoard";
import NewsItemcard1 from "./NewsItem";
import Newsboardcopy from "./NewsBoardcopy";
function Side_part1() {
    return (
        <>
            <div className="card bg-dark border" style={{ width: '27%', height:'80vh',  margin:'2rem 0 0 0rem',backgroundColor:'red',overflow:"hidden"}}>
               <Newsboardcopy/>
            </div>
        </>
    )
}

export default Side_part1;
