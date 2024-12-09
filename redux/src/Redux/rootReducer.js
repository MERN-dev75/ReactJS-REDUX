import { combineReducers } from "redux"; // Utility to combine multiple reducers
import { updateContent } from "./Content/reducer"; // Reducer to manage content-related state

// Combine all application reducers
const reducer = combineReducers({
  Data: updateContent, // Maps the `Data` state slice to the `updateContent` reducer
});

export default reducer;
