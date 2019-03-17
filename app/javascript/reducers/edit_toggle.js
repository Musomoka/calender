import { EDIT_TOGGLE} from '../actionTypes/action_types';

const initialState = {
  text: "This is the initial state"
}

export default function(state = initialState, action){
  switch (action.type) {
   case EDIT_TOGGLE:
    return {
      ...state,
     result: action.payload
    }
   default:
   console.log(action.type)
    return state;
  }
  
 }
 