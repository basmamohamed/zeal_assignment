import React, { useState } from 'react'
import { StyleProp, ViewStyle, View } from 'react-native'
import styles from './styles'
import { Input, Text, Button } from '../../atoms'
import { calcHeight, calcWidth } from '../../config/metrics'
import AppStyles from '../../config/styles'

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

type TextInputProps = {
    style?: StyleProp<ViewStyle>,
    inputStyle?: StyleProp<ViewStyle>,
    password: Boolean,
    onChangeText: Function,
    maxLength?: number;
    value: String,
    placeholder: String,
    autoFocus: Boolean,
    iconName: IconsName,
    label: String,
    error: String,
    iconStyle?: {
        width: Number,
        color: String,
        height: Number,
    };
    multiline: Boolean,
    onKeyPress: Function,
    editable: Boolean,
    caretHidden: Boolean,
    keyboardType: KeyboardTypeOptions,
    hint: String,
    leftIcon: String
}
export function TextInput(params: TextInputProps) {
    const [secureTextEntry, setSecureTextEntry] = useState(params.password)
    const _setSecureTextEntry = () => {
        setSecureTextEntry(!secureTextEntry)
    }

    return (
        <View style={[styles.container, params.style]}>
            {params.label && <Text fontSize={18}>{params.label}</Text>}
            <View style={styles.inputViewContainer}>
                <Input
                    keyboardType={params.keyboardType}
                    caretHidden={params.caretHidden}
                    onKeyPress={params.onKeyPress}
                    editable={params.editable}
                    maxLength={params.maxLength}
                    multiline={params.multiline}
                    value={params.value}
                    onChangeText={params.onChangeText}
                    error={params.error}
                    autoFocus={params.autoFocus}
                    secureTextEntry={secureTextEntry}
                    placeholder={params.placeholder}
                    style={[styles.input,
                    {
                        paddingRight: calcWidth(params.password ? 50 : 15)
                    },
                    params.inputStyle]}
                />
                {params.password && <Button
                    onPress={_setSecureTextEntry}
                    style={styles.showPasswordButton}
                    textStyle={{ fontSize: 11 }}
                    text={secureTextEntry ? "show" : "hide"}
                />}

            </View>

            {(params.error && params.error != "") ? <Text
                style={styles.errorText}
                fontSize={12}
                color={"#F2002F"}>{params.error}</Text> : null}

        </View>

    )
}

TextInput.defaultProps = {
    placeholder: ""
};
