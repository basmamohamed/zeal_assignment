import React from 'react'
import { StyleProp, TextStyle, LayoutChangeEvent, Animated } from 'react-native'
import AppStyles from '../../config/styles'
import { calcWidth } from '../../config/metrics'
type TextProps = {
    style?: StyleProp<TextStyle>,
    textAlign?: 'auto' | 'left' | 'right' | 'center' | 'justify',
    fontSize: Number,
    color: String,
    numberOfLines: Number,
    onLayout?: (event: LayoutChangeEvent) => void,
    onPress: Function
}
export function Text(params: TextProps) {
    return (
        <Animated.Text
            allowFontScaling={false}
            onPress={params.onPress}
            numberOfLines={params.numberOfLines}
            onLayout={params.onLayout}
            style={[
                {
                    textAlign: params.textAlign,
                    fontSize: calcWidth(params.fontSize),
                    color: params.color
                }, params.style]}>
            {params.children}
        </Animated.Text>
    )
}
Text.defaultProps = {
    style: {},
    textAlign: "left",
    fontSize: 14,
    color: AppStyles.Color.BLACK
};


