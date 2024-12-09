import * as types from "./actionType"; // Import action type constants

// Initial state for the content-related data
const initialState = {
  data: [], // Array to store content items
};

// Reducer function to handle content updates
export function updateContent(state = initialState, action) {
  switch (action.type) {
    // Handle adding data to the state
    case types.ADD_DATA: {
      return {
        ...state, // Spread existing state
        data: [...state.data, action.payload], // Add the new item to the `data` array
      };
    }

    // Handle replacing the data in the state
    case types.REMOVE_DATA: {
      return {
        ...state, // Spread existing state
        data: action.payload, // Update the `data` array with the payload
      };
    }

    case types.API_DATA: {
      console.log("zzzzzzzasdasd" , action)
      return {
        ...state, // Spread existing state
        data: action.payload, // Update the `data` array with the payload
      };
    }

    // Return the current state for any unknown action types
    default:
      return state;
  }
}
