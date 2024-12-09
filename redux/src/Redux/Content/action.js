import * as types from "./actionType"; // Import action type constants

// Action creator for adding content
export const addContent = (payload) => ({
  type: types.ADD_DATA, // Action type for adding data
  payload, // Payload containing the data to add
});

// Action creator for removing an item
export const removeItem = (payload) => ({
  type: types.REMOVE_DATA, // Action type for removing data
  payload, // Payload containing the identifier for the item to remove
});

export const apiresponse = (payload) => ({
  type: types.API_DATA, // Action type for removing data
  payload, // Payload containing the identifier for the item to remove
});

export const GetDataFromAPI = (payload) => {
  return async (dispatch, getState, api) => {
    try {
      // Make a GET request to the /api/dummay endpoint
      const response = await api.get("https://jsonplaceholder.typicode.com/users");
      dispatch(apiresponse(response?.data?.map(item=> item.username)));

    } catch (err) {
      console.error("Error occurred:", err);
    } finally {
    }
  };
};
