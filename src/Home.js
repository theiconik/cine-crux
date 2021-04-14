import { useState, useEffect } from 'react';
import BlogList from './BlogList';
import loadinglogo from './Ripple-1s-200px.gif'

const Home = () => {

   const [blogs, setBlogs] = useState(null);
   const [isPending, setIsPending] = useState(true);
   const [error, setError] = useState(null);

   // const handleDelete = (id) => {
   //    const newBlogs = blogs.filter(blog => blog.id !== id)
   //    setBlogs(newBlogs);
   // }

   useEffect(() => {
      // console.log("Use Effect ran!");
      setTimeout(() => {
         fetch('http://localhost:8000/blogs')
      .then(res => {
         if(!res.ok) {
            throw Error('Could not fetch from the source API !?');
         }
         return res.json();
      })
      .then((data) => {
         //console.log(data);
         setBlogs(data);
         setIsPending(false);
         setError(null);
      })
      .catch(err => {
         setIsPending(false);
         setError(err.message);
      })
      }, 1000);
   }, [])


   return ( 
      <div className="home">
         {error && <div style={{textAlign:"center", padding:"5px 10px",border:"1px solid red", borderRadius:"8px",}}> {error} </div>}
         {isPending && <div style={{textAlign: "center"}}><img width="80px" height="80px" src={loadinglogo} alt="yo"></img></div>}
         {blogs && <BlogList blogprop={blogs} handleDeleteprop="handleDelete" />}
      </div>
    );
}
 
export default Home;