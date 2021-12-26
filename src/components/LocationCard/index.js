import React from 'react'
import { TouchableOpacity, View } from 'react-native'
import { Text, Button } from '../../atoms'
import AppStyles from '../../config/styles'
import { styles } from './styles'

export const LocationCard = (props) => {
    const { item, deleteLocation } = props

    return (
        <View style={styles.container}>
            <View style={styles.ButtonContainer}>
                <View>
                    <Text color={AppStyles.Color.MED_GRAY}>{item.name}</Text>
                    <Text color={AppStyles.Color.MED_GRAY} fontSize={11}>{item.email}</Text>
                </View>
                <Button
                    onPress={deleteLocation}
                    text="Delete"
                    strokeButton
                />
            </View>
        </View>
    )
}