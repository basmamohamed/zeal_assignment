import React from 'react'
import { FlatList, TouchableOpacity, View } from 'react-native'
import { styles } from './styles'
import { Text, Button } from '../../atoms'
import { TextInput } from '../../components/TextInput'
import { calcHeight, calcWidth } from '../../config/metrics'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import AppStyles from '../../config/styles'
import NavigationService from '../../navigation/NavigationService'
import { LocationCard } from '../../components/LocationCard'

export default AddUserView = (props) => {

    const { user } = props.route.params

    return (
        <KeyboardAwareScrollView
            style={styles.container}
            contentContainerStyle={{ paddingBottom: calcHeight(40), alignItems: "center" }}
        >
            <Text style={{ marginBottom: calcHeight(22) }} fontSize={22} textAlign="center">{user ? "Edit " + user.name : "Add user"}</Text>
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
            <View style={[styles.locationSectionContainer, { marginTop: calcHeight(30),marginBottom:calcHeight(10) }]}>
                <Text>Locations</Text>
                <Button
                    onPress={() => NavigationService.navigate("AddLocation", { onSubmit: props.setLocations })}
                    text="Add"
                    strokeButton
                />
            </View>
            <FlatList
                data={props.locations}
                showsVerticalScrollIndicator={false}
                ItemSeparatorComponent={()=><View style={styles.separator}/>}
                renderItem={({ item, index }) => {
                    return (
                        <View style={[styles.locationSectionContainer,{width:calcWidth(350)}]}>
                            <View>
                                <Text>{`lat: ${item.lat}`}</Text>
                                <Text>{`lng: ${item.lng}`}</Text>
                            </View>
                            <TouchableOpacity onPress={()=>props.removeLocation(index)} style={styles.removeButton}>
                                <Text color={"#fff"}>-</Text>
                            </TouchableOpacity>
                        </View>
                    )
                }}
            />
            <Button
                onPress={props.submit}
                text="Submit"
                default
                style={{ marginTop: calcHeight(50), marginBottom: calcHeight(10) }}
            />
        </KeyboardAwareScrollView>
    )
}
