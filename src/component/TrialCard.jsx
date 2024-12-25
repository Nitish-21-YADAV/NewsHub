import image from "../assets/NEWS.png"

function TrialCard(){
    return(
      // <div>
        <div className="card bg-dark text-light d-inline-block " style={{maxWidth:"350px", position:"relative",left:"10",margin:"0 0 0 20%"}}>
        {/* <img src={scr?scr:image} style={{height:"170px",width:"300px",alignItems:"center"}} className="card-img-top" alt="..." /> */}
        <div className="card-body">
          <h5 className="card-title">Nitish Yadav</h5>
          <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos iste enim, quidem, expedita mollitia 
            repellat totam vitae fugiat eius, deleniti illo harum earum unde nulla at facere 
              temporibus magni facere similique maxime placeat eius rerum accusamus expedita, deserunt odit beatae 
              corrupti.</p>
          <a className="btn btn-primary">Read More...</a>
        </div>
      </div>
      // </div>
    )
}

export default TrialCard;