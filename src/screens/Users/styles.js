import { StyleSheet } from 'react-native'
import { calcHeight, calcWidth } from '../../config/metrics'
import AppStyles from '../../config/styles'

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:AppStyles.Color.WHITE,
        paddingTop:calcHeight(80),
        paddingHorizontal:calcWidth(12)
    },
    infoContainer:{
        width:calcWidth(100),
         flexDirection:"row",
         alignItems:"center",
         justifyContent:"space-between"
        }
})
