import React, { useState } from 'react'
import LoginView from './Login'
import NavigationService from '../../navigation/NavigationService'
import { useDispatch ,useSelector} from 'react-redux'
import { login } from '../../redux/actions'

export default Login = (props) => {
    const [email, setEmail] = useState("")
    const [emailError, setEmailError] = useState("")
    const [password, setPassword] = useState("")
    const [passwordError, setPasswordError] = useState("")

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
        if (!flag) {
            return
        }
        let data = {
            email: email,
            password: password
        }
        dispatch(login(data))
        // NavigationService.replace("Users")
    }

    return (
        <LoginView
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
            submit={submit}
            onCreateAccountPress={() => NavigationService.navigate("Register")}
        />
    )
}
