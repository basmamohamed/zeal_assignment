import React from 'react'
import { TouchableOpacity, View } from 'react-native'
import { Text, Button } from '../../atoms'
import AppStyles from '../../config/styles'
import { styles } from './styles'

export const UserCard = (props) => {
    const { item, onItemPress, onEditPress } = props

    return (
        <TouchableOpacity activeOpacity={0.9} onPress={onItemPress} style={styles.container}>
            <Text color={AppStyles.Color.MED_GRAY}>{item.name}</Text>
            <Text color={AppStyles.Color.MED_GRAY} fontSize={11}>{item.email}</Text>
            <View style={styles.ButtonContainer}>
                <Button
                    onPress={onEditPress}
                    text="Edit"
                    strokeButton
                />
                <Button
                    text="Delete"
                    strokeButton
                />
            </View>
        </TouchableOpacity>
    )
}