import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet, Image, Dimensions, TouchableOpacity } from 'react-native';
import axios from 'axios';
import { router, useRouter } from 'expo-router';

const MenuScreen = () => {
  const [menuItems, setMenuItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    getAllPizza();
  }, []);

  const getAllPizza = async () => {
    try {
      const response = await axios.get('http://192.168.109.54:8080/menu/get/Snack');
      setMenuItems(response.data);
      setLoading(false);
    } catch (error) {
      setError(error.message || 'Error fetching menu items');
      setLoading(false);
    }
  };

 

  if (error) {
    return (
      <View style={styles.container}>
        <Text>Error: {error}</Text>
      </View>
    );
  }

  const detailClick = (item) => {
    router.push({
      pathname: 'details',
      params: {
        itemImage: item.image,
        itemCategory: item.category,
        itemName: item.itemName,
        price: item.price,
        description: item.description
      }
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.menuStyle}>Our Menu</Text>
     
      <FlatList
        style={styles.list}
        data={menuItems}
        keyExtractor={(item) => item._id}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.itemContainer} onPress={() => detailClick(item)}>
            <Image source={{ uri: item.image }} style={styles.image} />
            <View style={styles.textContainer}>
              
              <Text style={styles.name}>{item.itemName}</Text>
              <Text style={styles.price}>LKR {item.price}.00</Text>
            </View>
          </TouchableOpacity>
        )}
        numColumns={2}
        contentContainerStyle={styles.flatListContainer}
      />
    </View>
  );
};

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
    alignItems: 'center',
  },
  menuList: {
    marginTop: 50,
    flexDirection: 'row',
    alignItems: 'center',
  },
  menuItem: {
    fontSize: 18,
    fontWeight: 'bold',
    marginHorizontal: 30,
    color: 'black',
  },
  selectedMenuItem: {
    color: '#FFA500',
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
  category: {
    fontSize: 16,
    color: 'gray',
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  price: {
    marginTop: 10,
    fontSize: 17,
    color: 'gray',
    textAlign: 'center',
  },
  flatListContainer: {
    alignItems: 'center',
  },
});

export default MenuScreen;