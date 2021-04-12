const Home = () => {
   
   const handleClick = () => {
      console.log('hello,ninjas');
   }

   const handleClickAgain = (name,e) => {
      console.log('hello ' + name, e.target);
   }

   return ( 
      <div className="home">
         <h2>Homepage</h2>
         <button onClick={handleClick}>Click me</button>
         <button onClick={(e) => {
            handleClickAgain('mario', e)
         }}>Click again</button>
      </div>
    );
}
 
export default Home;