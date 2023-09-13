
const initialState = {
  // allDogs: [],
  // dogs: [],
  // temperament: [],
};

const reducer = (state = initialState, actions) => {
  switch (actions.type) {
    
    // case GET_DOGS:
    //   return {
    //     ...state,
    //     allDogs: actions.payload,
    //     dogs: actions.payload,
    //   };    

    default:
      return {
        ...state,
      };
  }
};

export default reducer;
