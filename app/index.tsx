import React from 'react';
import { View, Text, FlatList, StyleSheet, Image, Dimensions } from 'react-native';

const menuItems = [
  { id: '1', name: 'Spicy Noodles', price: 'LKR 1500.00', image: 'https://img.freepik.com/premium-photo/asian-noodles-with-pork-teriyaki-sauce-with-green-beans-carrots-shiitake-mushrooms_147620-1674.jpg?ga=GA1.2.1360257794.1717265664&semt=ais_hybrid' },
  { id: '2', name: 'Shrimp Pasta', price: 'LKR 1800.00', image: 'https://img.freepik.com/premium-photo/plate-spaghetti-bolognese-pasta-with-sauce-tomatoes-basil-parmesan_534066-1227.jpg?ga=GA1.1.1360257794.1717265664&semt=ais_hybrid' },
  { id: '3', name: 'Mongolian Rice', price: 'LKR 800.00', image: 'https://img.freepik.com/free-photo/close-up-pilaf-with-beans-green-fried-onions_141793-1349.jpg?ga=GA1.1.1360257794.1717265664&semt=ais_hybrid' },
  { id: '4', name: 'Mixed Rice', price: 'LKR 2200.00', image: 'https://preview.redd.it/mw2yltroquy41.jpg?width=1080&crop=smart&auto=webp&s=85c45aa0de67ea51871d59518fed8eadd1e707a8' },
  { id: '5', name: 'Mix Kottu', price: 'LKR 1600.00', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrSiKrCJ5zjOMj4eSMNBihoAs40pb38YO6yw&usqp=CAU' },
  { id: '6', name: 'Chiken Rice', price: 'LKR 1500.00', image: 'https://img.freepik.com/free-photo/fried-rice-with-minced-pork-tomato-carrot-cucumber-plate_1150-27179.jpg?ga=GA1.1.1360257794.1717265664' },
];

const MenuScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.menuStyle}>Menu</Text>
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
        contentContainerStyle={styles.flatListContainer}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop:80,
    flex: 1,
    padding: 10,
    backgroundColor: '#fff', 
  },
  menuStyle: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  itemContainer: {
    width: Dimensions.get('window').width / 2 - 20,
    height: 250,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 3,
    elevation: 5,
    backgroundColor: '#fff', // Optional: Set background color
  },
  image: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 10,
  },
  textContainer: {
    alignItems: 'center',
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  price: {
    fontSize: 16,
    color: 'gray',
    textAlign: 'center',
  },
  flatListContainer: {
    alignItems: 'center',
  },
});

export default MenuScreen;
