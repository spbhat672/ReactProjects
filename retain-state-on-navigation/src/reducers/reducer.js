const initialData = {
  val: "",
};

const reducer = (state = initialData, action) => {
  switch (action.type) {
    case "SET_VAL":
      return { ...state, val: action.payload };

    default:
      return state;
  }
};

export default reducer;
