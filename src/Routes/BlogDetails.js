import { useParams } from "react-router";

const BlogDetails = () => {
   const { id } = useParams()
   
   return ( 
      <div className="blog-details">
         <h3 style={{color: "#f1356d",textAlign:"center", borderBottom:"1px solid #f1356d", paddingBottom:"8px"}}>Blog {id}</h3>
      </div>
    );
}
 
export default BlogDetails;