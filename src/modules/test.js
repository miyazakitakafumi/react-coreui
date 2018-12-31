/********************************
 *ACTION
 *******************************/
const CHANGE_VALUE = 'coreui-reat/test/CHANGE_VALUE'

/********************************
 *ACTION CREATOR
 *******************************/
export const changeValue = value => {
    return {
        type: CHANGE_VALUE,
        payload: value
    }
}

/********************************
 *REDUCER
 *******************************/
export const initialState = {
    value: 0
}

const reducer = (state = initialState, action) => {
    switch(action.type){
        case CHANGE_VALUE:
            return {
                ...state,
                value: state.value + action.payload
            }
        default:
            return state
    }
}

export default reducer