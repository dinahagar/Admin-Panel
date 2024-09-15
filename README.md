## Project Name: Admin Panel

## Overview
    The Admin Panel is a web application designed to streamline the management of products and categories for online retail environments. It provides a user-friendly interface for administrators to efficiently handle product listings and categories, while offering end-users a seamless experience for browsing and searching products.

## Installation
1. Clone the repository: https://github.com/dinahagar/Admin-Panel.git
2. Navigate into the project directory: cd admin-panel 
3. Install dependencies: npm install

## Running the Project: 
npm start

## Usage
After setting up and running the project locally, follow these steps to navigate and use the application:

1. Open Your Browser
    * Navigate to http://localhost:3000.

2. Login
    * Use the following credentials to log in:
        * Username: johnd
        * Password: m38rmF$

3. Home Page
    * The first page you will see is the Home page.
    * Header: Contains a user icon with a dropdown menu that allows you to log out.
    * Sidebar: Provides easy navigation between different pages of the application.

4. Products Page
    * This page displays a list of product cards.
    * Product Cards: Each card allows you to:
        * View Product Details: Click on a product card to open a modal with detailed information about the product.
        * Edit Product: Edit product information directly from the product card.
        * Delete Product: Remove a product from the list.
    * Add New Product: There is a button to add a new product to the list.
    * Filter Products: Use the dropdown to filter products by category.
    * Search Bar: Located in the header, allows you to search for products by title.

4. Categories Page
    * Displays all available categories.
    * Category Actions:
        * Add Category: Add a new category to the list.
        * Edit Category: Modify existing category details.
        * Delete Category: Remove a category from the list.
        * View Category Products: Click on a category to navigate to a page displaying all products within that category.

## API Documentation

Using Fake store api : https://fakestoreapi.com/

    ## Authentication
        POST /auth/login
        Description: Authenticate a user and return a token for session management.

    ## Products
        GET /products?limit=${limit}&page=${page}
        Description: Retrieve a list of products

        POST /products
        Description: Add a new product to the list.

        PUT /products/${id}
        Description: Update information for an existing product.

        DELETE /products/${id}
        Description: Delete a specific product from the list.

    ## Categories
        GET /products/categories
        Description: Retrieve a list of all categories.

        GET /products/category/${category}
        Description: Retrieve all products within a specific category.

## Future Enhancements

1. Customizable Edit Forms: Implement forms that allow user to customize and update specific data fields more flexibly.
2. Pagination: Add pagination functionality to improve navigation and performance when dealing with large sets of data.
3. Enhanced Search Functionality: Improve the search capabilities to provide more accurate and relevant results for end-users.
4. Localization Support: Integrate localization features to support multiple languages.