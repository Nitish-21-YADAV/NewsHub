// import React from 'react';
// import image from '../assets/NEWS.png';

// function NewsItem({news }) {
//   console.log("NewsItem walaa");
//   console.log(news);
//   console.log(news.title);
//   return (
//     <div  className="card bg-dark text-light d-inline-block" style={{ maxWidth: '320px', position: 'relative', margin: '0' }}>
//       <img src={news.scr ? news.scr : image}
//         style={{ height: '170px', width: '300px', objectFit: 'cover' }}
//         className="card-img-top"
//         alt={news.title || 'News Image'}
//       />
//       <div className="card-body">
//         <h5 className="card-title">{news.title ? news.title.slice(0, 30) : 'No Title Available'}</h5>
//         <p className="card-text">{news.description ? news.description.slice(0, 70) : 'For the details of the news, please visit the website.'}</p>
//         <a href={news.url} className="btn btn-primary">Read More...</a>
//       </div>
//     </div>
//   );
// }

// export default NewsItem;






import image from "../assets/NEWS.png"

function NewsItemcard1({title,description,scr,url}){
    return(
    <div className="pcard" style={{position:"fixed",width:"35%"}}>
      <div className="card bg-dark text-light d-inline-block px-1 py-2 mb-3 my-6 " style={{maxWidth:"320px",height:"max-content",position:"relative",margin:"4rem 0 0 25%",zIndex:1}}>
        <div className="img-wrapper" style={{maxWidth:"100%",height:"38vh"}}>
          <img src={scr?scr:image} style={{height:"100%",width:"300px",alignItems:"center"}}  alt="..." />
        </div>
        <div className="card-body">
          <h5 className="card-title">{title.slice(0,30)}</h5>
          <p className="card-text">{description?description.slice(0,150):"For the detail of the news please visit to the website "}</p>
          <a href={url} className="btn btn-primary">Read More...</a>
        </div>
      </div>
    </div>
    )
}

export default NewsItemcard1;

