import React, { useState, useEffect, useContext } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, TextInput, ScrollView, Alert } from 'react-native';
import { useRouter } from 'expo-router';
import * as Location from 'expo-location';
import { CartContext } from './cartContext';

export default function AddToCart() {
  const { cartItems, removeFromCart } = useContext(CartContext);
  const router = useRouter();
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [locationText, setLocationText] = useState('');
  const [isFormValid, setIsFormValid] = useState(false);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        Alert.alert('Permission to access location was denied');
        return;
      }
    })();
  }, []);

  useEffect(() => {
    if (name && number && locationText) {
      setIsFormValid(true);
    } else {
      setIsFormValid(false);
    }
  }, [name, number, locationText]);

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const handleCheckout = async () => {
    const orderData = {
      orderDate: new Date().toLocaleDateString(),
      time: new Date().toLocaleTimeString(),
      name,
      address: locationText,
      number,
      orderList: cartItems.map(item => ({
        itemName: item.itemName,
        quantity: item.quantity,
        price: item.price
      })),
      total: calculateTotal().toString() // Convert total to string to match your schema
    };

    try {
      const response = await fetch('http://192.168.8.100:8080/order/save', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(orderData)
      });

      const result = await response.json();
      if (response.status === 200) {
        Alert.alert('Success', 'Order saved successfully');
        // Clear the cart or navigate to another screen
      } else {
        Alert.alert('Error', result.error || 'Error saving order');
      }
    } catch (error) {
      Alert.alert('Error', 'Error saving order');
    }
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
      <TextInput style={styles.orderInstructions} placeholder="Customer Name" value={name} onChangeText={setName} />
      <TextInput style={styles.orderInstructions} placeholder="Mobile Number" value={number} onChangeText={setNumber} />
      <TextInput
        style={styles.orderInstructions}
        placeholder="Location"
        value={locationText}
        onChangeText={text => setLocationText(text)}
      />

      <View style={styles.totalContainer}>
        <Text style={styles.totalText}>Total:</Text>
        <Text style={styles.totalAmount}>LKR {calculateTotal()}.00</Text>
      </View>

      {isFormValid && (
        <TouchableOpacity style={styles.checkoutButton} onPress={handleCheckout}>
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
