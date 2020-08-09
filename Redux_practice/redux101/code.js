console.clear();

// prople dropping off a form
// action creator -> function
const createPolicy = (name, amount) => {
  return {
    // Action {a form in our analogy}
    type: 'CREATE_POLICY',
    payload : {
      name: name,
      amount: amount
    }
    
  }
}

const deletePolicy = (name) => {
  return {
    type: 'DELETE_NAME',
    payload: {
      name: name
    }
  }
}

const createClaim = (name, amount) => {
  return {
    type: 'CREATE_CLAIM',
    payload : {
      name: name,
      amount: amount
    }
  }
}


/// REDUCERS (DEPARTMENT)

const claimsHistory = (oldListOfClaims = [], action ) => {
  if(action.type === 'CREATE_CLAIM') {
    //we care abou thte form  
    return [...oldListOfClaims, action.payload];
  }
  
  //we don't care the action
   return oldListOfClaims;
}

const accounting = (bagOfMoney = 100, action) => {
  if(action.type === 'CREATE_CLAIM') {
    return bagOfMoney - action.payload.amount;
  }
  else if (action.type === 'CREATE_POLICY'){
    return bagOfMoney + action.payload.amount;
  }
  
  return bagOfMoney;
}


const policies = (listOfPolicies = [], action) => {
  if(action.type === 'CREATE_POLICY') {
    return [...listOfPolicies, action.payload.name ];
  }
  else if (action.type === 'DELETE_POLICY'){
    return listOfPolicies.filter(name => name !== action.policy.name );
  }
  
  return listOfPolicies;
}


const {createStore, combineReducers} = Redux;

const ourDepartments = combineReducers({
  accounting: accounting,
  claimsHistory: claimsHistory,
  policies: policies
})

const store = createStore(ourDepartments);

store.dispatch(createPolicy('Alex', 20));
store.dispatch(createPolicy('Jim', 30));
store.dispatch(createPolicy('Bob', 40));

store.dispatch(createClaim('Alex', 120));
store.dispatch(createClaim('Jim', 50));

store.dispatch(deletePolicy('Bob'));

console.log(store.getState());  