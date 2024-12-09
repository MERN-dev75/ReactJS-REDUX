"use client"; // Indicates this is a client-side component in Next.js

import { useState } from "react"; // React hook for managing component state
import { useDispatch } from "react-redux"; // Hook to dispatch actions to the Redux store
import styles from "./ButtonGroup.module.scss"; // Import SCSS module for styling
import { addContent, GetDataFromAPI } from "../../Redux/Content/action"; // Redux action to add content

const ButtomBlockUI = () => {
  const dispatch = useDispatch(); // Hook to dispatch actions
  const [inputValue, setInputValue] = useState(""); // State to manage the input field value

  // Function to add an item to the Redux store
  const addItem = () => {
    // Check if the input is not empty or just spaces
    if (inputValue.trim() !== "") {
      dispatch(addContent(inputValue)); // Dispatch the `addContent` action with the input value
      setInputValue(""); // Clear the input field after adding the item
    }
  };

  const callAPI = () => {
    dispatch(GetDataFromAPI());
  }

  return (
    <div className={styles.container}> {/* Main container */}
      <div className={styles.bottomLock}> {/* Inner container for the input and button */}
        <input
          type="text" // Input field for entering new items
          value={inputValue} // Controlled input bound to `inputValue`
          onChange={(e) => setInputValue(e.target.value)} // Update state on user input
          placeholder="Enter item" // Placeholder text for the input field
          className={styles.input} // Styling for the input field
        />
        <button
          className={styles.addButton} // Styled add button
          onClick={addItem} // Call `addItem` when the button is clicked
        >
          Add Item
        </button>
      </div>
      <div className={styles.bottomLock}> {/* Inner container for the input and button */}
        <button
          className={styles.addButton} // Styled add button
          onClick={callAPI} // Call `addItem` when the button is clicked
        >
          Add Item From API
        </button>
      </div>
    </div>
  );
};

export default ButtomBlockUI; // Export the component
