import React from 'react'
import { TouchableOpacity, View } from 'react-native'
import { styles } from './styles'
import { Text, Button } from '../../atoms'
import { TextInput } from '../../components/TextInput'
import { calcHeight } from '../../config/metrics'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import AppStyles from '../../config/styles'

export default RegisterView = (props) => {

    return (
        <KeyboardAwareScrollView
            style={styles.container}
            contentContainerStyle={{ paddingBottom: calcHeight(40), alignItems: "center" }}
        >
            <Text style={{ fontWeight: "bold", marginBottom: calcHeight(30) }} fontSize={22} textAlign="center">Welcome</Text>
            <Text style={{ marginBottom: calcHeight(10) }} fontSize={18} textAlign="center">Register</Text>
            <TextInput
                placeholder="Name"
                value={props.name}
                onChangeText={props.onNameChange}
                error={props.nameError}
                label="Name"
            />
            <TextInput
                keyboardType="email-address"
                placeholder="Email"
                value={props.email}
                onChangeText={props.onEmailChange}
                error={props.emailError}
                label="Email"
            />
            <TextInput
                password={true}
                placeholder="Password"
                value={props.password}
                onChangeText={props.onPasswordChange}
                error={props.passwordError}
                label="Password"
            />
            <Button
                onPress={props.submit}
                text="Submit"
                default
                style={{ marginTop: calcHeight(50), marginBottom: calcHeight(10) }}
                loader={props.loader}
            />
            <TouchableOpacity onPress={props.backToLogin} style={{padding:calcHeight(4)}}>
                <Text color={AppStyles.Color.AppColor} style={{ textDecorationLine: "underline" }}>Back to login</Text>
            </TouchableOpacity>
        </KeyboardAwareScrollView>
    )
}
