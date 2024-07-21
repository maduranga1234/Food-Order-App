import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { Rating } from 'react-native-elements';
import { router, useLocalSearchParams } from 'expo-router';

export default function Details() {
  const { itemImage, itemCategory, itemName, price } = useLocalSearchParams();
  const [quantity, setQuantity] = useState(1);
  const [totalPrice, setTotalPrice] = useState(price);

  const plusQuantity = () => {
    const newQuantity = quantity + 1;
    setQuantity(newQuantity);
    setTotalPrice(newQuantity * price);
  };

  const minusQuantity = () => {
    if (quantity > 1) {
      const newQuantity = quantity - 1;
      setQuantity(newQuantity);
      setTotalPrice(newQuantity * price);
    }
  };

  const addToCartClick=()=>{
    router.push({
      pathname: 'addTocart',
      params: {
        itemImage: itemImage,
        itemCategory: itemCategory,
        itemName: itemName,
        totalPrice: totalPrice,
        price:price,
        quantity: quantity

      }
    });
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={{ uri: itemImage }} style={styles.image} />
      </View>
      <View style={styles.detailsContainer}>
        <Text style={styles.title}>{itemName}</Text>
        <View style={styles.quantityContainer}>
          <TouchableOpacity onPress={minusQuantity} style={styles.quantityButton}>
            <Text style={styles.quantityButtonText}>-</Text>
          </TouchableOpacity>
          <Text style={styles.quantityText}>{quantity}</Text>
          <TouchableOpacity onPress={plusQuantity} style={styles.quantityButton}>
            <Text style={styles.quantityButtonText}>+</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.subtitle}>{itemCategory}</Text>
        <View style={styles.ratingContainer}>
          <Rating imageSize={20} readonly startingValue={4.5} />
        </View>
        <Text style={styles.description}>
          Healthy lamb salad made with our own Chef Recipe, perfect for those who want a tasty salad
        </Text>
        <View style={styles.priceContainer}>
          <Text style={styles.totalPriceLabel}>Total Price</Text>
          <Text style={styles.totalPrice}>LKR {totalPrice}.00</Text>
        </View>
        <View style={styles.nutritionContainer}>
          <Text style={styles.nutrition}>Protein: 20g</Text>
          <Text style={styles.nutrition}>Calories: 520 kcal</Text>
          <Text style={styles.nutrition}>Fat: 18g</Text>
          <Text style={styles.nutrition}>Carbo: 16g</Text>
        </View>
        <TouchableOpacity style={styles.button} onPress={addToCartClick}>
          <Text style={styles.buttonText} >Add To Cart</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#f5f5f5',
    paddingBottom: 20,
  },
  imageContainer: {
    height: 300,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  detailsContainer: {
    padding: 20,
    backgroundColor: '#fff',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    marginTop: -20,
    elevation: 5,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
    marginBottom: 20,
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10,
  },
  quantityButton: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    backgroundColor: 'orange',
    borderRadius: 5,
    marginHorizontal: 5,
  },
  quantityButtonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
  quantityText: {
    fontSize: 22,
    marginHorizontal: 10,
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 16,
    color: '#888',
    marginVertical: 10,
    textAlign: 'center',
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10,
  },
  description: {
    fontSize: 16,
    color: '#666',
    marginVertical: 10,
    textAlign: 'center',
  },
  priceContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 10,
  },
  totalPriceLabel: {
    fontSize: 18,
    color: '#333',
  },
  totalPrice: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  nutritionContainer: {
    marginVertical: 10,
  },
  nutrition: {
    fontSize: 14,
    color: '#666',
  },
  button: {
    backgroundColor: 'orange',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    fontSize: 18,
    color: '#fff',
  },
});
