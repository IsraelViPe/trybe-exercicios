const showCountValue = (counter) => {
    const h1Element = document.getElementById("counter");
    h1Element.innerText = counter;
  };
  
  showCountValue(0);
  // ========== ACTIONTYPES ==========
  const INCREMENTO = "INCREMENTO";
  const DECREMENTO = "DECREMENTO";
  
  // ========== ACTIONS ==========
  const actionIncremento = () => {
    store.dispatch({ type: INCREMENTO }); // atenção sem essa função dispatch eu não consigo alterar nada no store 
  };
  
  const actionDecremento = () => {
    store.dispatch({ type: DECREMENTO });
  };
  // ========== REDUCER ==========
  const initialState = { counter: 0 };
  const reducer = (state = initialState, action) => {
    switch (action.type) {
      case INCREMENTO:
        return {
          counter: state.counter + 1
        };
      case DECREMENTO:
        return {
          counter: state.counter - 1
        };
      default:
        return state;
    }
  };
  
  // ========== STORE ==========
  const store = Redux.createStore(reducer);
  
  store.subscribe(() => { // adiciona um listener que executa uma callback toda vez que uma action for despachada 
    const { counter } = store.getState(); // precisei desestruturar para acessar a chave counter dentro do store
    showCountValue(counter);
  });
  
  const btnInc = document.getElementById("inc");
  const btnDec = document.getElementById("dec");
  
  btnInc.addEventListener("click", actionIncremento);
  btnDec.addEventListener("click", actionDecremento);
  