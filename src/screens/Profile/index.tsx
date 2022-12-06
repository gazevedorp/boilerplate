import React from 'react';
import { View, Text, Pressable } from 'react-native';
import styles from './styles';
import useUserState from '../../store/userState';

const Profile = () => {
    const { removeUser } = useUserState();

    const handleLogout = () => {
        removeUser();
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Profile</Text>
            <Pressable style={styles.button} onPress={handleLogout}>
                <Text style={styles.buttonText}>Logout</Text>
            </Pressable>
        </View>
    );
};

export default Profile;
