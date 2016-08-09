/**
 * Created by weiwei42 on 2016/8/4.
 */
import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    Image,
    ToastAndroid,
    View
} from 'react-native';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actionsCreater from './dispatchLoginAction';

class login extends Component {
    constructor(props) {
        super(props)

        this.state = {isNetData: false, data: {}}
    }

    render() {
        console.log('======render');

        const {isNetData, data, actions} = this.props;

        let _loginData = {account: '', pwd: ''}
        let result = "未登录";
        if (isNetData === true) {
            result = "登录成功"
        }

        return (
            <View style={styles.container}>

                <View style={styles.conhor}>
                    <Text style={styles.tip}>输入账号：</Text>
                    <TextInput style={styles.input}
                               placeholder="点击输入账号"
                               onChangeText={(text)=>_loginData.account = text}/>
                </View>

                <View style={styles.conhor}>
                    <Text style={styles.tip}>输入密码：</Text>
                    <TextInput style={styles.input}
                               placeholder="点击输入密码"
                               onChangeText={(text)=>_loginData.pwd = text}/>
                </View>

                <TouchableOpacity style={styles.login}
                                  onPress={()=>actions.LoginAction(_loginData.account, _loginData.pwd)}>
                    <Image source={require('../img/icon_login.png')}/>
                    <Text style={{textAlign: 'center', fontSize: 30, color: "#00ff00"}}>登录</Text>
                </TouchableOpacity>

                <Text style={styles.tip}>登录结果：{result}</Text>
            </View>)
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        backgroundColor: '#F5FCFF',
    },
    conhor: {
        flexDirection: "row",
        flexWrap: "nowrap",
    },
    tip: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    input: {
        minWidth: 200,
        fontSize: 15,
        textAlign: 'left',
    },
    login: {
        justifyContent: 'flex-start',
        alignSelf: 'center',
        marginTop: 50
    }
})

function mapStateToProps(state) {
    console.log('mapStateToProps=== ' + JSON.stringify(state));
    return {isNetData: state.loginReducer.isNetData, data: state.loginReducer.data}
}

export default connect(
    mapStateToProps,
    dispatch => ({actions: bindActionCreators(actionsCreater, dispatch)})
)(login)