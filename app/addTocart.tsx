import { router, useLocalSearchParams } from 'expo-router';
import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, TextInput, ScrollView } from 'react-native';

export default function AddToCart() {
    const { itemImage, itemName, totalPrice,price, quantity } = useLocalSearchParams();

   
    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Text style={styles.headerText}>1 item in cart</Text>
            <View style={styles.cartItem}>
                <Image source={{ uri: itemImage }} style={styles.cartItemImage} />
                <View style={styles.cartItemDetails}>
                    <Text style={styles.cartItemName}>{itemName}</Text>
                    <Text style={styles.cartItemPrice}>LKR {price}.00</Text>
                    <View style={styles.quantityContainer}>
                        <Text style={styles.quantityText}>{quantity}</Text>
                    </View>
                </View>
                <TouchableOpacity style={styles.removeItemButton}>
                    <Text style={styles.removeItemButtonText}>X</Text>
                </TouchableOpacity>
            </View>
            <TextInput style={styles.orderInstructions} placeholder="Order instructions" />
            <View style={styles.totalContainer}>
                <Text style={styles.totalText}>Total:</Text>
                <Text style={styles.totalAmount}>LKR {totalPrice}.00</Text>
            </View>
            <TouchableOpacity style={styles.checkoutButton}>
                <Text style={styles.checkoutButtonText}>Checkout</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.backToMenuButton} onPress={() => router.push('/menu')}>
                <Text style={styles.backToMenuButtonText}>Back to Menu</Text>
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
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    cartItem: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#fff',
        padding: 10,
        borderRadius: 10,
        marginBottom: 10,
    },
    cartItemImage: {
        width: 60,
        height: 60,
        borderRadius: 30,
        marginRight: 10,
    },
    cartItemDetails: {
        flex: 1,
    },
    cartItemName: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    cartItemPrice: {
        fontSize: 14,
        color: '#888',
        marginVertical: 5,
    },
    quantityContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    quantityText: {
        fontSize: 18,
        marginHorizontal: 10,
    },
    removeItemButton: {
        marginLeft: 10,
        padding: 5,
    },
    removeItemButtonText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'red',
    },
    orderInstructions: {
        height: 40,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 5,
        padding: 10,
        marginVertical: 20,
    },
    totalContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 20,
    },
    totalText: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    totalAmount: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'orange',
    },
    checkoutButton: {
        backgroundColor: 'orange',
        padding: 15,
        borderRadius: 10,
        alignItems: 'center',
        marginBottom: 20,
    },
    checkoutButtonText: {
        fontSize: 18,
        color: '#fff',
    },
    backToMenuButton: {
        alignItems: 'center',
        marginBottom: 20,
    },
    backToMenuButtonText: {
        fontSize: 16,
        color: 'orange',
    },
});
