"use client"; // Indicates this is a client-side component in Next.js

import { useSelector, useDispatch } from "react-redux"; // Hooks for interacting with the Redux store
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // FontAwesome component for icons
import { faTrash } from "@fortawesome/free-solid-svg-icons"; // Import trash icon
import styles from "./Listing.module.scss"; // Import SCSS module for styling
import { removeItem } from "../../Redux/Content/action"; // Redux action for removing an item

const ListingBlock = () => {
  const dispatch = useDispatch(); // Hook to dispatch actions to the Redux store
  const ItemsValue = useSelector((state) => state?.Data?.data); // Selector to access the `data` array from the Redux store

  // Function to remove an item by index
  const removeItemCall = (index) => {
    // Filter out the item at the specified index and dispatch the updated array
    dispatch(removeItem(ItemsValue?.filter((_, i) => i !== index)));
  };

  return (
    <div className={styles.container}> {/* Main container */}
      <div className={styles.scrollable}> {/* Scrollable wrapper for the list */}
        {ItemsValue.map((item, index) => ( // Map over the items in `ItemsValue` to render them
          <div key={index} className={styles.smallBlock}> {/* Individual item block */}
            <span className={styles.name}>{item}</span> {/* Display item name */}
            <button
              className={styles.deleteButton} // Styled delete button
              onClick={() => removeItemCall(index)} // Call `removeItemCall` with the current index
            >
              <FontAwesomeIcon icon={faTrash} /> {/* Trash icon for delete */}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ListingBlock; // Export the component
