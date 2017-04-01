import { FETCH_WEATHER } from "../actions/index";

export default function(state = [], action) {
  console.log("In weather reducer", state, action);
  console.log("FETCH_WEATHER", FETCH_WEATHER);

  switch(action.type) {
    case FETCH_WEATHER:
      return [action.payload.data].concat(state);
  }

  return state;
}
