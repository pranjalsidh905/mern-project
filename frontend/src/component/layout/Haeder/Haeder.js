import React from "react";
import { ReactNavbar } from "overlay-navbar";
import logo from "../../images/logo.png";
import { MdAccountCircle } from "react-icons/md";
import { MdSearch } from "react-icons/md";
import { MdAddShoppingCart } from "react-icons/md";

const options = {
  burgerColorHover: "#eb4034",
  logo,
  logoWidth: "20vmax",
  navColor1: "white",
  logoHoverSize: "10px",
  logoHoverColor: "#eb4034",
  link1Text: "Home",
  link2Text: "Products",
  link3Text: "Contact",
  link4Text: "About",
  link1Url: "/",
  link2Url: "/products",
  link3Url: "/contact",
  link4Url: "/about",
  link1Size: "1.3vmax",
  link1Color: "rgba(35, 35, 35,0.8)",
  nav1justifyContent: "flex-end",
  nav2justifyContent: "flex-end",
  nav3justifyContent: "flex-start",
  nav4justifyContent: "flex-start",
  link1ColorHover: "#eb4034",
  link1Margin: "1vmax",
  profileIcon: true,
  ProfileIconElement: MdAccountCircle,
  searchIcon: true,
  SearchIconElement: MdSearch,
  cartIcon: true,
  CartIconElement: MdAddShoppingCart,
  profileIconUrl: "/login",
  profileIconColor: "rgba(35, 35, 35,0.8)",
  searchIconColor: "rgba(35, 35, 35,0.8)",
  cartIconColor: "rgba(35, 35, 35,0.8)",
  profileIconColorHover: "#eb4034",
  searchIconColorHover: "#eb4034",
  cartIconColorHover: "#eb4034",
  cartIconMargin: "1vmax",
};

const Haeder = () => {
  return <ReactNavbar {...options} />;
};

export default Haeder;

// import React from "react";
// import { Link } from "react-router-dom";
// import { MdAccountCircle } from "react-icons/md";
// import { MdSearch } from "react-icons/md";
// import { MdAddShoppingCart } from "react-icons/md";

// const Haeder = () => {
//   return (
//     <nav className="navbar navbar-expand-lg navbar-light bg-light">
//       <div className="container-fluid">
//         <Link to="/" className="navbar-brand">
//           Shemnu
//         </Link>

//         <button
//           className="navbar-toggler"
//           type="button"
//           data-bs-toggle="collapse"
//           data-bs-target="#navbarSupportedContent"
//           aria-controls="navbarSupportedContent"
//           aria-expanded="false"
//           aria-label="Toggle navigation"
//         >
//           <span className="navbar-toggler-icon" />
//         </button>
//         <div className="collapse navbar-collapse" id="navbarSupportedContent">
//           <ul className="navbar-nav me-auto mb-2 mb-lg-0">
//             <li className="nav-item">
//               {/* <a className="nav-link active" aria-current="page" href="#">
//                 Home
//               </a> */}
//               <Link to="/" className="nav-link" aria-current="page">
//                 Home
//               </Link>
//             </li>
//             <li className="nav-item">
//               {/* <a className="nav-link" href="#">
//                 Link
//               </a> */}
//               <Link to="/products" className="nav-link">
//                 Products
//               </Link>
//             </li>
//             <li className="nav-item">
//               <Link to="/contact" className="nav-link">
//                 Contact
//               </Link>
//             </li>
//             {/* <li className="nav-item dropdown">
//               <a
//                 className="nav-link dropdown-toggle"
//                 href="#"
//                 id="navbarDropdown"
//                 role="button"
//                 data-bs-toggle="dropdown"
//                 aria-expanded="false"
//               >
//                 Dropdown
//               </a>
//               <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
//                 <li>
//                   <a className="dropdown-item" href="#">
//                     Action
//                   </a>
//                 </li>
//                 <li>
//                   <a className="dropdown-item" href="#">
//                     Another action
//                   </a>
//                 </li>
//                 <li>
//                   <hr className="dropdown-divider" />
//                 </li>
//                 <li>
//                   <a className="dropdown-item" href="#">
//                     Something else here
//                   </a>
//                 </li>
//               </ul>
//             </li> */}
//             <li className="nav-item">
//               {/* <a
//                 className="nav-link disabled"
//                 href="#"
//                 tabIndex={-1}
//                 aria-disabled="true"
//               >
//                 Disabled
//               </a> */}
//               <li className="nav-item">
//                 {/* <a className="nav-link" href="#">
//                 Link
//               </a> */}
//                 <Link to="/about" className="nav-link">
//                   About
//                 </Link>
//               </li>
//             </li>
//           </ul>
//           <form className="d-flex">
//             {/* <input
//               className="form-control me-2"
//               type="search"
//               placeholder="Search"
//               aria-label="Search"
//             /> */}
//             {/* <button className="btn btn-outline-success" type="submit">
//                  <MdSearch className=" me-2" />
//             </button> */}
//             {/* <MdSearch className=" me-2" /> */}
//             <Link to="/search" className="nav-link">
//               <MdSearch />
//             </Link>
//             {/* <button className="btn btn-outline-success">
//             </button> */}
//             <Link to="/about" className="nav-link">
//               <MdAccountCircle />
//             </Link>
//             <Link to="/cart" className="nav-link">
//               <MdAddShoppingCart />
//             </Link>
//             {/* <button className="btn btn-outline-success">

//             </button>
//             <button className="btn btn-outline-success">

//             </button> */}
//             {/* <MdAccountCircle />
//             <MdAddShoppingCart /> */}
//           </form>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Haeder;

// import { useEffect, useState } from "react";
// // import { useContext } from "
// // import { useNavigate } from "react-router-dom";
// import { TbSearch } from "react-icons/tb";
// import { CgShoppingCart } from "react-icons/cg";
// // import { AiOutlineHeart } from "react-icons/ai";
// import { MdAccountCircle } from "react-icons/md";
// // import Search from "./Search/Search";
// // import Cart from "../Cart/Cart";
// // import Context  from "../../utils/context";

// import "./Header.css";
// import { Link } from "react-router-dom";

// const Haeder = () => {
//   const [scrolled, setScrolled] = useState(false);
//   // const [showCart, setSchowCart] = useState(false);
//   // const [showSearch, setSchowSearch] = useState(false);
//   const handleScroll = () => {
//     const offset = window.scrollY;

//     if (offset > 200) {
//       setScrolled(true);
//     } else {
//       setScrolled(false);
//     }
//   };
//   useEffect(() => {
//     window.addEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <>
//       <header className={`main-header ${scrolled ? "sticky-header " : ""}`}>
//         <div className="header-content">
//           <ul className="left">
//             <li>
//               <Link to="/" className="Header-text">
//                 Home
//               </Link>
//             </li>
//             <li>
//               <Link to="/" className="Header-text">
//                 Products
//               </Link>
//             </li>
//             <li>
//               <Link to="/" className="Header-text">
//                 About
//               </Link>
//             </li>
//             <li>
//               <Link to="/" className="Header-text">
//                 Contact
//               </Link>
//             </li>
//           </ul>
//           <div className="center">SHEMNU.</div>
//           <div className="right">
//             <Link to="/search" className="search">
//               <TbSearch className="" />
//             </Link>

//             <Link to="/Login" className="search">
//               <MdAccountCircle />
//             </Link>

//             <span className="cart-icon">
//               <Link to="/cart" className="search">
//                 <CgShoppingCart />
//               </Link>
//             </span>
//           </div>
//         </div>
//       </header>
//       {/* {showCart && <Cart setSchowCart={setSchowCart} />}
//       {showSearch && <Search setSchowSearch={setSchowSearch} />} */}
//     </>
//   );
// };

// export default Haeder;
// import React from "react";
// import { NavLink, Link } from "react-router-dom";
// // import { useAuth } from "../../Context/auth";
// // import toast from "react-hot-toast";
// // import SearchInput from "../Froms/SearchInput";
// // import useCategory from "../../Hooks/useCategory";
// // import { useCart } from "../../Context/cart";
// import { Badge } from "antd";

// const Header = () => {
//   // const [cart] = useCart();
//   // const [auth, setAuth] = useAuth();
//   // const categories = useCategory();
//   // const handleLogout = () => {
//   //   setAuth({
//   //     ...auth,
//   //     user: null,
//   //     token: "",
//   //   });
//   //   localStorage.removeItem("auth");
//   //   toast.success("Logout Successfully");
//   // };

//   return (
//     <>
//       <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
//         <div className="container-fluid">
//           <Link to="/" className="navbar-brand">
//             🛒 Aksales
//           </Link>
//           <button
//             className="navbar-toggler"
//             type="button"
//             data-bs-toggle="collapse"
//             data-bs-target="#navbarSupportedContent"
//             aria-controls="navbarSupportedContent"
//             aria-expanded="false"
//             aria-label="Toggle navigation"
//           >
//             <span className="navbar-toggler-icon" />
//           </button>

//           <div className="collapse navbar-collapse" id="navbarSupportedContent">
//             <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
//               {/* <SearchInput /> */}

//               <li className="nav-item">
//                 <NavLink to="/" className="nav-link">
//                   Home
//                 </NavLink>
//               </li>

//               <li className="nav-item dropdown">
//                 <Link
//                   className="nav-link dropdown-toggle"
//                   to={"/categories"}
//                   data-bs-toggle="dropdown"
//                 >
//                   Categories
//                 </Link>
//                 <ul className="dropdown-menu">
//                   <li>
//                     <Link className="dropdown-item" to={"/categories"}>
//                       All Categories
//                     </Link>
//                   </li>
//                   {/* {categories?.map((c) => (
//                     <li>
//                       <Link
//                         className="dropdown-item"
//                         to={`/category/${c.slug}`}
//                       > */}
//                         {/* {c.name} */}
//                       {/* </Link> */}
//                     {/* </li> */}
//                   // 
//                 </ul>
//               </li>

//               {/* {!auth.user ? (
//                 <>
//                   <li className="nav-item">
//                     <NavLink to="/register" className="nav-link">
//                       Register
//                     </NavLink>
//                   </li>
//                   <li className="nav-item">
//                     <NavLink to="/login" className="nav-link">
//                       Login
//                     </NavLink>
//                   </li>
//                 </>
//               ) : ( */}
//                 <>
//                   <li className="nav-item dropdown">
//                     <NavLink
//                       className="nav-link dropdown-toggle"
//                       id="navbarDropdownMenuLink"
//                       role="button"
//                       data-bs-toggle="dropdown"
//                       aria-expanded="false"
//                     >
//                       {/* {auth?.user?.name} */}
//                     </NavLink>
//                     <ul
//                       className="dropdown-menu"
//                       aria-labelledby="navbarDropdownMenuLink"
//                     >
//                       <li>
//                         <NavLink to="" className="dropdown-item">
//                           Dashbord
//                         </NavLink>
//                       </li>
//                       <li>
//                         <NavLink
//                           // onClick={handleLogout}
//                           to="/login"
//                           className="dropdown-item"
//                         >
//                           Logout
//                         </NavLink>
//                       </li>
//                     </ul>
//                   </li>
//                 </>
            

//               <li className="nav-item">
//                 <Badge>
//                   <NavLink to="/cart" className="nav-link">
//                     Cart
//                   </NavLink>
//                 </Badge>
//               </li>
//               {/* <li className="nav-item dropdown">
//                 <NavLink
//                   to="/"
//                   className="nav-link dropdown-toggle"
//                   href="#"
//                   id="navbarDropdown"
//                   role="button"
//                   data-bs-toggle="dropdown"
//                   aria-expanded="false"
//                 >
//                   Dropdown
//                 </NavLink>
//                 <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
//                   <li>
//                     <NavLink to="/" className="dropdown-item" href="#">
//                       Action
//                     </NavLink>
//                   </li>
//                   <li>
//                     <NavLink to="/" className="dropdown-item" href="#">
//                       Another action
//                     </NavLink>
//                   </li>
//                   <li>
//                     <hr className="dropdown-divider" />
//                   </li>
//                   <li>
//                     <NavLink to="/" className="dropdown-item" href="#">
//                       Something else here
//                     </NavLink>
//                   </li>
//                 </ul>
//               </li> */}
//             </ul>
//             {/* <form className="d-flex">
//               <input
//                 className="form-control me-2"
//                 type="search"
//                 placeholder="Search"
//                 aria-label="Search"
//               />
//               <button className="btn btn-outline-success" type="submit">
//                 Search
//               </button>
//             </form> */}
//           </div>
//         </div>
//       </nav>
//     </>
//   );
// };

// export default Header;
