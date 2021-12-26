import React, { useState } from 'react'
import AddLocationView from './AddLocation'
import NavigationService from '../../navigation/NavigationService'

export default AddLocation = (props) => {
    const [lat, setLat] = useState("")
    const [latError, setLatError] = useState("")
    const [lng, setLng] = useState("")
    const [lngError, setLngError] = useState("")

    const { onSubmit } = props.route.params

    const submit = () => {
        let flag = true
        if (lat.trim() == "") {
            setLatError("Lat field is required")
            flag = false
        }
        if (lng.trim() == "") {
            setLngError("Password field is required")
            flag = false
        }
        if (!flag) {
            return
        }
        onSubmit({ lat: lat, lng: lng })
        NavigationService.goBack()
    }

    return (
        <AddLocationView
            {...props}
            lat={lat}
            latError={latError}
            onLatChange={(text) => {
                setLat(text)
                setLatError("")
            }}
            lng={lng}
            lngError={lngError}
            onLngChange={(text) => {
                setLng(text)
                setLngError("")
            }}
            submit={submit}
        />
    )
}
