import { Link } from "react-router-dom";

const BlogList = (props) => {
  const blogs = props.blogprop;
  // const handleDelete = props.handleDeleteprop;
  return (
    <div className="blog-list">
      {blogs.map((blog) => (
        <div className="blog-preview" key={blog.id}>
          <Link to={`/blogs/${blog.id}`} style={{textDecoration: "none"}}>
            <h2>{blog.title}</h2>
            <p>{blog.body}</p>
          </Link>
          <p>
            <i>
              <strong
                style={{
                  color: "#a5a8ac",
                }}
              >
                by {blog.author}
              </strong>
            </i>
          </p>
          {/* <button onClick={() => handleDelete(blog.id)}>Delete</button> */}
        </div>
      ))}
    </div>
  );
};

export default BlogList;
