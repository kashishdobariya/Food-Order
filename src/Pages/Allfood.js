import React, { useState } from "react";
import Helment from "../Components/Helmet";
import CommanSection from "../Components/CommanSection";
import ProductCard from "../Category/ProductCard";
import products from "../fakedata/products";
// import Fooddetail from './Fooddetail'
import ReactPaginate from "react-paginate";

export default function Allfood() {
  // const [allProduct] = useState(products);
  const [pageNumber, setpageNumber] = useState(0);

  const productPerPage = 8;
  const VisitedProduct = pageNumber * productPerPage;
  const displayProduct = products.slice(
    VisitedProduct,
    VisitedProduct + productPerPage
  );

  const pageCount = Math.ceil(products.length / productPerPage);
  const Changepage = ({ selected }) => {
    setpageNumber(selected);
  };

  return (
    <Helment title="AllFood">
      <div>
        <CommanSection title="All Food"></CommanSection>

        <section className="container">
          <div className="row">
            <form className="d-flex justify-content-between">
              <input
                className="form-control mt-4 me-2 w-25"
                type="search"
                placeholder="im looking for..."
              ></input>

              <select className="mt-4">
                <option>default</option>
                <option>Alphabetically A-Z</option>
                <option>Alphabetically Z-A</option>
                <option>High price</option>
                <option>Low price</option>
              </select>
            </form>

            <div className="row mt-5">
              {
              displayProduct.map((item) => {
                return (
                  <div className="col-lg-3">
                    <ProductCard items={item}></ProductCard>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
        <ReactPaginate
          pageCount={pageCount}
          onPageChange={Changepage}
          containerClassName="paginationBttns"></ReactPaginate>
        {/* <Fooddetail></Fooddetail> */}
      </div>
    </Helment>
  );
}