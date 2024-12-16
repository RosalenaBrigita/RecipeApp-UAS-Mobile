import React, { useEffect } from "react";
import { View, Image, StyleSheet, Animated, Easing } from "react-native";

const SplashScreen = ({ navigation }) => {
    const opacity = new Animated.Value(0); // Menggunakan Animated.Value untuk opacity

    useEffect(() => {
        const animate = () => {
            Animated.sequence([
                // Animasi gelap ke terang
                Animated.timing(opacity, {
                    toValue: 1, // Menerang
                    duration: 2000, // Durasi 2 detik
                    easing: Easing.ease, // Easing
                    useNativeDriver: true, // Menggunakan native driver untuk performa
                }),
                // Animasi terang ke gelap
                Animated.timing(opacity, {
                    toValue: 0, // Meredup
                    duration: 2000, // Durasi 2 detik
                    easing: Easing.ease, // Easing
                    useNativeDriver: true, // Menggunakan native driver untuk performa
                }),
            ]).start(() => {
                navigation.replace('OnboardingScreen'); // Navigasi setelah animasi selesai
            });
        };

        animate(); // Memanggil fungsi animate
    }, [opacity, navigation]);

    return (
        <View style={styles.container}>
            <Animated.Image
                source={require('../images/splashscreen.webp')}
                style={{
                    width: 300,
                    height: 300,
                    opacity: opacity, // Menggunakan nilai animated untuk opacity
                    justifyContent: 'center',
                    alignItems: 'center',
                    padding: 20,
                }}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#febe5f',
    },
});

export default SplashScreen;
