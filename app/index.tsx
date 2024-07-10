import React from 'react';
import { View, Text, FlatList, StyleSheet, Image, Dimensions } from 'react-native';

const menuItems = [
  { id: '1', name: 'Spicy Noodles', price: 'LKR 1500.00', image: 'https://img.freepik.com/premium-photo/asian-noodles-with-pork-teriyaki-sauce-with-green-beans-carrots-shiitake-mushrooms_147620-1674.jpg?ga=GA1.2.1360257794.1717265664&semt=ais_hybrid' },
  { id: '2', name: 'Shrimp Pasta', price: 'LKR 1800.00', image: 'https://img.freepik.com/premium-photo/asian-noodles-with-pork-teriyaki-sauce-with-green-beans-carrots-shiitake-mushrooms_147620-1674.jpg?ga=GA1.2.1360257794.1717265664&semt=ais_hybrid' },
  { id: '3', name: 'Vegetable Curry', price: 'LKR 800.00', image: 'https://img.freepik.com/premium-photo/asian-noodles-with-pork-teriyaki-sauce-with-green-beans-carrots-shiitake-mushrooms_147620-1674.jpg?ga=GA1.2.1360257794.1717265664&semt=ais_hybrid' },
  { id: '4', name: 'Mixed Salad', price: 'LKR 2200.00', image: 'https://img.freepik.com/premium-photo/asian-noodles-with-pork-teriyaki-sauce-with-green-beans-carrots-shiitake-mushrooms_147620-1674.jpg?ga=GA1.2.1360257794.1717265664&semt=ais_hybrid' },
  { id: '5', name: 'Vegetable Curry', price: 'LKR 1600.00', image: 'https://img.freepik.com/premium-photo/asian-noodles-with-pork-teriyaki-sauce-with-green-beans-carrots-shiitake-mushrooms_147620-1674.jpg?ga=GA1.2.1360257794.1717265664&semt=ais_hybrid' },
  { id: '6', name: 'Mixed Salad', price: 'LKR 1500.00', image: 'https://img.freepik.com/premium-photo/asian-noodles-with-pork-teriyaki-sauce-with-green-beans-carrots-shiitake-mushrooms_147620-1674.jpg?ga=GA1.2.1360257794.1717265664&semt=ais_hybrid' },
];

export default function MenuScreen() {
  return (
    <View style={styles.container}>
      <FlatList
        data={menuItems}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.itemContainer}>
            <Image source={{ uri: item.image }} style={styles.image} />
            <View style={styles.textContainer}>
              <Text style={styles.name}>{item.name}</Text>
              <Text style={styles.price}>{item.price}</Text>
            </View>
          </View>
        )}
        numColumns={2}
        columnWrapperStyle={styles.row}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  itemContainer: {
    width: (Dimensions.get('window').width / 2) - 30, // Half of screen width minus padding
    height: 200,          // Fixed height for item container
    flexDirection: 'column', // Column layout to stack image and text vertically
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
    borderColor: 'black', // Border color
    borderWidth: 1.5,     // Border width
    borderRadius: 10,     // Border radius for rounded corners
    padding: 10,          // Padding inside the item container
    shadowColor: '#000',  // Shadow color
    shadowOffset: { width: 0, height: 1 }, // Shadow offset (0 width, 2 height for bottom shadow)
    shadowOpacity: 0.75,  // Shadow opacity
    shadowRadius: 3.84,   // Shadow radius
    elevation: 5,         // Elevation for Android shadow
  },
  image: {
    width: 120,            // Adjusted width for image
    height: 120,           // Adjusted height for image
    marginBottom: 10,      // Margin bottom to space from text
    borderRadius: 80,      // Border radius to make the image circular
  },
  textContainer: {
    alignItems: 'center',
  },
  name: {
    fontSize: 15,
    fontWeight: 'bold',
    textAlign: 'center', 
  },
  price: {
    fontSize: 14,
    color: 'gray',
    textAlign: 'center',  // Center align text
  },
  row: {
    justifyContent: 'space-around',
  },
});
