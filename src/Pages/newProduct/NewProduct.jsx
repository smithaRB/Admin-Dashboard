import "./newProduct.css";

export default function NewProduct() {
  return (
    <div className="newProduct">
        <h1>New Product</h1>
       <div className="productBottom">
        <form className="productForm">
          <div className="productFormLeft">
            <label>Product Name</label>
            <input type="text" placeholder="Apple AirPods"/>
            <label>Stock</label>
            <input type="text" placeholder="123"/>
            <label>Active</label>
            <select name="active" id="active">
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </div>
          <div className="productFormRight">
            <div className="productUpload">
              <img src="https://images.unsplash.com/photo-1588940086836-36c7d89611a0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="" className="productUploadImg" />
              <label for="file">
                <span><i class="fa-solid fa-arrow-up-from-bracket"></i></span>
              </label>
              <input type="file" id="file" step={{display:"none"}}></input>
            </div>
            <button className="productButton">Create</button>
          </div>
        </form>
      </div>
        </div>
        
  )
}
