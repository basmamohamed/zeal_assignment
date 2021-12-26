import React, { useState } from 'react'
import RegisterView from './Register'
import NavigationService from '../../navigation/NavigationService'
import { register } from '../../redux/actions'
import { useDispatch } from 'react-redux'

export default Register = (props) => {
    const [email, setEmail] = useState("")
    const [emailError, setEmailError] = useState("")
    const [password, setPassword] = useState("")
    const [passwordError, setPasswordError] = useState("")
    const [name, setName] = useState("")
    const [nameError, setNameError] = useState("")

    const dispatch = useDispatch()

    const submit = () => {
        let flag = true
        if (email.trim() == "") {
            setEmailError("Email is not valid")
            flag = false
        }
        if (password.trim() == "") {
            setPasswordError("Password field is required")
            flag = false
        }
        if (name.trim() == "") {
            setNameError("Password field is required")
            flag = false
        }
        if (!flag) {
            return
        }
        let data={
            "email":email,
            "password":password,
            "name":name
        }
        dispatch(register(data))
        NavigationService.replace("Users")
    }

    return (
        <RegisterView
            {...props}
            email={email}
            emailError={emailError}
            onEmailChange={(text) => {
                setEmail(text)
                setEmailError("")
            }}
            password={password}
            passwordError={passwordError}
            onPasswordChange={(text) => {
                setPassword(text)
                setPasswordError("")
            }}
            name={name}
            nameError={nameError}
            onNameChange={(text) => {
                setName(text)
                setNameError("")
            }}
            submit={submit}
            backToLogin={() => NavigationService.goBack()}
        />
    )
}
