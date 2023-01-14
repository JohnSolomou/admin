import React from "react";
import "./newProduct.css";
export default function NewProduct() {
  return (
    <div className="newProduct">
      {" "}
      <div className="productTitleContainer">
        <h1 className="productTitle">New Product</h1>

        <button className="productAddButton">Create</button>
      </div>
      <div className="productTop">
        <div className="productTopLeft"></div>
        <div className="productTopRight">
          <div className="productInfoTop">
            <img
              className="productInfoImg"
              src="https://cdn.pixabay.com/photo/2018/01/08/02/34/technology-3068617_960_720.jpg"
              alt=""
            />
            <span className="productName">Apple Airpods</span>
          </div>
          <div className="productInfoBottom">
            <div className="productInfoItem">
              <span className="productInfoKey">:id</span>
              <span className="productInfoValue">132</span>
            </div>
            <div className="productInfoItem">
              <span className="productInfoKey">Sales</span>
              <span className="productInfoValue">5132</span>
            </div>
            <div className="productInfoItem">
              <span className="productInfoKey">active</span>
              <span className="productInfoValue">yes</span>
            </div>
            <div className="productInfoItem">
              <span className="productInfoKey">in stock</span>
              <span className="productInfoValue">no</span>
            </div>
          </div>
        </div>
      </div>
      <div className="productBottom">
        <form className="productForm">
          <div className="productFormLeft">
            <label htmlFor=""></label>
            <input type="text" placeholder="Apple Airpods" />
            <label htmlFor="">In Stock</label>
            <select name="inStock" id="idStock">
              <option value="yes">yes</option>
              <option value="no">no</option>
            </select>
            <label htmlFor="">Active</label>
            <select name="active" id="active">
              <option value="yes">yes</option>
              <option value="no">no</option>
            </select>
          </div>
          <div className="productFormRight">
            <div className="productUpload">
              <img
                className="productUploadImg"
                src="https://cdn.pixabay.com/photo/2018/01/08/02/34/technology-3068617_960_720.jpg"
                alt=""
              />
              <label for="file"></label>
              <input type="file" id="file" style={{ display: "none" }} />
            </div>
            <button className="productButton">Update</button>
          </div>
        </form>
      </div>
    </div>
  );
}
