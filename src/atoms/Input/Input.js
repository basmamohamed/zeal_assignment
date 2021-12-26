import React, { useEffect, useRef, useState } from 'react'
import { StyleProp, TextInput, ViewStyle, View } from 'react-native'
import AppStyles from '../../config/styles';
import styles from './styles'

type KeyboardType = 'default' | 'email-address' | 'numeric' | 'phone-pad' | 'number-pad' | 'decimal-pad';
type KeyboardTypeIOS =
    | 'ascii-capable'
    | 'numbers-and-punctuation'
    | 'url'
    | 'name-phone-pad'
    | 'twitter'
    | 'web-search';
type KeyboardTypeAndroid = 'visible-password';
type KeyboardTypeOptions = KeyboardType | KeyboardTypeAndroid | KeyboardTypeIOS;
type InputProps = {
    style?: StyleProp<ViewStyle>,
    secureTextEntry: Boolean,
    onChangeText: Function,
    keyboardType?: KeyboardTypeOptions;
    maxLength?: number;
    value: String,
    placeholder: String,
    autoFocus: Boolean,
    iconName: IconsName,
    onFocus: Function,
    onBlur: Function,
    editable: Boolean,
    iconStyle?: {
        width: Number,
        color: String,
        height: Number,
    },
    onKeyPress: Function,
    caretHidden: Boolean,
    numberOfLines: Number,
    onSubmitEditing: Function
}

export function Input(params: InputProps) {
    const [isFocused, setFocused] = useState(false)
    const input = useRef(null)
    useEffect(() => {
        if (params.autoFocus)
            input.current.focus()
    }, [params.autoFocus])
    const getBorderColor = () => {
        if (params.error)
            return "red"
        else if (isFocused)
            return "#C4C4C4"
        else
            return "#C4C4C4"
    }
    const onBlur = () => {
        setFocused(false)
    }
    const onFocus = () => {
        setFocused(true)
    }
    return (
        <TextInput
            numberOfLines={params.numberOfLines}
            caretHidden={params.caretHidden}
            onKeyPress={params.onKeyPress}
            editable={params.editable}
            onBlur={onBlur}
            onFocus={onFocus}
            secureTextEntry={params.secureTextEntry}
            maxLength={params.maxLength}
            keyboardType={params.keyboardType}
            onChangeText={params.onChangeText}
            onSubmitEditing={params.onSubmitEditing}
            ref={input}
            value={params.value}
            autoFocus={params.autoFocus}
            multiline={params.multiline}
            placeholder={params.placeholder}
            placeholderTextColor={AppStyles.Color.GRAY}
            style={[styles.input, { borderColor: getBorderColor() }, params.style]} />

    )
}

Input.defaultProps = {
    placeholder: "",
    editable: true
};
