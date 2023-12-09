import React, { useState } from "react";
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

const Login = ({ navigation }) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = () => {
        // Implement your login logic here

        // After successful login, navigate to the Dashboard screen
        navigation.navigate("Dashboard");
    };

    return (
        <View style={styles.container}>
            <View style={styles.imageContainer}></View>
            <Image source={require('../assets/indomie.png')} style={styles.image} />
            <Text style={styles.title}>WARMINDO INSPIRASI INDONESIA</Text>
            <TextInput
                style={styles.input}
                placeholder="Username"
                onChangeText={(text) => setUsername(text)}
            />
            <TextInput
                style={styles.input}
                placeholder="Password"
                secureTextEntry
                onChangeText={(text) => setPassword(text)}
            />
            <TouchableOpacity style={styles.button} onPress={handleLogin}>
                <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#D80032",
        marginTop: 10,
        bottom: 60,
    },

    title: {
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 20,
        color: "#F0DE36",
    },
    input: {
        height: 40,
        width: "80%",
        borderColor: "gray",
        borderWidth: 1,
        marginBottom: 10,
        padding: 10,
        borderRadius: 5,
        backgroundColor: "#fff",
    },
    button: {
        backgroundColor: "#17B978",
        padding: 10,
        borderRadius: 5,
    },
    buttonText: {
        color: "#fff",
        textAlign: "center",
        fontWeight: "bold",
    },
    image: {
        width: 300,
        height: 300,
        marginBottom: 0,
    },
    imageContainer: {
        // Add styles for your image container if needed
    },
});

export default Login;
