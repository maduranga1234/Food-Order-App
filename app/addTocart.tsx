import React, { useState, useEffect, useContext } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, TextInput, ScrollView, Alert } from 'react-native';
import { useRouter } from 'expo-router';
import * as Location from 'expo-location';
import { CartContext } from './cartContext';

export default function AddToCart() {
  const { cartItems, removeFromCart } = useContext(CartContext); // Use the CartContext
  const router = useRouter();
  const [location, setLocation] = useState('');
  const [locationText, setLocationText] = useState('');

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        Alert.alert('Permission to access location was denied');
        return;
      }
    })();
  }, []);

  const getCurrentLocation = async () => {
    let location = await Location.getCurrentPositionAsync({});
    setLocation(`${location.coords.latitude}, ${location.coords.longitude}`);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.headerText}>{cartItems.length} item(s) in cart</Text>
      {cartItems.map((item, index) => (
        <View key={index} style={styles.cartItem}>
          <Image source={{ uri: item.itemImage }} style={styles.cartItemImage} />
          <View style={styles.cartItemDetails}>
            <Text style={styles.cartItemName}>{item.itemName}</Text>
            <Text style={styles.cartItemPrice}>LKR {item.price}.00</Text>
            <View style={styles.quantityContainer}>
              <Text style={styles.quantityLabel}>Quantity</Text>
              <Text style={styles.quantityText}>{item.quantity}</Text>
            </View>
          </View>
          <TouchableOpacity style={styles.removeItemButton} onPress={() => removeFromCart(item.itemName)}>
            <Text style={styles.removeItemButtonText}>X</Text>
          </TouchableOpacity>
        </View>
      ))}
      <TextInput style={styles.orderInstructions} placeholder="Customer Name" />
      <TextInput style={styles.orderInstructions} placeholder="Mobile Number" />
      <TextInput
        style={styles.orderInstructions}
        placeholder="Location"
        value={locationText}
        onChangeText={text => setLocationText(text)}
      />
      <TouchableOpacity style={styles.locationButton} onPress={getCurrentLocation}>
        <Text style={styles.locationButtonText}>Use Current Location</Text>
      </TouchableOpacity>
      <View style={styles.totalContainer}>
        <Text style={styles.totalText}>Total:</Text>
        <Text style={styles.totalAmount}>LKR {cartItems.reduce((total, item) => total + item.price * item.quantity, 0)}.00</Text>
      </View>

      {cartItems.length > 0 && (
        <TouchableOpacity style={styles.checkoutButton}>
          <Text style={styles.checkoutButtonText}>Checkout</Text>
        </TouchableOpacity>
      )}

      <TouchableOpacity style={styles.backToMenuButton} onPress={() => router.push('/home')}>
        <Text style={styles.backToMenuButtonText}>Back to Home</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#f5f5f5',
    padding: 20,
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  cartItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 10,
    elevation: 2,
  },
  cartItemImage: {
    width: 80,
    height: 80,
    borderRadius: 10,
    marginRight: 10,
  },
  cartItemDetails: {
    flex: 1,
  },
  cartItemName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  cartItemPrice: {
    fontSize: 16,
    color: '#666',
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  quantityLabel: {
    fontSize: 16,
    color: '#666',
    marginRight: 5,
  },
  quantityText: {
    fontSize: 16,
    fontWeight: 'bold',
    marginHorizontal: 10,
  },
  removeItemButton: {
    padding: 10,
    backgroundColor: '#f44336',
    borderRadius: 5,
  },
  removeItemButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  orderInstructions: {
    marginTop: 20,
    padding: 15,
    backgroundColor: '#fff',
    borderRadius: 10,
    elevation: 2,
  },
  locationButton: {
    marginTop: 10,
    backgroundColor: 'blue',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  locationButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  totalContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  totalText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  totalAmount: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  checkoutButton: {
    marginTop: 20,
    backgroundColor: 'orange',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  checkoutButtonText: {
    fontSize: 18,
    color: '#fff',
  },
  backToMenuButton: {
    marginTop: 10,
    alignItems: 'center',
  },
  backToMenuButtonText: {
    fontSize: 16,
    color: 'orange',
  },
});
