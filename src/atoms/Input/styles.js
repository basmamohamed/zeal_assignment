import { StyleSheet } from 'react-native'
import { calcWidth } from '../../config/metrics'
import AppStyles from '../../config/styles'


export default styles = StyleSheet.create({
    input: {
        color: AppStyles.Color.BLACK,
        fontSize: calcWidth(14),
        paddingHorizontal: calcWidth(15),
        textAlign: "left"
    }
})