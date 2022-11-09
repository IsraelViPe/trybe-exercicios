const Redux = require('redux');

const fazerLogin = (email) => ({
    type: "LOGIN",
    email
});

const ESTADO_INICIAL = {
    login: false,
    email: "",
};

const reducer = (state = ESTADO_INICIAL, action) => {
    switch(action.type) {
        case "LOGIN":
            return {
                ...state, 
                login: !state.login,
                email: action.email,
            };
            default: // sempre precisamos um default no switch
            return state;
    }
};

const store = Redux.createStore(reducer);

store.dispatch(fazerLogin("alguem@email.com")) // preciso da função dispatch para passar uma action para o store 

console.log(store.getState())       
