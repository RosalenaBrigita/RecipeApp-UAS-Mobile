import React from 'react';
import { View, Text, Image, TextInput, StyleSheet, TouchableOpacity } from 'react-native';

const CreateAccount = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Create Account</Text>
            <Text style={styles.subtitle}>
                Fill your information below or register with your social account
            </Text>

            {/* Input Fields */}
            <TextInput style={styles.input} placeholder="Name" placeholderTextColor="#BDBDBD" />
            <TextInput style={styles.input} placeholder="Email" placeholderTextColor="#BDBDBD" />
            <TextInput 
                style={styles.input} 
                placeholder="Password" 
                secureTextEntry 
                placeholderTextColor="#BDBDBD" 
            />

            {/* Sign Up Button */}
            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Sign Up</Text>
            </TouchableOpacity>

            {/* Or Divider */}
            <Text style={styles.orText}>or sign up with</Text>

            {/* Social Media Icons */}
            <View style={styles.socialContainer}>
                <TouchableOpacity style={styles.socialIcon}>
                    <Image source={require('../images/apple.png')} style={styles.iconImage} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.socialIcon}>
                    <Image source={require('../images/facebook.png')} style={styles.iconImage} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.socialIcon}>
                    <Image source={require('../images/gmail.png')} style={styles.iconImage} />
                </TouchableOpacity>
            </View>

            {/* Sign In Prompt */}
            <Text style={styles.signInText}>
                Already have an account?{' '}
                <Text style={styles.signInLink} onPress={() => navigation.replace('SignIn')}>
                    Sign In
                </Text>
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: { 
        flex: 1, 
        padding: 20, 
        backgroundColor: '#FFFFFF', 
        top: 40,
    },
    title: { 
        fontSize: 28, 
        fontWeight: 'bold', 
        marginBottom: 10, 
        textAlign: 'center',
    },
    subtitle: { 
        fontSize: 16, 
        color: '#888888', 
        textAlign: 'center',
        marginBottom: 25,
    },
    input: {
        backgroundColor: '#F6F6F6',
        borderRadius: 10,
        padding: 12,
        fontSize: 15,
        marginBottom: 15,
        color: '#333333',
    },
    button: {
        backgroundColor: '#FF7F50',
        padding: 15,
        borderRadius: 10,
        alignItems: 'center',
        marginVertical: 10,
    },
    buttonText: {
        color: '#FFFFFF',
        fontSize: 16,
        fontWeight: 'bold',
    },
    orText: {
        textAlign: 'center',
        marginVertical: 20,
        color: '#888888',
    },
    socialContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 10, // Mengatur jarak antar ikon
        marginBottom: 20,
    },
    socialIcon: {
        backgroundColor: '#F6F6F6',
        padding: 12,
        borderRadius: 50,
        width: 50,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
    },
    iconImage: {
        width: 24,
        height: 24,
        resizeMode: 'contain',
    },
    signInText: {
        textAlign: 'center',
        color: '#888888',
        fontSize: 14,
    },
    signInLink: {
        color: '#FF7F50',
        fontWeight: 'bold',
    },
});

export default CreateAccount;
