import { fromJS } from 'immutable'
import { SET_AMZ } from './actionType'


const defaultState = fromJS({
    name:null
})

export default (state = defaultState,action) => {
    switch(action.type) {
        case SET_AMZ:
            return state.set('name',action.name)

        default :
            return state
    }
}
