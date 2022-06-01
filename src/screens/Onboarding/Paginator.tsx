import { View, Text, StyleSheet, Animated, useWindowDimensions, Dimensions } from 'react-native'
import React from 'react'
import colors from '../../assets/colors';
const { width } = Dimensions.get('window');
export default function Paginator({ data, scrollx }: { data: Array<Object>, scrollx: Animated.Value }) {
    // const { width } = useWindowDimensions();
    return (
        <View style={styles.container}>
            {
                data.map((item, index) => {
                    const inputRange = [(index - 1) * width, index * width, (index + 1) * width]                    
                    const dotWidth = scrollx.interpolate({
                        inputRange,
                        outputRange: [10, 20, 10],
                        extrapolate: 'clamp'
                    });
                    const opacity = scrollx.interpolate({
                        inputRange,
                        outputRange: [0.3, 1, 0.3],
                        extrapolate: 'clamp'
                    });
                    return <Animated.View style={[styles.dot, { width: dotWidth, opacity }]} key={index.toString()} />;
                }
                )
            }
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        width,
        height: 50,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.white,
    },
    dot: {
        height: 10,
        borderRadius: 5,
        backgroundColor: colors.black,
        marginHorizontal: 8
    }
})