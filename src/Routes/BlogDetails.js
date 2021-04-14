import { useParams } from "react-router";
import useFetch from "../Hooks/useFetch";
import loadinglogo from "../Assets/Ripple-1s-200px.gif";

const BlogDetails = () => {
  const { id } = useParams();

  const { data: blog, error, isPending } = useFetch(
    "http://localhost:8000/blogs/" + id
  );

  return (
    <div className="blog-details">
      {error && (
        <div
          style={{
            textAlign: "center",
            padding: "5px 10px",
            border: "1px solid red",
            borderRadius: "8px",
          }}
        >
          {" "}
          {error}{" "}
        </div>
      )}
      {isPending && (
        <div style={{ textAlign: "center" }}>
          <img width="80px" height="80px" src={loadinglogo} alt="yo"></img>
        </div>
      )}
      {blog && (
        <article>
          <h3
            style={{
              textAlign: "center",
              padding: "5px 0",
              borderBottom: "1px solid #f1356d",
              color: "#f1356d",
              marginBottom: "15px",
            }}
          >
            {blog.title}
          </h3>
          <div style={{marginBottom:"15px"}}>{blog.body}</div>
          <h4 style={{ display: "flex", justifyContent: "flex-end", }}>
            <i>
              <strong
                style={{
                  color: "#a5a8ac",
                  textAlign: "center",
                }}
              >
                - {blog.author}
              </strong>
            </i>
          </h4>
        </article>
      )}
    </div>
  );
};

export default BlogDetails;
