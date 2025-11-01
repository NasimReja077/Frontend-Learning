//test.js
const state = { account: { amount: 1 }, bonus: { points: 2 } };
const newState = { 
     account: {...state.account},  // shallow copy of account
     bonus: {points: state.bonus.points+1} }; // new bonus object

console.log(newState, state); // → {account:{amount:1}, bonus:{points:3}}   {account:{amount:1}, bonus:{points:2}}
state.account.amount=100; // MUTATE original!
console.log(newState, state);

// → {account:{amount:1}, bonus:{points:3}}   {account:{amount:100}, bonus:{points:2}}


// What to see
// Variable                      After mutation
// newState.account.amount       still 1
// state.account.amount          100
/**
 * Why?  
newState.account is a shallow copy ({...state.account}) → it gets its own object.  
Mutating state.account does not affect newState.

Redux rule: Never mutate the state you receive in a reducer. Always return a new object.
 */

