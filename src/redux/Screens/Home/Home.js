import { View, Text, Button, SafeAreaView, StyleSheet } from 'react-native'
import React from 'react'
import Animated, { useSharedValue, useAnimatedStyle } from 'react-native-reanimated';
// import { useSelector, useDispatch } from 'react-redux'
// import { decrement, increment } from '../../reducers/counter'


const Home = () => {
    const offset = useSharedValue(0);

    const animatedStyles = useAnimatedStyle(() => {
        return {
          transform: [{ translateX: offset.value * 255 }],
        };
      });

    //   const animatedStyle = useAnimatedStyle(() => ({
    //     opacity: withDelay(
    //          2000 * Math.random(),
    //          withRepeat(
    //              withSequence(
    //                  withTiming(0.4, { duration: 1000 }), 
    //                  withTiming(1, { duration: 1000 })
    //              ),
    //              -1,
    //              true,
    //          ),
    //     ),
    //  }))

    // const count = useSelector((state) => state)
    // console.log(count,"count+++++++")
    // const dispatch = useDispatch()
  return (
    <SafeAreaView style={{padding:24}} >
        <Animated.View style={[styles.box, animatedStyles]} />
     <View style={{marginTop:30}}>
     <Button onPress={() => (offset.value = Math.random())} title="Move" />
     </View>
     
    </SafeAreaView>
  ) 
}

const styles = StyleSheet.create({
    box:{
        height:60,
        width:60,
        backgroundColor:'blue'
    }
})

export default Home