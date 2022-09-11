import { LOAD_ITEMS } from "../Constants/seminarConstants";

const initialState = {
  seminarList: [],
};

const seminarReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_ITEMS:
      return {
        ...state,
        seminarList: action.payload,
      };

    default:
      return state;
  }
};

export default seminarReducer;
