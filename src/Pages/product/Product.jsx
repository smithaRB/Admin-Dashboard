import "./product.css";
import {Link} from "react-router-dom";
import Chart from "../../components/Chart/Chart";
import{productData} from "../../dummyData";

export default function Product() {
  return (
    <div className="product">
      <div className="productTitleContainer">
        <h1 className="productTitle">Product</h1>
        <Link to="/newProduct">
        <button className="productAddButton">Create</button>
        </Link>
      </div>
      <div className="productTop">
        <div className="productTopLeft">
            <Chart data={productData} dataKey="Sales" title="Sales Performance"/>
        </div>
        <div className="productTopRight">
            <div className="productInfoTop">
                <img src="https://images.unsplash.com/photo-1588940086836-36c7d89611a0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="" className="productInfoImg" />
                <span className="productName">Apple Airpods</span>
            </div>
            <div className="productInfoBottom">
                <div className="productInfoItem">
                    <span className="productInfoKey">id:</span>
                    <span className="productInfoValue">123:</span>
                </div>
                <div className="productInfoItem">
                    <span className="productInfoKey">sales:</span>
                    <span className="productInfoValue">5123:</span>
                </div>
                <div className="productInfoItem">
                    <span className="productInfoKey">active:</span>
                    <span className="productInfoValue">Yes</span>
                </div>
                <div className="productInfoItem">
                    <span className="productInfoKey">in stock:</span>
                    <span className="productInfoValue">no</span>
                </div>
            </div>
        </div>
      </div>
      <div className="productBottom">
        <form className="productForm">
          <div className="productFormLeft">
            <label>Product Name</label>
            <input type="text" placeholder="Apple AirPod"/>
            <label>In Stock</label>
            <select name="inStock" id="idStock">
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
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
            <button className="productButton">Update</button>
          </div>
        </form>
      </div>
        </div>
  )
}
