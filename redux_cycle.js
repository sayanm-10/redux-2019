console.clear();

const createPolicy = (name, amt) => {
    return {
        type: "CREATE_POLICY",
        payload: {
            name: name,
            amount: amt
        }
    };
};

const createClaim = (name, amount) => {
    return {
        type: "CREATE_CLAIM",
        payload: {
            name: name,
            amountToBeCollected: amount
        }
    };
};

const deletePolicy = name => {
    return {
        type: "DELETE_POLICY",
        payload: {
            name: name
        }
    };
};

/*
 * REDUCERS
 */

const claimsHistory = (oldClaims = [], action) => {
    if (action.type === "CREATE_CLAIM") {
        return [...oldClaims, action.payload];
    }

    return oldClaims;
};

const accounting = (balance = 100, action) => {
    if (action.type === "CREATE_CLAIM") {
        return balance - action.payload.amountToBeCollected;
    } else if (action.type === "CREATE_POLICY") {
        return balance + action.payload.amount;
    }

    return balance;
};

const policies = (allPolicies = [], action) => {
    if (action.type === "CREATE_POLICY") {
        return [...allPolicies, action.payload.name];
    } else if (action.type === "DELETE_POLICY") {
        return allPolicies.filter(name => name != action.payload.name);
    }

    return allPolicies;
};

const { createStore, combineReducers } = Redux;

const departments = combineReducers({
    claimsHistory: claimsHistory,
    policies: policies,
    accounting: accounting
});

const store = createStore(departments);

//const action = createPolicy('Alex', 20);
//store.dispatch(action);

store.dispatch(createPolicy("Alex", 20));
store.dispatch(createPolicy("Jim", 30));
store.dispatch(createPolicy("Bob", 50));

store.dispatch(createClaim("Jim", 100));
store.dispatch(createClaim("Bob", 50));

store.dispatch(deletePolicy("Alex"));

console.log(store.getState());
