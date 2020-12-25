import React, {useEffect} from 'react';
import {useDispatch} from 'react-redux';

import Navigator from './navigation/navigator';
import {getContent} from './store/actions/actionShop';

const Layout = (props) => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getContent());
    },[]);

    return <Navigator />
}

export default Layout;