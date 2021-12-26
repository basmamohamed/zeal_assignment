import React from 'react'
import { styles } from './styles'
import { Text, Button } from '../../atoms'
import { TextInput } from '../../components/TextInput'
import { calcHeight } from '../../config/metrics'
import { View } from 'react-native'

export default AddLocationView = (props) => {

    return (
        <View
            style={styles.container}
        >
            <Text style={{ fontWeight: "bold", marginBottom: calcHeight(30) }} fontSize={22} textAlign="center">Add location</Text>
            <TextInput
                keyboardType="numeric"
                placeholder="Lat"
                value={props.lat}
                onChangeText={props.onLatChange}
                error={props.latError}
            />
            <TextInput
                keyboardType="numeric"
                placeholder="Lng"
                value={props.lng}
                onChangeText={props.onLngChange}
                error={props.lngError}
                style={{ marginTop: calcHeight(40) }}
            />
            <Button
                onPress={props.submit}
                text="Submit"
                default
                style={{ position: "absolute", bottom: calcHeight(50) }}
            />
        </View>
    )
}
