import { useState } from "react"
import movies from "../data/data"




function Pform(){

    const [names, isnames] = useState("")
    const [emails, isemails]= useState("")
    const [like, islike] = useState("")
    const [comments, iscomments] = useState("")
    const [error, iserror] = useState({})

function handsubmit(e){
    e.preventDefault();

    const newerror = {};
    
    if(!names.trim()){
        newerror.names= "โปรดใส่ชื่อของคุณ"
    } 
    
    if(!emails.trim()){
        newerror.emails="โปรดใส่อีเมลของคุณ"
    }else {
    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(!pattern.test(emails)){
        newerror.emails = "รูปแบบอีเมลไม่ถูกต้อง";
    }
    } 
    
    if(!like.trim()){
        newerror.like="กรุณาเลือกหนังที่คุณชอบ"
    }


    iserror(newerror);


    if(Object.keys(newerror).length === 0){
      const productData = {
      Name: names,
      Email: emails,
      FavoriteMovie: like,
     ...(comments.trim() ? { Comment: comments } : {})
    
    };

    alert(JSON.stringify(productData, null, 4));
  }
    }








    return (
    <form  className="flex flex-col gap-4 w-[400px]">
      <label id="name">
        <h1>Name</h1>
        <input 
          type="text" 
          placeholder="Enter your name" 
          value={names}
          
          onChange={(e) => isnames(e.target.value)}
        />
      </label>
      {error.names && <div className="text-red-500">{error.names}</div>}

      <label id="email">
        <h1>Email</h1>
        <input 
          type="text" 
          placeholder="Enter your Email"
          value={emails}
          
          onChange={(e) => isemails(e.target.value)}
        />
      </label>
      {error.emails && <div className="text-red-500">{error.emails}</div>}

      {movies.map((item) => (
        <label key={item.title} className="flex items-center gap-2">
          <input
            type="radio"
            name="option"
            value={item.title}
            checked={like === item.title}
            onChange={(e) => islike(e.target.value)}
          />
          <p>Name: {item.title} Year: {item.year} Director: {item.director}</p>
        </label>
      ))}
      {error.like && <div className="text-red-500">{error.like}</div>}

      <label>
        <p>Comment</p>
        <textarea
          name="comment"
          id="comment"
          value={comments}
          onChange={(e) => iscomments(e.target.value)}
          className="w-full h-24 p-2 border border-black rounded"
        />
      </label>

      <div className="flex gap-4">
        <button type="submit" className="bg-blue-500 text-black py-2 px-4 rounded"
        onClick={handsubmit}
        >Submit</button>
        <button type="button" className="bg-blue-500 text-black py-2 px-4 rounded"
          onClick={() => {
            isnames("");
            isemails("");
            islike("");
            iscomments("");
            iserror({});
          }}
        >
          Reset
        </button>
      </div>
    </form>
  )
}

export default Pform