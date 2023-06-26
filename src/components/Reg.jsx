import React from 'react';
import Username from './Username';
import Password from './Password';
import Button from './Button';

const Reg = (props) => {
    return (
        <div>
            <div>欢迎注册</div>
            <Username name="用户名:"></Username>
            <Password pwdname="密&nbsp;&nbsp;&nbsp;码:" id="pwd1"></Password>
            <Password pwdname="确认密码:" id="pwd2"></Password>
            <Button txt="注册"></Button>
        </div>
    );
};

export default Reg;