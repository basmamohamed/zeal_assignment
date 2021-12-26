import React from 'react'
import { StyleProp, TouchableOpacity, ViewStyle } from 'react-native'
import { Text } from '../../atoms'
import {styles} from './styles'
import AppStyles from '../../config/styles'
import { Loader } from '../../components/Loader'
import { calcWidth } from '../../config/metrics'

type TabButtonsProps = {
    style?: StyleProp<ViewStyle>;
    textStyle?: {
        color: String,
        fontSize: Number
    };
    text: String,
    onPress: Function,
    activeOpacity: Number,
    default: Boolean,
    disabled: Boolean,
    strokeButton: Boolean,
    color: String,
    loader: Boolean
}

export function Button(params: TabButtonsProps) {
    return (
        <TouchableOpacity
            disabled={params.loader || params.disabled}
            activeOpacity={params.activeOpacity}
            onPress={params.onPress}
            style={[params.default && styles.buttonStyle,
            params.style, params.strokeButton && styles.strokeButton, { opacity: (params.fullOpacity ? 1 : (params.disabled ? .5 : 1)) }]}>
            {params.loader ?
                <Loader small closeOpacity color={params.color ? params.color : AppStyles.Color.WHITE} /> :
                params.text !== "" && <Text
                    fontSize={params.textStyle.fontSize}
                    color={params.color ? params.color : params.default ? AppStyles.Color.WHITE : params.color}
                    style={[styles.textStyle]}>
                    {params.text}
                </Text>}
        </TouchableOpacity>


    )
}

Button.defaultProps = {
    activeOpacity: .8,
    style: {},
    text: "",
    textStyle: {
        fontSize: calcWidth(15)
    },
};
