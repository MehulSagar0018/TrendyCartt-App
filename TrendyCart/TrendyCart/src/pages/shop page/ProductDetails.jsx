import { IoIosArrowForward } from "react-icons/io";
import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";

const ProductDetails = () => {
  const {id} = useParams(); // Extract product ID from URL
  const [productName, setProductName] = useState('');

  useEffect(() => {
    if (!id) {
      console.error("Product ID is missing from the URL.");
    }
  }, [id]);

  return (
    <>
      <div className=" text-Pink p-8 text-center" style={{backgroundColor:"#f4e5ec",paddingTop:"20px",paddingBottom:"40px"}} >
        <h2 className=" mb-4" style={{fontSize:"36px",fontWeight:"bold"}}>Product Details</h2>

        <div className="flex items-center justify-center gap-4">
          <span className="hover:text-blue-300 transition-all duration-300">
            <Link to="/">Home</Link>
          </span>
          <IoIosArrowForward size={20}/>
          <span className="hover:text-blue-300 transition-all duration-300">
            <Link to="/shop">Shop</Link>
          </span>
          <IoIosArrowForward size={20}/>
          <span className="hover:text-blue-300 transition-all duration-300">
            {productName ? (
              <Link to={`/shop/${id}`}>{productName}</Link>
            ) : (
              "Loading..."
            )}
          </span>
        </div>
      </div>

      <div >
        
        
      </div>
    </>
  );
};

export default ProductDetails;
