import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

const OnboardingScreen = ({ navigation }) => {
    const [currentPage, setCurrentPage] = useState(0);

    // Data untuk setiap slide onboarding
    const pages = [
        {
            title: "Learning How to Cook Made Easier",
            description: "Learn how to cook different kinds of delicious meal in few minutes.",
            image: require('../images/1.webp'),
        },
        {
            title: "Search For Any Food and Watch Video",
            description: "Search for meal you want to cook, watch tutorial videos in any language of your choice.",
            image: require('../images/2.jpg'),
        },
        {
            title: "Yummy! Happy Cooking!",
            description: "Happy cooking and Enjoy your meal.",
            image: require('../images/3.png'),
        },
    ];

    const handleNext = () => {
        if (currentPage < pages.length - 1) {
            setCurrentPage(currentPage + 1);
        } else {
            navigation.replace('SignIn'); // Navigasi ke Home setelah onboarding selesai
        }
    };

    const handleBack = () => {
        if (currentPage > 0) setCurrentPage(currentPage - 1);
    };

    return (
        <View style={styles.container}>
            <Image source={pages[currentPage].image} style={styles.image} />
            <Text style={styles.title}>{pages[currentPage].title}</Text>
            <Text style={styles.description}>{pages[currentPage].description}</Text>
            
            <View style={styles.pagination}>
                {pages.map((_, index) => (
                    <View
                        key={index}
                        style={[
                            styles.dot,
                            { backgroundColor: index === currentPage ? '#FF7F50' : '#CCCCCC' },
                        ]}
                    />
                ))}
            </View>

            <View style={styles.buttonContainer}>
                {currentPage === 0 ? (
                    // Tombol Skip di halaman pertama
                    <TouchableOpacity onPress={() => navigation.replace('SignIn')}>
                        <Text style={styles.skipButton}>Skip</Text>
                    </TouchableOpacity>
                ) : (
                    // Tombol Back di halaman kedua dan ketiga
                    <TouchableOpacity onPress={handleBack}>
                        <Text style={styles.skipButton}>Back</Text>
                    </TouchableOpacity>
                )}

                <TouchableOpacity onPress={handleNext}>
                    <View style={styles.nextButton}>
                        <Text style={styles.nextButtonText}>
                            {currentPage === pages.length - 1 ? 'Get Started' : 'Next'}
                        </Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF', // Background putih
        alignItems: 'center',
        padding: 20,
    },
    image: {
        width: 500,
        height: 500,
        resizeMode: 'contain',
    },
    title: {
        fontSize: 22,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#333333',
    },
    description: {
        fontSize: 16,
        textAlign: 'center',
        color: '#555555',
        marginTop: 10,
        paddingHorizontal: 10,
    },
    pagination: {
        flexDirection: 'row',
        marginTop: 25,
    },
    dot: {
        width: 10,
        height: 10,
        borderRadius: 5,
        marginHorizontal: 5,
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        position: 'absolute',
        bottom: 40,
    },
    skipButton: {
        color: '#FF7F50',
        fontSize: 16,
    },
    nextButton: {
        backgroundColor: '#FF7F50',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
    },
    nextButtonText: {
        color: '#FFFFFF',
        fontSize: 16,
        fontWeight: 'bold',
    },
});

export default OnboardingScreen;
