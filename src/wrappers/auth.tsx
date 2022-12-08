import React, { FC, ReactElement } from 'react';
import { Redirect } from 'umi'


const AuthWrapper: FC<{ children: ReactElement }> = ({ children }) => {
    const isLogin = localStorage.getItem("user") && localStorage.getItem("token");
    if (isLogin) {
        return <div>{children}</div>;
    } else {
        return <Redirect to="/" />;
    }
}

export default AuthWrapper;

