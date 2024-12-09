# NextJS-Redux State Managment

This project demonstrates a Redux-powered data management application built with ReactJS. The application provides an intuitive interface to:

1. Add new data dynamically.
2. Track and display the count of data entries.
3. List all data entries with functionality to delete them.

## Featured

1. Add Data: Users can add data dynamically through an input field.
2. Display Counts: The total count of data entries is displayed in real-time.
3. Manage List: View all data in a scrollable list with delete functionality.
4. Modern Frameworks:
   * ReactJS: For building a fast and interactive frontend.
   * Redux Toolkit: For simplified and robust state management.
   * CSS Modules: For scoped and reusable styles.

## Prerequisites

Before you begin, ensure you have the following installed:

     * Node.js v18+
     * npm or yarn

## Setup and Installation

    * git clone https://github.com/MERN-dev75/ReactJS-REDUX.git
    * cd redux
    * npm install
    * npm run start
    * Open the application in your browser at http://localhost:3000.

## Folder Structure

    /src
    ├── App.js                                # Main entry point for the application
    ├── index.js                              # Application bootstrap and rendering
    ├── App.module.css                        # Scoped styles for the main app
    ├── global.css                            # Global styles
    |
    ├── /Components                           # Reusable UI components
    │     ├── /ButtonBlock
    │     │     ├── ButtonGroup.jsx           # Handles input for adding data
    │     │     ├── ButtonGroup.module.css    # Styling for ButtonBlock
    │     │
    │     ├── /CountBlock
    │     │     ├── CountSection.jsx          # Displays the count of data entries
    │     │     ├── CountSection.module.css   # Styling for CountBlock
    │     │
    │     ├── /ListingBlock
    │           ├── Listing.jsx               # Renders the list of data entries
    │           ├── Listing.module.css        # Styling for ListingBlock
    |
    ├── /Redux                                # Redux state management
    │     ├── store.js                        # Redux store configuration
    │     ├── rootReducer.js                  # Combined root reducer for the app state
    │     ├── Provider.js                     # Redux Provider wrapper for the app
    │     ├── /content
    │           ├── reducer.js                # Reducer logic for content updates
    │           ├── action.js                 # Action creators for content management
    │           ├── actionTypes.js            # Constants for action types
    |
    ├── /styles                               # Scoped styles for components
    │     ├── fonts.css                       # Font imports and configuration

## Components Overview

## Home Component

The main page (App.js) serves as the application’s entry point and organizes the following blocks:

  1. ButtonBlock: For adding items to the data list.
  2. CountBlock: Displays the total count of items added.
  3. ListingBlock: Shows all added items with delete functionality.

## ButtonBlock

* Path: /components/ButtonBlock/ButtonGroup.jsx
* Purpose: Handles user input and adds new items to the Redux store.

## CountBlock

* Path: /components/CountBlock/CountSection.jsx
* Purpose: Uses Redux selectors to display the current count of items.

## ListingBlock

* Path: /components/ListingBlock/Listing.jsx
* Purpose: Dynamically displays a scrollable list of data fetched from the Redux store. Includes a delete button for each item.
