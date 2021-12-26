import { StyleSheet } from 'react-native'
import { calcHeight, calcWidth } from '../../config/metrics'
import AppStyles from '../../config/styles'

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: AppStyles.Color.WHITE,
        paddingTop: calcHeight(80)
    },
    locationSectionContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        width: "100%",
        paddingHorizontal: calcWidth(20)
    },
    removeButton: {
        width: calcWidth(20),
        height: calcWidth(20),
        borderRadius: calcWidth(10),
        backgroundColor: "red",
        alignItems: "center",
        justifyContent: "center"
    },
    separator: {
        borderBottomWidth: 1,
        borderColor: AppStyles.Color.MED_GRAY,
        paddingBottom: calcHeight(8),
        marginBottom: calcHeight(8)
    }
})
