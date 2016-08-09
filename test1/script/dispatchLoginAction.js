/**
 * Created by weiwei42 on 2016/8/8.
 */

import * as ACTIONS from './const_type';

export function LoginAction(account, pwd) {

    //return {type: ACTIONS.TYPE_LOGIN, account: account, pwd: pwd}
    return function (dispatch, getState) {
        let state = getState()
        if (state.isNetData) {
            //有数据直接返回
            dispatch({type: ACTIONS.TYPE_LOGIN, isNetData: true, data: state.data})
        } else {
            _login(dispatch, state, account, pwd)
        }
    }
}

function _login(dispatch, state, account, password) {
    console.log('account: ' + account + '\npwd: ' + password);

    let url = 'http://10.211.21.74:3001/api/users/register';
    let requestBody = JSON.stringify({
        username: account,
        uid: password,
        gender: false
    });
    console.log('requestBody: ' + requestBody);
    var _state = state;
    window.fetch(url, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: requestBody
    }).then(res=> {
        return res.json()
    }).then(res=> {
        _afterLogin(dispatch, res);
    }).catch((error) => {
        console.error(error);
    });

}

function _afterLogin(dispatch, json) {
    console.log("result: " + JSON.stringify(json));

    var code = json.code;
    var data = {};
    if (code === 200) {
        //正常数据
        //JSON.stringify(json.data);
        data = json.data
    } else {
        //错误数据
        //JSON.stringify(json.message);
        data = json.message
    }

    dispatch({type: ACTIONS.TYPE_LOGIN, isNetData: true, data: data})

}
