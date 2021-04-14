const Create = () => {
   return ( 
      <div className="create">
         <h3 >Add a new blog</h3>
         <form action="">
            <label>Blog Title:</label>
            <input type="text" required/>
            <label>Blog Body:</label>
            <textarea rows="15" cols="5" required></textarea>
            <label>Blog Author:</label>
            <select id="">
               <option value="Piyush">Piyush</option>
               <option value="Ujjawal">Ujjawal</option>
               <option value="Sarvagya">Sarvagya</option>
            </select>
            <button>Add blog</button>
         </form>
      </div>
    );
}
 
export default Create;