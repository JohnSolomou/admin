import { Link, useLocation } from "react-router-dom";
import "./product.css";
import { Publish } from "@material-ui/icons";

// import { productData } from "../../dummyData";
// import Chart from "../../components/chart/Chart";
export default function Product() {
  const location = useLocation();
  const movie = location.movie;
  // const [data, setData] = useState(productData);
  return (
    <div className="product">
      <div className="productTitleContainer">
        <h1 className="productTitle">Movie</h1>
        <Link to="/newMovie">
          <button className="productAddButton">Create</button>
        </Link>
      </div>
      <div className="productTop">
        <div className="productTopRight">
          <div className="productInfoTop">
            <img className="productInfoImg" src={movie.img} alt="" />
            <span className="productName">{movie.title}</span>
          </div>
          <div className="productInfoBottom">
            <div className="productInfoItem">
              <span className="productInfoKey">:id</span>
              <span className="productInfoValue">{movie._id}</span>
            </div>
            <div className="productInfoItem">
              <span className="productInfoKey">genre</span>
              <span className="productInfoValue">{movie.genre}</span>
            </div>
            <div className="productInfoItem">
              <span className="productInfoKey">year</span>
              <span className="productInfoValue">{movie.year}</span>
            </div>
            <div className="productInfoItem">
              <span className="productInfoKey">rating</span>
              <span className="productInfoValue">{movie.limit}</span>
            </div>
          </div>
        </div>
      </div>
      <div className="productBottom">
        <form className="productForm">
          <div className="productFormLeft">
            <label htmlFor="">Movie Title</label>
            <input type="text" placeholder={movie.title} />
            <label htmlFor="">year</label>
            <input type="text" placeholder={movie.year} />
            <label htmlFor="">Movie Title</label>
            <input type="text" placeholder={movie.title} />
            <label htmlFor="">Genre</label>
            <input type="text" placeholder={movie.genre} />
            <label htmlFor="">Rating</label>
            <input type="text" placeholder={movie.limit} />
            <label htmlFor="">Trailer</label>
            <input type="file" placeholder={movie.trailer} />
            <label htmlFor="">Video</label>
            <input type="file" placeholder={movie.video} />
          </div>
          <div className="productFormRight">
            <div className="productUpload">
              <img className="productUploadImg" src={movie.img} alt="" />
              <label htmlFor="file">
                <Publish />
              </label>
              <input type="file" id="file" style={{ display: "none" }} />
            </div>
            <button className="productButton">Update</button>
          </div>
        </form>
      </div>
    </div>
  );
}
