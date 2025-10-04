import React from 'react'
import { useState } from "react";






const Wishlist = () => {
   // State for wishlist items
  const [wishlist, setWishlist] = useState([]);

  // Example: function to add product to wishlist
  const addToWishlist = (product) => {
    if (!wishlist.includes(product)) {
      setWishlist([...wishlist, product]);
    }
  };

  // Example: function to remove product
  const removeFromWishlist = (product) => {
    setWishlist(wishlist.filter((item) => item !== product));
  };

  
  return (
    <div>
      <h2>My Wishlist</h2>
      {wishlist.length === 0 ? (
        <p>No items in wishlist</p>
      ) : (
        <ul>
          {wishlist.map((item, index) => (
            <li key={index}>
              {item}{" "}
              <button onClick={() => removeFromWishlist(item)}>Remove</button>
            </li>
          ))}
        </ul>
      )}

      {/* Example button to test addToWishlist */}
      <button onClick={() => addToWishlist("Product 1")}>Add Product 1</button>

    </div>
  )
}

export default Wishlist
