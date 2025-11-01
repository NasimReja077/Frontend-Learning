// index.js
import { createStore, applyMiddleware, combineReducers } from 'redux';
import logger from 'redux-logger';   // logs every action + state change
import thunk from 'redux-thunk';    // enables async action creators
import axios from 'axios';         // HTTP client

// 2. ACTION TYPE CONSTANTS (prevents typos)
//action name constants
// const init = 'account/init';
const inc = 'account/increment';
const dec = 'account/decrement';
const incByAmt = 'account/incrementByAmount';

const getAccUserPending = 'account/getUser/pending';
const getAccUserFulFilled = 'account/getUser/fulfilled';
const getAccUserRejected = 'account/getUser/rejected';

const incBonus = 'bonus/increment';
//store
// 4. COMBINE REDUCERS & CREATE STORE
const store = createStore(
  combineReducers({
    account: accountReducer,
    bonus: bonusReducer
  }),
  applyMiddleware(logger.default, thunk.default) // logger first → pretty logs
);

const history = [];

// 3. REDUCERS (pure functions – never mutate state)
function accountReducer(state = { amount: 1 }, action) {
  switch (action.type) {
     // ---- Async flow
    case getAccUserFulFilled:
      return { amount: action.payload, pending:false };

    case getAccUserRejected:
        return {...state, error:action.error, pending:false  };

    case getAccUserPending:
            return { ...state,pending:true };

     
      // ---- Sync actions      
    case inc:
      return { amount: state.amount + 1 };
    case dec:
      return { amount: state.amount - 1 };
    case incByAmt:
      return { amount: state.amount + action.payload };
    default:
      return state;
  }
}

function bonusReducer(state = { points: 0 }, action) {
    switch (action.type) {
        case incBonus:
            return { points:  state.points + 1 };
        case incByAmt:
            if(action.payload>=100)
              return { points:  state.points + 1 };
        default:
            return state;   // no change
    }
}


//global state

// store.subscribe(() => {
//   history.push(store.getState());
//   console.log(history);
// });


// 6. ACTION CREATORS
/** Async action – fetches account from JSON-Server */
function getUserAccount(id) {
  return async (dispatch, getState) => {
    try{
        dispatch(getAccountUserPending()); // pending
        const { data } = await axios.get(`http://localhost:3000/accounts/${id}`);
        dispatch(getAccountUserFulFilled(data.amount)); // sucess
    } catch(error){
        dispatch(getAccountUserRejected(error.message)); // error
    }
   
  };
}

// Sync action creators
function getAccountUserFulFilled(value) {
  return { type: getAccUserFulFilled, payload: value };
}
function getAccountUserRejected(error) {
    return { type: getAccUserRejected, error: error };
}
  function getAccountUserPending() {
    return { type: getAccUserPending };
}

function increment() {
  return { type: inc };
}
function decrement() {
  return { type: dec };
}
function incrementByAmount(value) {
  return { type: incByAmt, payload: value };
}
function incrementBonus(value) {
    return { type: incBonus};
  }

  // 7. DEMO: Dispatch after 2 seconds
setTimeout(() => {
  store.dispatch(getUserAccount(2));  // fetches account id=2 (amount=100)
// store.dispatch(incrementByAmount(200))
// store.dispatch(incrementBonus());
}, 2000);


/**
 *             Key Redux Concepts Demonstrated
 *   Concept                       Where it appears
     Single Store                  createStore(...)
     Immutability                  All return { ...state, … }
     Combine Reducers              combineReducers({ account, bonus })
     Middleware                    applyMiddleware(logger, thunk)
     Async Actions                 getUserAccount returns a function (thunk)
     Action Creators               increment, getAccountUserFulFilled, …
     Pure Reducers                 No side-effects, same input → same output
 */