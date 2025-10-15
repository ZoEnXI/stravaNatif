import { Button, Text } from '@react-navigation/elements';
import { StyleSheet, View } from 'react-native';
import {useEffect, useState} from "react";
import auth, {FirebaseAuthTypes, getAuth, onAuthStateChanged} from "@react-native-firebase/auth";

export function Home() {

    const [loading, setLoading] = useState<boolean>(true);
    const [user, setUser] = useState<FirebaseAuthTypes.User | null>(null);

    useEffect(() => {
        auth().onAuthStateChanged(userState => {
            setUser(userState);

            if (loading) {
                setLoading(false);
            }
        });
    }, []);

    if (!user) {
        return (
            <View>
                <Text>Login</Text>
            </View>
        );
    }
    return (
        <View style={styles.container}>
            <Text>Home Screen</Text>
            <Text>Open up 'src/App.tsx' to start working on your app!</Text>
            <Button screen="Profile" params={{ user: 'jane' }}>
                Go to Profile
            </Button>
            <Button screen="Settings">Go to Settings</Button>
        </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
  },
});
