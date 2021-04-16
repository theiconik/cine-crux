import { useState } from "react"
import { useHistory } from "react-router-dom"

const Create = () => {

   const [title, setTitle] = useState('');
   const [body, setBody] = useState('');
   const [author, setAuthor] = useState('Piyush');
   const [isPending, setIsPending] = useState(false);
   const history = useHistory();

   const handleSubmit = e => {
      e.preventDefault();
      const blog = {title, body, author};
      console.log(blog);
      setIsPending(true);
      fetch('http://localhost:8000/blogs', {
         method: "POST",
         headers: {"Content-Type":"application/json"},
         body: JSON.stringify(blog)
      }).then(() => {
         console.log("New Blog Added");
         setIsPending(false);
         history.push('/');
      }) 
   }


   return ( 
      <div className="create">
         <h3 >Add a new blog</h3>
         <form onSubmit={handleSubmit}>
            <label>Blog Title:</label>
            <input type="text" required value={title}
            onChange = {(e) => setTitle(e.target.value)}
            />
            <label>Blog Body:</label>
            <textarea rows="15" cols="5" required value={body}
            onChange = {(e) => setBody(e.target.value)}></textarea>
            <label>Blog Author:</label>
            <select id="" value={author}
            onChange = {(e) => setAuthor(e.target.value)}>
               <option value="Piyush">Piyush</option>
               <option value="Ujjawal">Ujjawal</option>
               <option value="Sarvagya">Sarvagya</option>
            </select>
            {!isPending && <button className="ripple">Add blog</button>}
            {isPending && <button disabled style={{backgroundColor:"grey"}}>⏳</button>}
         </form>
         {/* Ouput
            <p>{ title}</p>
            <p>{body}</p>
            <p>{author}</p> */}
      </div>
    );
}
 
export default Create; 