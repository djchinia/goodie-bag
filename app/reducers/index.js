import Axios from 'axios';

// ACTION TYPES
const GOT_ALL_CANDIES = 'GOT_ALL_CANDIES';
const GOT_SINGLE_CANDY = 'GOT_SINGLE_CANDY';

// ACTION CREATORS
export const gotAllCandies = candies => {
  return {
    type: GOT_ALL_CANDIES,
    candies,
  };
};

export const gotSingleCandy = candy => {
  return {
    type: GOT_SINGLE_CANDY,
    candy,
  };
};

// THUNKS
export getAllCandies = () => {
  return async(adispatch, getState, {Axios})
}

//REDUCER
export const getAllCandies = () => {
  return async dispatch => {
    const { data } = await Axios.get('/api/candies');
    console.log(data);
    dispatch(gotAllCandies(data));
  };
};

export const getSingleCandy = () => {
  return async dispatch => {
    const { data } = await Axios.get('/api/id');
    console.log(data);
    dispatch(gotSingleCandy(data));
  };
};

// REDUCER
const initialState = {
  allCandies: [],
  singleCandy: {},
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GOT_ALL_CANDIES:
      // note that the spread only does a shallow copy
      return { ...state, allCandies: action.candies};
    case GOT_SINGLE_CANDY:
      return {...state, allCandies: action.candies};
    default:
      return state;
  }
};

export default rootReducer;
