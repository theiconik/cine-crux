//import { useState, useEffect } from 'react';
import BlogList from './BlogList';
import loadinglogo from './Ripple-1s-200px.gif'
import useFetch from './useFetch'

const Home = () => {

   const {data: blogs, isPending, error} = useFetch("http://localhost:8000/blogs");

   // const handleDelete = (id) => {
   //    const newBlogs = blogs.filter(blog => blog.id !== id)
   //    setBlogs(newBlogs);
   // }

   return ( 
      <div className="home">
         {error && <div style={{textAlign:"center", padding:"5px 10px",border:"1px solid red", borderRadius:"8px",}}> {error} </div>}
         {isPending && <div style={{textAlign: "center"}}><img width="80px" height="80px" src={loadinglogo} alt="yo"></img></div>}
         {blogs && <BlogList blogprop={blogs} handleDeleteprop="handleDelete" />}
      </div>
    );
}
 
export default Home;