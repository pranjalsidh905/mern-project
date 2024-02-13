import React, { Fragment, useEffect, useState } from "react";
import "./Products.css";
import { useSelector, useDispatch } from "react-redux";
import { clearErrors, getProduct } from "../../actions/productActions.js";
import Loader from "../layout/Loader/Loader";
import ProductCard from "../Home/ProductCard";
import MetaData from "../layout/MetaData";
import { useParams } from "react-router";
import Pagination from "react-js-pagination";
import Typography from "@material-ui/core/Typography";
import { Slider } from "@material-ui/core";
import { useAlert } from "react-alert";

const categories = [
  "Sheets",
  "Linen",
  "Bamboo",
  "Cotton",
  "Flannel",
  "Allegro_sheets",
  "Cotton_sheets",
  "Elitist_bedsheets",
];

export const Products = ({ match }) => {
  const { keyword } = useParams();
  const dispatch = useDispatch();
  const alert = useAlert();

  // useState Hookes
  const [currentPage, setCurrentPage] = useState(1);
  const [price, setPrice] = useState([0, 25000]);
  const [category, setCategory] = useState("");
  const [ratings, setRatings] = useState(0);

  // console.log(setCurrentPage);

  const {
    products,
    loading,
    error,
    productsCount,
    resultPerPage,
    // filteredProductsCount,
  } = useSelector((state) => state.products);

  const keywor = keyword;

  // Current Page No function
  const setCurrentPageNo = (e) => {
    setCurrentPage(e);
  };

  // Price Handler
  const priceHandler = (event, newPrice) => {
    setPrice(newPrice);
  };

  // let count = filteredProductsCount;

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }
    dispatch(getProduct(keywor, currentPage, price, category, ratings));
  }, [dispatch, keywor, currentPage, price, category, ratings, alert, error]);
  // console.log(">>>>>>>>>>", products);

  return (
    <Fragment>
      {loading ? (
        <Loader />
      ) : (
        <Fragment>
          <MetaData title="PRODUCTS -- ECOMMERCE" />
          <h2 className="productsHeading">Products</h2>
          {/* <Sidebar /> */}
          <div className="products">
            {products &&
              products.map((product) => (
                <ProductCard key={product._id} product={product} />
              ))}
          </div>

          {/* {keyword &&  
        // onliy filter  per hi show 
          <div className="filterBox">
            <Typography>Price</Typography>
            <Slider
              value={price}
              onChange={priceHandler}
              valueLabelDisplay="auto"
              aria-labelledby="range-slider"
              min={0}
              max={25000}
            />

            <Typography>Categories</Typography>
            <ul className="categoryBox">
              {categories.map((category) => (
                <li
                  className="category-link"
                  key={category}
                  onClick={() => setCategory(category)}
                >
                  {category}
                </li>
              ))}
            </ul>

            <fieldset>
              <Typography component="legend">Ratings Above</Typography>
              <Slider
                value={ratings}
                onChange={(e, newRating) => {
                  setRatings(newRating);
                }}
                aria-labelledby="continuous-slider"
                valueLabelDisplay="auto"
                min={0}
                max={5}
              />
            </fieldset>
          </div>
          } */}
          {/* Price Fillter */}
          <div className="filterBox">
            <Typography>Price</Typography>
            <Slider
              value={price}
              onChange={priceHandler}
              valueLabelDisplay="auto"
              aria-labelledby="range-slider"
              min={0}
              max={25000}
            />

            <Typography>Categories</Typography>
            <ul className="categoryBox">
              {categories.map((category) => (
                <li
                  className="category-link"
                  key={category}
                  onClick={() => setCategory(category)}
                >
                  {category}
                </li>
              ))}
            </ul>

            <fieldset>
              <Typography component="legend">Ratings Above</Typography>
              <Slider
                value={ratings}
                onChange={(e, newRating) => {
                  setRatings(newRating);
                }}
                aria-labelledby="continuous-slider"
                valueLabelDisplay="auto"
                min={0}
                max={5}
              />
            </fieldset>
          </div>
          {/* Paginations Div Start  */}
          {resultPerPage < productsCount && (
            <div className="paginationBox">
              <Pagination
                activePage={currentPage}
                itemsCountPerPage={resultPerPage}
                totalItemsCount={productsCount}
                onChange={setCurrentPageNo}
                nextPageText="Next"
                prevPageText="Prev"
                firstPageText="First"
                lastPageText="Last"
                linkClass="page-link"
                itemClass="page-item"
                activeClass="pageItemActive"
              />
            </div>
          )}
          {/* Paginations Div End  */}
        </Fragment>
      )}
    </Fragment>
  );
};
export default Products;
