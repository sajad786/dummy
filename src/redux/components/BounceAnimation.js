import { View, Text, StyleSheet , Image} from 'react-native'
import React from 'react'
import Animated, {
    useAnimatedStyle,
    withRepeat,
    withSequence,
    withTiming,
} from 'react-native-reanimated';

const BounceAnimation = ({
    glowContainer = {},
    imageUri = {},
    text = {},
    textStyle={},
    imageStyle={},
    isImage
}) => {
    const glowAnimation = useAnimatedStyle(() => ({
        transform: [
            {
                scale: withRepeat(
                    withSequence(
                        withTiming(1.2, { duration: 1500 }),
                        withTiming(1.6, { duration: 1500 })
                    ),
                    -1,
                    true
                ),
            },
        ],
    }));
    return (
        <>
            <Animated.View style={[styles.glowContainer, glowAnimation, glowContainer]}>
                {!!imageUri && isImage && <Image
                    source={imageUri}
                    style={{...styles.image, ...imageStyle}}
                />}
                {!!text && <Text style={{...textStyle, ...styles.textStyle}} > {text}</Text>}
            </Animated.View>
        </>
    )
}

const styles = StyleSheet.create({
    glowContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        // position: 'absolute',
        // top: 8,
        // bottom: 0,
        // left: 0,
        // right: 4,
    },
    textStyle:{
        fontSize:24,
        color:'red'
    },
    image:{
        height:40,
        width:40
    }
})

export default BounceAnimation