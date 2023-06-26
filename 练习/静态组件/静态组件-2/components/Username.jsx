import React from 'react';

const Username = (props) => {
    let {name} = props
    return (
        <div>
            <label htmlFor="Username">{name}</label>
            <input type="text" id="userName" />
        </div>
    );
};

export default Username;