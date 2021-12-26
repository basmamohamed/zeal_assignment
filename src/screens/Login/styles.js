import { StyleSheet } from 'react-native'
import { calcHeight } from '../../config/metrics'
import AppStyles from '../../config/styles'

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:AppStyles.Color.WHITE,
        paddingTop:calcHeight(80)
    },
})
