import { StyleSheet } from 'react-native'
import { calcHeight, calcWidth } from '../../config/metrics'
import AppStyles from '../../config/styles'

export const styles = StyleSheet.create({
    textStyle: {
        maxWidth: calcWidth(300)
    },
    buttonStyle: {
        width: calcWidth(300),
        backgroundColor: AppStyles.Color.AppColor,
        height: calcHeight(58),
        borderRadius: calcWidth(5),
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
        borderColor:AppStyles.Color.MED_GRAY,
        borderWidth:1
    },
    strokeButton: {
        backgroundColor: "transparent",
        borderWidth: 1,
        borderColor: AppStyles.Color.BLACK,
        height: calcHeight(40),
        width: calcWidth(90),
        alignItems: "center",
        justifyContent: "center",
    }
})