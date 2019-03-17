import {EDIT_TOGGLE} from '../actionTypes/action_types';

export const editToggle = () => dispatch => {
     console.log("action Fired ")
     dispatch(  { type: EDIT_TOGGLE,
      payload: {text: 'result_of_simple_action'}
     })
    }     