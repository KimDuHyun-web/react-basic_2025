import { useState } from "react";

function UpdateArticle({title, desc, dif, onsubmit}){
  // console.log('CreateArticle render');
  const [newTitle, setNewTitle] = useState(title);
  const [newDesc, setNewDesc] = useState(desc);
  const [newDif, setNewDif] = useState(dif);
  return(
    <section>
      <article>
        <h2>Update Article</h2>
        <form action="/create_process" method="POST" onSubmit={(e)=>{
          e.preventDefault();
          onsubmit(newTitle, newDesc, newDif);
        }}>
          <p>
            <label htmlFor="title">Title:</label>
            <input type="text" name="title" placeholder="title" id="title" value={newTitle} onChange={(e)=>{
              setNewTitle(e.target.value);
            }}/>
          </p>
          <p>
            <label htmlFor="desc">Description:</label>
            <textarea id="desc" name="desc" placeholder="description" value={newDesc}  onChange={(e)=>{
              setNewDesc(e.target.value);
            }}></textarea>
          </p>
          <p>
            <label htmlFor="dif">difficulty:</label>
            <input type="number" name="dif" placeholder="difficulty" id="dif" value={newDif} min={0} max={10} pattern="^(?=.*\d)[\d]+$" onChange={(e)=>{
              setNewDif(e.target.value);
            }}/>
          </p>
          <button className="primary">Submit</button>
        </form>
      </article>
    </section>
  )
}
export default UpdateArticle;