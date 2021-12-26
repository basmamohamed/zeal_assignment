import React from 'react'
import { FlatList, View } from 'react-native'
import { styles } from './styles'
import { Text } from '../../atoms'
import Data from '../../config/data.json'
import { UserCard } from '../../components/userCard'
import { calcHeight } from '../../config/metrics'
import NavigationService from '../../navigation/NavigationService'

export default UsersView = (props) => {

    const renderInfo = (title, count) => {
        return (
            <View style={styles.infoContainer}>
                <Text># {title}</Text>
                <Text>{count}</Text>
            </View>
        )
    }

    return (
        <View style={styles.container}>
            <View style={{ alignItems: "flex-end", marginBottom: calcHeight(15) }}>
                {renderInfo("Locations", Data.length)}
                {renderInfo("Users", Data.length)}
            </View>
            <FlatList
                data={Data}
                showsVerticalScrollIndicator={false}
                renderItem={({ item, index }) => {
                    return (
                        <UserCard
                            delete={props.delete(item)}
                            onItemPress={() => NavigationService.navigate("Details", { item: item })}
                            item={item}
                            onEditPress={() => NavigationService.navigate("AddUser", { user: item })}
                        />
                    )
                }}
            />
        </View>
    )
}
