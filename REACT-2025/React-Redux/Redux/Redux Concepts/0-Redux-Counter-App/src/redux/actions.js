// Action - "Describes what to do", “What happened?”

// An action is just a plain object.
// Example:
// {
//   type: "INCREMENT"
// }

// type → required key that describes the event
// payload → optional data (e.g. { amount: 5 })

// Actions - An Action is a plain JavaScript object that tells Redux what happened.It must have a type property (string), and optionally a payload.
// Actions describe “what to do”, not “how to do i"

// Must have a type string.
// Convention - payload (or data) holds additional info.
// Why - The only way to trigger a state change.
// Best Practice - Use constants for type (export const ADD_TODO = 'ADD_TODO').

// Action Creators - Function returning actions - addUser(user)

// Action Creators - An Action Creator is a function that returns an action (object).It helps avoid hardcoding action objects in components.Functions that return action objects (or thunks).
// Why - > Encapsulate action creation → cleaner components.
// RTK -> createSlice auto-generates them (actions.addTodo).


// Action creators (functions that return actions)
// Counter actions
export const increment = () => ({
     type: "INCREMENT"
     // payload
});

export const decrement = () => ({
     type: "DECREMENT"
});


export const reset = () => ({
     type: "RESET"
});


// User fetching actions
export const fetchUsersRequest = () => ({ type: "FETCH_USERS_REQUEST" });
export const fetchUsersSuccess = (users) => ({
  type: "FETCH_USERS_SUCCESS",
  payload: users
});
export const fetchUsersFailure = (error) => ({
  type: "FETCH_USERS_FAILURE",
  payload: error
});


// Async Action Creator (Thunk)
export const fetchUsers = () => {
  return async (dispatch) => {
    dispatch(fetchUsersRequest());
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/users");
      const data = await res.json();
      dispatch(fetchUsersSuccess(data));
    } catch (err) {
      dispatch(fetchUsersFailure(err.message));
    }
  };
};