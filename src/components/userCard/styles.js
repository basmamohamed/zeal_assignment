import {StyleSheet} from 'react-native'
import { calcHeight, calcWidth } from '../../config/metrics'
import AppStyles from '../../config/styles'

export const styles = StyleSheet.create({
    container:{
        borderWidth:1,
        borderColor:AppStyles.Color.MED_GRAY,
        padding:calcWidth(10),
        marginVertical:calcHeight(12),
    },
    ButtonContainer:{
        flexDirection:"row",
        alignItems:"center",
        alignSelf:"flex-end"
    }
})