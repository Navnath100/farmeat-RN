import { View, Text, FlatList, StyleSheet, Animated, Dimensions, Image } from 'react-native'
import React, { useState, useRef, useCallback } from 'react'
import colors from '../../assets/colors'
import screensArray from './screensArray'
import Paginator from './Paginator'
import OnboardingScreen from './OnboardingScreen'
import LoginButton from './LoginButton'

const { width, height } = Dimensions.get('window');
export default function Index({ navigation }: { navigation: any }) {
    const [currentIndex, setCurrentIndex] = useState(0)
    const scrollx = useRef(new Animated.Value(0)).current;
    const slideRef = useRef(null);

    const viewConfig = useRef({
        viewAreaCoveragePercentThreshold: 50, waitForInteraction: true,
        minimumViewTime: 5
    }).current
    const onViewableItemsChanged = React.useRef(({ viewableItems, changed }: { viewableItems: any, changed: any }) => {
        if (changed && changed.length > 0) {
            setCurrentIndex(changed[0].index);
        }
    })
    console.log(currentIndex);

    return (
        <View style={styles.container}>
            <Image
                style={styles.img}
                source={screensArray[currentIndex].img}
                resizeMethod={'resize'}

            />
            <View style={styles.footer}>
                <FlatList
                    data={screensArray}
                    renderItem={({ item }) => <OnboardingScreen item={item} />}
                    keyExtractor={(_, index) => index.toString()}
                    showsHorizontalScrollIndicator={false}
                    horizontal
                    pagingEnabled
                    bounces={false}
                    onScroll={Animated.event([{ nativeEvent: { contentOffset: { x: scrollx } } }], {
                        useNativeDriver: false
                    })}
                    scrollEventThrottle={32}
                    onViewableItemsChanged={onViewableItemsChanged.current}
                    viewabilityConfig={viewConfig}
                    ref={slideRef}
                />
            </View>
            <Paginator data={screensArray} scrollx={scrollx} />
            <LoginButton navigation={navigation} currentIndex={currentIndex} />
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 3,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'green'
    },
    footer: {
        width,
        height: (height / 100) * 30,
        backgroundColor: colors.white,
        borderTopEndRadius: 30,
        borderTopStartRadius: 30,
        padding: 20,
    },
    img: {
        width,
        height: (height / 100) * 50,
        aspectRatio: 1,
    },
})