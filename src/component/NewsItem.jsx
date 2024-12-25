
import image from "../assets/NEWS.png"

function NewsItem({title,description,scr,url}){
    return(
      // <div className="pcard" style={{border:"2px solid red",width:"50vw",margin:"2rem 0 0 0 "}}>
      <div className="card bg-dark text-light mb-3 d-inline-block mx-3 my-8 px-2 py-3" style={{maxWidth:"320px",height:"",position:"relative",margin:"4rem 0 0 0",overflow:"hidden",scrollbarWidth:"none",zIndex:1}}>
        <div className="img-wrapper" style={{maxWidth:"100%",height:"38vh"}}>
          <img src={scr?scr:image} style={{height:"100%",width:"100%",position:"relative",alignItems:"center"}} alt="..." />
        </div>
        <div className="card-body">
          <h6 className="card-title">{title.slice(0,30)}</h6>
          <p className="card-text">{description?description.slice(0,70):"For the detail of the news please visit to the website "}</p>
          <a href={url} className="btn btn-primary">Read More...</a>
        </div>
      </div>
    // </div>
    )
}

export default NewsItem;
