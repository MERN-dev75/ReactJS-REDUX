"use client"; // Indicates this component is client-side in Next.js

import { useSelector } from "react-redux"; // Hook to access the Redux store
import styles from "./CountSection.module.scss"; // Import SCSS module for styling

const CountBlock = () => {
  // Select the `data` array from the Redux store
  const countValue = useSelector((state) => state?.Data?.data);

  return (
    <div className={styles.container}> {/* Main container for the count block */}
      <div className={styles.bottomLock}> {/* Inner container for the count display */}
        <h2>{countValue.length}</h2> {/* Display the length of the `data` array */}
      </div>
    </div>
  );
};

export default CountBlock; // Export the component
