import React, { useState } from "react";
import { tvData } from "../data/tv";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";

const TvPage = () => {
  const [selectedProduct, setSelectedProduct] = useState([]);

  // Extract unique brands from tvData
  const uniqueBrands = [...new Set(tvData.map((item) => item.brand))];

  const companyHandler = (brand) => {
    if (selectedProduct.includes(brand)) {
      setSelectedProduct(selectedProduct.filter((item) => item !== brand));
    } else {
      setSelectedProduct([...selectedProduct, brand]);
    }
  };

  const filteredProduct =
    selectedProduct.length === 0
      ? tvData
      : tvData.filter((item) => selectedProduct.includes(item.brand));

  return (
    <>
      <Navbar />
      <div className="fullpage">
        <div className="pro-selected">
          {uniqueBrands.map((brand) => (
            <div className="pro-input" key={brand}>
              <label>
                <input
                  type="checkbox"
                  checked={selectedProduct.includes(brand)}
                  onChange={() => companyHandler(brand)}
                />
                {brand}
              </label>
            </div>
          ))}
        </div>

        <div className="pageSection">
          {filteredProduct.map((item) => (
            <div key={item.id}>
              <Link to={`/tv/${item.id}`}>
                <div className="pageImg">
                  <img src={item.image} alt={`${item.brand} ${item.model}`} />
                </div>
              </Link>
              <div className="proModel">
                {item.brand}, {item.model}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default TvPage;
