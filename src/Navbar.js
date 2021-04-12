const Navbar = () => {
   return ( 
      <nav className="navbar">
         <h1>CineCrux</h1>
         <div className="links">
            <a href="/">Home</a>
            <a href="/create">New Blog</a>
            {/* <a href=""></a> */}
         </div>
      </nav>
    );
}
 
export default Navbar;