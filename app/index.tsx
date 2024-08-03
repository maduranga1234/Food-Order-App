import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Image, TouchableOpacity, Alert } from 'react-native';
import { router } from 'expo-router';
import { auth } from '@/firebaseConfig';
import { signInWithEmailAndPassword } from 'firebase/auth';

export default function LoginScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const signIn = async () => {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      // Retrieve additional user data (e.g., userName and userImage) from your database if needed
      // For simplicity, we'll assume that the user's display name and photo URL are available in the Firebase user object
      const userName = user.displayName || 'User';
      const userImage = user.photoURL || 'default_image_url'; // Replace 'default_image_url' with your default image URL

      Alert.alert('Success', 'User account signed in!');
      router.push({ pathname: 'profile', params: { userId: user.uid, userName, userEmail: user.email, userImage } });
    } catch (error) {
      console.error('Error signing in', error);
      Alert.alert('Error', error.message);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.welcome}>Welcome to</Text>
        <Text style={styles.teast}>Taste Hub</Text>
      </View>
      <Image 
        source={{ uri: 'https://img.freepik.com/free-photo/curry-fried-rice_1339-1817.jpg?ga=GA1.1.1360257794.1717265664' }} 
        style={styles.image} 
      />
      <Text style={styles.title}>Sign In</Text>
      <TextInput 
        style={styles.input} 
        placeholder="E-mail address" 
        value={email}
        onChangeText={setEmail}
      />
      <TextInput 
        style={styles.input} 
        placeholder="Enter password" 
        secureTextEntry 
        value={password}
        onChangeText={setPassword}
      />
      <TouchableOpacity style={styles.loginButton} onPress={signIn}>
        <Text style={styles.loginButtonText}>Login</Text>
      </TouchableOpacity>
      <View style={styles.signupContainer}>
        <Text style={styles.signupText}>Don't have an account?</Text>
        <TouchableOpacity onPress={() => router.push('singUp')}>
          <Text style={styles.signupButtonText}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center', 
    backgroundColor: '#fff',
  },
  headerContainer: {
    marginBottom: 20,
    alignItems: 'center', 
  },
  welcome: {
    fontSize: 38,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#333', 
    fontFamily: 'Arial', 
  },
  teast: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#FFA500', 
    fontFamily: 'Arial', 
  },
  image: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
    marginBottom: 50,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    textAlign: 'center',
    fontWeight: 'bold', 
    color: '#555', 
  },
  input: {
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 10,
    padding: 10,
    borderRadius: 10,
    width: '100%', 
  },
  loginButton: {
    backgroundColor: '#FFA500', 
    padding: 14,
    borderRadius: 16,
    alignItems: 'center',
    marginTop: 20,
    width: '100%', 
  },
  loginButtonText: {
    color: '#fff',
    fontSize: 22,
    fontWeight: 'bold',
  },
  signupContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  signupText: {
    fontSize: 16,
    color: '#666',
  },
  signupButtonText: {
    color: '#FFA500',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
