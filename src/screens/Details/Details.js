import React from 'react'
import { FlatList, View, Image } from 'react-native'
import { styles } from './styles'
import { Button, Text } from '../../atoms'
import Data from '../../config/data.json'
import { LocationCard } from '../../components/LocationCard'
import NavigationService from '../../navigation/NavigationService'

export default DetailsView = (props) => {

    const { item } = props.route.params

    const renderUser = () => {
        return (
            <View style={styles.userContainer}>
                <View style={styles.infoContainer}>
                    <Text fontSize={18}>{item.name}</Text>
                    <Text>{item.email}</Text>
                </View>
                <Image style={styles.imageStyle} source={require("../../config/PNGS/avatar.jpg")} />
            </View>
        )
    }

    return (
        <View style={styles.container}>
            <Text>Details</Text>
            {renderUser()}
            <View style={styles.locationSectionContainer}>
            <Text>Locations</Text>
            <Button
            onPress={()=>NavigationService.navigate("AddLocation")}
                text="Add"
                strokeButton
            />
            </View>
            <FlatList
                data={Data}
                showsVerticalScrollIndicator={false}
                renderItem={({ item, index }) => {
                    return (
                        <LocationCard
                            item={item} 
                            deleteLocation={props.deleteLocation(item.id)}
                            />
                    )
                }}
            />
        </View>
    )
}
