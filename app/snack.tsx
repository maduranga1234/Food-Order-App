import React from 'react';
import { View, Text, FlatList, StyleSheet, Image, Dimensions } from 'react-native';

const menuItems = [
  { id: '1', name: 'Chicken Burger', price: 'LKR 600.00', image: 'https://media.istockphoto.com/id/1397632887/photo/beef-burger-sandwich-with-salad-lettuce-tomato-cheese-and-dressing.jpg?s=612x612&w=0&k=20&c=kC2e64DxrQe_yhHxMhXs0JimtAMvvXo4ZpgbKXAwDUo=' },
  { id: '2', name: 'Egg Bun', price: 'LKR 250.00', image: 'https://img.freepik.com/free-photo/khachapuri-adjarian-open-pie-with-mozzarella-egg-georgian-cuisine_2829-14477.jpg?ga=GA1.2.1360257794.1717265664&semt=ais_user' },
  { id: '3', name: 'Sausage bun', price: 'LKR 200.00', image: 'https://img.freepik.com/free-photo/hot-dogs-served-wooden-plank-marble-surface-onions-back_157027-4461.jpg?ga=GA1.2.1360257794.1717265664' },
  { id: '4', name: 'Sandwich', price: 'LKR 200.00', image: 'https://img.freepik.com/free-photo/front-view-delicious-ham-sandwiches-wooden-board-dark-surface_179666-34425.jpg?ga=GA1.2.1360257794.1717265664&semt=sph' },
  { id: '5', name: 'Frish Rolls', price: 'LKR 120.00', image: 'https://img.freepik.com/free-photo/side-view-chicken-nuggets-lettuce-leaves-with-sauce_141793-4840.jpg?ga=GA1.2.1360257794.1717265664' },
  { id: '6', name: 'Pasty', price: 'LKR 200.00', image: 'https://img.freepik.com/premium-photo/stuffed-vegetable-puff-samosa-famous-indian-bakery-snack-served-with-tomato-ketchup-hot-tea-selective-focus_466689-60205.jpg?ga=GA1.2.1360257794.1717265664&semt=ais_user' },
];

const MenuScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.menuStyle}>Our Menu</Text>
      <View style={styles.menuList}>
        <Text style={styles.menuItem}>Meals</Text>
        <Text style={styles.menuItem}>Beverages</Text>
        <Text style={styles.menuItem}>Snacks</Text>
        
      </View>
      <FlatList
        style={styles.list}
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
    flex: 1,
    padding: 10,
    backgroundColor: '#fff',
  },
  list: {
    marginTop: 20,
  },
  menuStyle: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 40,
    alignItems:'center'
  },
  menuList: {
    marginTop:50,
    flexDirection: 'row',
    alignItems:'center',
    
  },
  menuItem: {
    fontSize: 18,
    fontWeight: 'bold',
    marginHorizontal: 30,
    color:'#FFA500'
    

   
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
    backgroundColor: '#fff',
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
