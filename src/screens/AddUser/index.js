import React, { useState } from 'react'
import AddUserView from './AddUser'
import NavigationService from '../../navigation/NavigationService'

export default AddUser = (props) => {

    const { user } = props.route.params

    const [name, setName] = useState(user ? user.name : "")
    const [nameError, setNameError] = useState("")
    const [email, setEmail] = useState(user ? user.email : "")
    const [emailError, setEmailError] = useState("")
    const [locations, setLocations] = useState([])

    const submit = () => {
        let flag = true
        if (email.trim() == "") {
            setEmailError("Email is not valid")
            flag = false
        }
        if (name.trim() == "") {
            setNameError("Name field is required")
            flag = false
        }
        if (!flag) {
            return
        }
        let data = {
            locations: locations,
            name: name,
            email: email
        }
        console.log("data", data);
    }

    return (
        <AddUserView
            {...props}
            email={email}
            emailError={emailError}
            onEmailChange={(text) => {
                setEmail(text)
                setEmailError("")
            }}
            name={name}
            nameError={nameError}
            onNameChange={(text) => {
                setName(text)
                setNameError("")
            }}
            locations={locations}
            setLocations={(location) => setLocations([...locations, location])}
            removeLocation={(index) => {
                let arr = [...locations]
                arr.splice(index, 1)
                setLocations(arr)
            }}
            submit={submit}
        />
    )
}
