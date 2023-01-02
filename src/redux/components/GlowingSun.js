import { StyleSheet, Image,Text  } from 'react-native';
import Animated, {
    useAnimatedStyle,
    withRepeat,
    withSequence,
    withTiming,
} from 'react-native-reanimated';
import React from 'react'
const styles = StyleSheet.create({
    glowContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        top: 8,
        bottom: 0,
        left: 0,
        right: 4,
    },

});

export default   GlowingSun = () => {
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
            <Animated.View style={[styles.glowContainer, glowAnimation]}>
                {/* <Image
	            source={{uri:'https://w7.pngwing.com/pngs/16/608/png-transparent-sun-the-sun-sunscreen-light-sphere-sun-image-file-formats-orange-sphere-thumbnail.png'}}
	            // source={{uri:'https://st2.depositphotos.com/4286419/9617/v/600/depositphotos_96175302-stock-illustration-solar-eclipse-moon.jpg'}}
	            style={{height:80, width:80, borderRadius:40}}
		 /> */}
         <Text style={{fontSize:24, fontWeight:'800', color:'red'}} > Subscribe Now</Text>
            </Animated.View>
            {/* <Image source={require('./image.png')} style={styles.image} /> */}
        </>
    );
}; 

