import { View, Image, StyleSheet, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { router } from 'expo-router';

export default function Index() {
  return (
    <View style={styles.container}>
      <Image 
        source={{ uri: 'https://img.freepik.com/free-photo/pasta-with-zucchini-sweet-peppers-with-basil-garlic-dressing_2829-17952.jpg?ga=GA1.1.1360257794.1717265664&semt=ais_user' }} 
        style={styles.image} 
      />
      <Text style={styles.enjoy}>Enjoy</Text>
      <Text style={styles.food}>Your Food</Text>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText} onPress={() => router.push('/home')}>Get Start</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFA500'
  },
  image: {
    width: 260,
    height: 260,
    borderRadius: 130,
  },
  enjoy: {
    fontSize: 45,
    color: 'white',
    fontWeight: 'bold', 
    marginTop: 30,
  },
  food: {
    fontSize: 45,
    color: 'white',
   
    fontWeight: 'bold',
  },
  button: {
     marginTop:40,
    backgroundColor: 'white',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 16,
    width:240,
   
  },
  buttonText: {
    fontSize: 26,
    color: '#FFA500',
    fontWeight: 'bold',
     textAlign:'center'
  }
})
