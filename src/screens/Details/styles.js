import { StyleSheet } from 'react-native'
import { calcHeight, calcWidth } from '../../config/metrics'
import AppStyles from '../../config/styles'

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: AppStyles.Color.WHITE,
        paddingTop: calcHeight(80),
        paddingHorizontal: calcWidth(12)
    },
    userContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        borderWidth: 1,
        borderColor: AppStyles.Color.MED_GRAY,
        paddingHorizontal: calcWidth(20),
        paddingVertical: calcHeight(10),
        borderRadius: calcWidth(10),
        marginTop: calcHeight(15),
        marginRight: calcWidth(40)
    },
    imageStyle: {
        width: calcWidth(60),
        height: calcWidth(60),
        borderRadius: calcWidth(30)
    },
    locationSectionContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginTop: calcHeight(30)
    }
})
