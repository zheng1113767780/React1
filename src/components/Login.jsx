import React from 'react';
import Username from './Username';
import Password from './Password';
import Button from './Button';

const Login = () => {
    return (
        <div>
            <div>欢迎登录</div>
            <Username name="用户名:"></Username>
            <Password pwdname="密&nbsp;&nbsp;&nbsp;码:"></Password>
            <Button txt="登录"></Button>
        </div>
    );
};

export default Login;