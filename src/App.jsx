import React, { useState } from 'react';
import "./App.css";

const App = () => {
  // Set the initial state
  const [counter, setCounter] = useState(0);
  const [cart, setCart] = useState([]); // to track the items in the cart

  const handleCartToggle = (item) => {
    if(item==1){
      return "null"
    }
    // Update the state based on whether the item is already in the cart
    else{setCart((prevCart) => {
      const isInCart = prevCart.includes(item);
      const newCart = isInCart 
      ? prevCart.filter((cartItem) => cartItem !== item)
        : [...prevCart, item];

      setCounter(isInCart ? counter - 1 : counter + 1);
      return newCart;
    });
  }}

  const renderStars = () => (
    <div className="d-flex justify-content-center small text-warning mb-2">
      {Array.from({ length: 5 }).map((_, index) => (
        <div key={index} className="bi-star-fill"></div>
      ))}
    </div>
  );

  // Updated product list
  const products = [
    { id: 1, name: "Fancy Product", price: "$40.00 - $80.00" },
    { id: 2, name: "Special Item", price: "$18.00", sale: true, originalPrice: "$20.00" },
    { id: 3, name: "Sale Item", price: "$25.00", sale: true, originalPrice: "$50.00" },
    { id: 4, name: "Popular Item", price: "$40.00" },
    { id: 5, name: "Sale Item", price: "$25.00", sale: true, originalPrice: "$50.00" },
    { id: 6, name: "Fancy Product", price: "$120.00 - $280.00" },
    { id: 7, name: "Special Item", price: "$18.00", sale: true, originalPrice: "$20.00" },
    { id: 8, name: "Popular Item", price: "$40.00" }
  ];

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container px-4 px-lg-5">
          <a className="navbar-brand" href="#!">Start Bootstrap</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4">
              <li className="nav-item"><a className="nav-link active" aria-current="page" href="#!">Home</a></li>
              <li className="nav-item"><a className="nav-link" href="#!">About</a></li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" id="navbarDropdown" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">View Options</a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li><a className="dropdown-item" href="#!">All Products</a></li>
                  <li><hr className="dropdown-divider" /></li>
                  <li><a className="dropdown-item" href="#!">Popular Items</a></li>
                  <li><a className="dropdown-item" href="#!">New Arrivals</a></li>
                </ul>
              </li>
            </ul>
            <form className="d-flex">
              <button className="btn btn-outline-dark" type="submit">
                <i className="bi-cart-fill me-1"></i>
                Cart
                <span className="badge bg-dark text-white ms-1 rounded-pill">{counter}</span>
              </button>
            </form>
          </div>
        </div>
      </nav>
      <header className="bg-dark py-5">
        <div className="container px-4 px-lg-5 my-5">
          <div className="text-center text-white">
            <h1 className="display-4 fw-bolder">Shop in style</h1>
            <p className="lead fw-normal text-white-50 mb-0">With this shop homepage template</p>
          </div>
        </div>
      </header>
      
      <section className="py-5">
      
        <div className="container px-4 px-lg-5 mt-5">
          <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
            {products.map((product) => (
              <div className="col mb-5" key={product.id}>
                <div className="card h-100">
                  {product.sale && <div className="badge bg-dark text-white position-absolute" style={{ top: '0.5rem', right: '0.5rem' }}>Sale</div>}
                  <img className="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />
                  <div className="card-body p-4">
                    <div className="text-center">
                      <h5 className="fw-bolder">{product.name}</h5>
                      {(product.name === "Special Item" || product.name === "Popular Item") && renderStars()}
                      {product.originalPrice && <span className="text-muted text-decoration-line-through">{product.originalPrice}</span>}
                      {product.price}
                    </div>
                  </div>
                  <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                    <div className="text-center">
                      <a className="btn btn-outline-dark mt-auto" href="#" onClick={() => handleCartToggle(product.id)}
                      >
                        {product.id==1 ? "View options" : cart.includes(product.id)?"Remove from cart":"Add to cart"}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
            
            
      </section>
      <footer className="py-5 bg-dark">
        <div className="container"><p className="m-0 text-center text-white">Copyright &copy; Your Website 2023</p></div>
      </footer>
    </>
  );
}

export default App;
