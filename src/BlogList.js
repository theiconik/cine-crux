const BlogList = (props) => {
   
   const blogs = props.blogprop;
   // const handleDelete = props.handleDeleteprop;
   return ( 
      <div className="blog-list">
         {blogs.map( (blog) => (
            <div className="blog-preview" key = {blog.id}>
               <h2>{blog.title}</h2>
               <p>{blog.body}</p>
               <p><i><strong style = {
                  {
                     color: "#a5a8ac",
                  }}>by {blog.author}</strong></i></p>
               {/* <button onClick={() => handleDelete(blog.id)}>Delete</button> */}
            </div>
         ) )}
      </div>
    );
}
 
export default BlogList;