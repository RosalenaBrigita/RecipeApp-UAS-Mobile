import React from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Image } from 'react-native';

const SignIn = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Sign In</Text>
            <Text style={styles.subtitle}>Hi! Welcome back, you've been missed</Text>

            {/* Input Email */}
            <View style={styles.inputContainer}>
                <TextInput 
                    style={styles.input} 
                    placeholder="Email" 
                    placeholderTextColor="#BDBDBD"
                />
            </View>

            {/* Input Password */}
            <View style={styles.inputContainer}>
                <TextInput 
                    style={styles.input} 
                    placeholder="Password" 
                    secureTextEntry 
                    placeholderTextColor="#BDBDBD"
                />
                <TouchableOpacity onPress={() => navigation.replace('NewPassword')}>
                    <Text style={styles.forgotText}>Forgot password?</Text>
                </TouchableOpacity>
            </View>

            {/* Tombol Sign In */}
            <TouchableOpacity style={styles.button} onPress={() => navigation.replace('Recipe')}>
                <Text style={styles.buttonText}>Sign In</Text>
            </TouchableOpacity>

            {/* Alternatif Sign In */}
            <Text style={styles.orText}>or sign in with</Text>
            <View style={styles.socialContainer}>
                {/* Apple Icon */}
                <TouchableOpacity style={styles.socialIcon}>
                    <Image source={require('../images/apple.png')} style={styles.iconImage} />
                </TouchableOpacity>
                {/* Facebook */}
                <TouchableOpacity style={styles.socialIcon}>
                    <Image source={require('../images/facebook.png')} style={styles.iconImage} />
                </TouchableOpacity>
                {/* Google */}
                <TouchableOpacity style={styles.socialIcon}>
                    <Image source={require('../images/gmail.png')} style={styles.iconImage} />
                </TouchableOpacity>
            </View>

            {/* Sign Up Prompt */}
            <Text style={styles.signUpText}>
                Don't have an account? <Text style={styles.signUpLink} onPress={() => navigation.replace('CreateAccount')}>Sign Up</Text>
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
        fontSize: 30, 
        fontWeight: 'bold', 
        marginBottom: 10, 
        textAlign: 'center',
    },
    subtitle: { 
        fontSize: 17, 
        color: '#888888', 
        marginBottom: 30, 
        textAlign: 'center',
    },
    inputContainer: {
        marginBottom: 15,
    },
    input: {
        backgroundColor: '#F6F6F6',
        borderRadius: 10,
        padding: 12,
        fontSize: 15,
        color: '#333333',
    },
    forgotText: {
        color: '#FF7F50',
        fontSize: 14,
        textAlign: 'right',
        marginTop: 5,
    },
    button: {
        backgroundColor: '#FF7F50',
        padding: 15,
        borderRadius: 10,
        alignItems: 'center',
        marginTop: 20,
    },
    buttonText: {
        color: '#FFFFFF',
        fontSize: 16,
        fontWeight: 'bold',
    },
    orText: {
        textAlign: 'center',
        marginVertical: 15,
        marginBottom: 20,
        color: '#888888',
    },
    socialContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,
        gap: 20,
    },
    socialIcon: {
        backgroundColor: '#F6F6F6',
        padding: 12,
        borderRadius: 50,
        alignItems: 'center',
        width: 50,
        height: 50,
        justifyContent: 'center',
    },
    iconImage: {
        width: 25,
        height: 25,
        resizeMode: 'contain',
    },
    signUpText: {
        textAlign: 'center',
        color: '#888888',
        justifyContent: 'center',
        alignItems: 'center',

    },
    signUpLink: {
        color: '#FF7F50',
        fontWeight: 'bold',
    },
});

export default SignIn;
