import './App.css';
// Importing child components for adding items, displaying counts, and listing items
import ButtomBlockUI from "./Component/ButtonBlock/ButtonGroup";
import CountBlock from "./Component/CountBlock/CountSection";
import ListingBlock from "./Component/ListingBlock/Listing";

function App() {
  return (
    <div className="page">

    {/* Heading section */}
    <div className="Heading">
      Redux Global State Management
    </div>

    {/* Event section that groups the individual functional blocks */}
    <div className="EventSection">

      {/* Block for adding items */}
      <div className="Block_Section">
        <h1>Add Items</h1>
        {/* ButtonBlockUI handles user input for adding items */}
        <ButtomBlockUI />
      </div>

      {/* Block for displaying counts */}
      <div className="Block_Section">
        <h1>Counts</h1>
        {/* CountBlock shows the total count of items added */}
        <CountBlock />
      </div>

      {/* Block for displaying the list of items */}
      <div className="Block_Section">
        <h1>List</h1>
        {/* ListingBlock displays the actual list of items */}
        <ListingBlock />
      </div>

    </div>
  </div>
  );
}

export default App;
