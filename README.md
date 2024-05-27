## React Shopping Cart Task
    
**Task Description:**
  - Create a shopping cart using React that allows users to add and remove items from the cart. The shopping cart should be based on the design of the following link: [shopping cart](https://startbootstrap.com/previews/shop-homepage).

**Task Requirements:**
  * The shopping cart should display a list of available products with their name and description.

  * Users should be able to add items to the cart by clicking the `"Add to Cart"` button.

  * When an item is added to the cart, the cart quantity number should be increased.

  * The `"Add to Cart"` button should be changed to the `"Remove from Cart"` button once the item is added to the cart.

  * Users should be able to remove items from the cart by clicking the `"Remove from Cart"` button.

  * When an item is removed from the cart, the cart quantity number should be decreased.

  * The `"Remove from Cart"` button should be changed back to the `"Add to Cart"` button once the item is removed from the cart.

**Code Description**
   
   * In the index.html file, I added a Bootstrap  Icons stylesheet and bundle hosted on a CDN.
 
   * To access the file, you can reach [index.html](./index.html) or you can use this path`(./index.html)`.
  
   * In App.jsx file:
        
     - React Components: The application is structured using React functional components and utilizes React hooks like useState for state management.
         
     - Shopping Cart Functionality: Users can add or remove items from the shopping cart. The number of items in the cart is dynamically updated and displayed as a badge.

     - Product Listing: Various products are listed with their names, prices, and optional sale badges. Each product has an "Add to Cart" button, which changes to "Remove from Cart" when the product is added.

     - Responsive Design: The layout is designed to be responsive, ensuring that it adapts well to different screen sizes and devices.

     - Bootstrap Integration: Bootstrap is used for styling elements like navigation bars, buttons, cards, badges, and more, providing a consistent and visually appealing design.

     - Navigation: The navigation bar allows users to navigate between different sections of the website, such as the homepage, about page, and product categories.

     - Sale Items: Special and sale items are visually distinguished with badges, indicating discounted prices.

     - Image Placeholder: Product images are represented by placeholders generated using the dummyimage.com service, providing a visual representation of each product.

     - Star Ratings: Special and popular items display star ratings to indicate their popularity or special status.
  
     - Footer: A footer section provides copyright information for the website, typically located at the bottom of the page.
    
  * To access the file, you can reach [App.jsx](./src/App.jsx) or you can use  this path`(./src/App.jsx)`.
  
  * In App.css file, I used for style the page, you can reach [App.css](./src/App.css) or you can use this path`(./src/App.css)`.





