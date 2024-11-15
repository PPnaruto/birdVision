# Products Pagination Application

This is a React application that displays a list of products with pagination. The application fetches products data from a remote API dynamically as users navigate through different pages. Pagination is handled client-side with Bootstrap styling.

### Features

`Pagination`: The application fetches 10 products per page using the limit and skip query parameters from the DummyJSON API.
`Client-Side Pagination`: Displays a subset of products per page, with pagination controls for navigation.
`Responsive Design`: Displays product information in a grid layout, with each product in a card format.
`Product Details`: Each product displays its image, title, and price.

### Tech Stack

`React`: Front-end JavaScript library for building user interfaces.
`Axios`: Promise-based HTTP client for making API requests.
`Bootstrap`: CSS framework used for pagination styling.
`CSS`: Custom styling for layout and components.

### Installation
Follow these steps to run the application locally:

`Clone the Repository`:
git clone [https://github.com/PPnaruto/birdVision](https://github.com/PPnaruto/birdVision)

`Navigate into the Project Directory`:
cd birdvision

`Install Dependencies`:
npm install

`Run the Application`:
npm start

The application will start and be available at http://localhost:3000.

### Usage

`Products Page`
The main page displays products in a grid format, showing 10 products per page by default. You can navigate between pages using the pagination bar at the bottom of the page.

`Pagination Controls`
Previous & Next: Navigate between pages.
Page Numbers: Directly jump to a specific page.

### Code Overview

`Key Components`
Products.js: This is the main component that:

Fetches 10 products at a time from the API whenever a user navigates to a new page.
Implements client-side pagination using the page state.
Uses the Card component to render individual products.
Card.js: Renders a single product card, displaying the product image, title, and price.

`CSS Styling`
The custom styles in products.css help to align elements at the center, and Bootstrap classes are used for pagination styling. This makes the app responsive and visually consistent.

`API`
The application uses the Dummy JSON API to fetch product data:

Endpoint: https://dummyjson.com/products

Query Parameters:

limit: Number of products to fetch (default: 10).
skip: The starting index for fetching products (default: 0).

Data Structure:
The response is structured with a list of products, each containing id, title, price, thumbnail, and other attributes.

### Future Improvements

Load More: Add an option to load additional products instead of paginating.
Search Functionality: Allow users to search for products by title.
Filter Products: Implement filters (e.g., by category, price range).

### Acknowledgments

Dummy JSON API for providing free, sample data.
React and Bootstrap for making front-end development faster and more enjoyable.

