import { StyleSheet } from 'react-native'
import { calcHeight, calcWidth } from '../../config/metrics'
import AppStyles from '../../config/styles'

export default styles = StyleSheet.create({
    container: {
        width: calcWidth(320),
        marginTop: calcHeight(10)
    },
    errorText: {
        marginTop: calcHeight(5),
        width: "100%",
        textAlign: "left"
    },
    showPasswordButton: {
        position: "absolute",
        right: calcWidth(15),
    },
    input: {
        borderWidth: 0,
        width: "100%",
        backgroundColor: "transparent",
        fontSize:calcWidth(18)
    },
    inputViewContainer: {
        paddingHorizontal: calcWidth(5),
        justifyContent: "space-between",
        alignItems: "center",
        flexDirection: "row",
        borderWidth: 1,
        borderColor: AppStyles.Color.MED_GRAY,
        borderRadius: calcWidth(10),
        marginTop:calcHeight(8)
    },
    label: { paddingBottom: calcHeight(10) }
})