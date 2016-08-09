/**
 * Created by weiwei42 on 2016/8/5.
 */
import * as ACTIONS from './const_type';

const _init_state = {isNetData: false, data: {}};

export default function loginReducer(state = _init_state, action) {

    switch (action.type) {
        case ACTIONS.TYPE_LOGIN:
            let data = Object.assign({}, state, {isNetData: action.isNetData, data: action.data});
            console.log('state data: ' + JSON.stringify(data));
            return data;
        default:
            return state
    }

}

