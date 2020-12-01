import React from 'react';
import { 
    HeaderButton 
} from 'react-navigation-header-buttons';
import Ionicons from 'react-native-vector-icons/Ionicons';

import {Colors} from '../services/constants';

const CustomHeaderButton = (props) => {
    return(
        <HeaderButton 
            {...props}
            IconComponent = {Ionicons}
            iconSize      = {20}
            color         = {Colors.colorPrimaryTheme}
        />
    )
}

export default CustomHeaderButton;