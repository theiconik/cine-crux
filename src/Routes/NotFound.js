import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="not-found">
      <h3 style={{ color:"#f1356d",textAlign: "center", marginBottom: "5px" }}>
        Oops! Sorry😕
      </h3>
      <p style={{ textAlign: "center", marginBottom: "20px" }}>
        That page couldn't be found!
      </p>
      <h4 style={{display:"flex",justifyContent:"center",alignContent:"center"}}>
      <p>🔙</p><Link
          to="/"
        >Home
        </Link>
      </h4>
    </div>
  );
};

export default NotFound;
