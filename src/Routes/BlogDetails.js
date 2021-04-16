import { useHistory, useParams } from "react-router";
import useFetch from "../Hooks/useFetch";
import loadinglogo from "../Assets/Ripple-1s-200px.gif";
import trash from "../Assets/icons8-trash-24.png";

const BlogDetails = () => {
  const { id } = useParams();

  const { data: blog, error, isPending } = useFetch(
    "https://my-json-server.typicode.com/theiconik/cine-crux/" + id
  );
  const history = useHistory();

  const handleDelete = () => {
    fetch("https://my-json-server.typicode.com/theiconik/cine-crux/" + blog.id,{
      method: "DELETE"
    }).then(() =>{
      history.push('/');
    })
  }

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
          <div style={{ marginBottom: "15px" }}>{blog.body}</div>
          <h4 style={{ display: "flex", justifyContent: "space-between" }}>
            <button
              onClick={handleDelete}
              className="del"
              style={{
                borderRadius: "50%",
                border:"none",
                outline:"none",
                display:"flex",
                justifyContent:"center",
                alignItems:"center",
                padding:"4px 4px",
                cursor:"pointer",
              }}
            >
              <img src={trash} style={{filter: "invert(100%) sepia(0%) saturate(1%) hue-rotate(231deg) brightness(103%) contrast(101%)", transform:"scale(0.75)"}} alt=""></img>
            </button>
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
