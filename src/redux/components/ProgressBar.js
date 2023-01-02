import Animated, {
    useAnimatedStyle,
    withTiming,
} from 'react-native-reanimated';
export default ProgressBar = ({ progress = '20' }) => {
    const animatedStyle = useAnimatedStyle(() => ({
        width: withTiming(progress + '%', { duration: 1000 }),
    }));

    return (
        <Animated.View style={animatedStyle} />
    );
}; 