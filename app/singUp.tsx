import React from 'react';
import { View, Text, TextInput, Button, StyleSheet, Image, TouchableOpacity } from 'react-native';

export default function LoginScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.welcome}>Welcome to</Text>
        <Text style={styles.teast}>Taste hub</Text>
      </View>
      <Image 
            source={{ uri: 'https://media.istockphoto.com/id/980135854/photo/indian-vegetable-pulav-or-biryani-made-using-basmati-rice-served-in-terracotta-bowl-selective.jpg?s=612x612&w=0&k=20&c=mwoc1YoYRKByayw9KQwl1GeLKHlM1umtd5HQlmMY1kQ=' }} 
        style={styles.image} 
      />
      <Text style={styles.title}>Sign Up</Text>
      <TextInput style={styles.input} placeholder="First Name" />
      <TextInput style={styles.input} placeholder="Last Name" />
      <TextInput style={styles.input} placeholder="E-mail address" />
      <TextInput style={styles.input} placeholder="Enter password" secureTextEntry />
      <TouchableOpacity style={styles.loginButton} onPress={() => {}}>
        <Text style={styles.singupButtonText}>Sign Up</Text>
      </TouchableOpacity>
      <View style={styles.signupContainer}>
        <Text style={styles.signupText}>Do you have an account?</Text>
        <TouchableOpacity  onPress={() => {}}>
          <Text style={styles.loginButtonText}>  Login</Text>
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
    marginTop:40
  },
  teast: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#FFA500', 
    fontFamily: 'Arial', 
  },
  image: {
    width: 377,
    height: 210,
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
    height: 40,
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
  singupButtonText: {
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

  loginButtonText: {
    color: '#FFA500',
    fontSize: 16,
    fontWeight: 'bold',
  },
});