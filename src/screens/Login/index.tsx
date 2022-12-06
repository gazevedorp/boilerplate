import React from 'react';
import { View, TextInput, Pressable, Text } from 'react-native';
import styles from './styles';
import useUserState from '../../store/userState';

const Login = () => {
    const { setUser } = useUserState();

    const handleLogin = () => {
        setUser({ token: 'token' });
    };

    return (
        <View style={styles.container}>
            <TextInput style={styles.input} placeholder='user' />
            <TextInput style={styles.input} placeholder='password' />
            <Pressable style={styles.button} onPress={handleLogin}>
                <Text style={styles.buttonText}>Login</Text>
            </Pressable>
        </View>
    );
};

export default Login;
