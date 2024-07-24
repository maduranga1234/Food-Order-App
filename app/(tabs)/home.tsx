import { View, Text, StyleSheet, ScrollView, Image, TextInput, TouchableOpacity, ActivityIndicator } from 'react-native';
import { router } from 'expo-router';
import axios from 'axios';
import React, { useState, useEffect } from 'react';

const HomeScreen = () => {
  const [menuItems, setMenuItems] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [popular, setPopular] = useState([]);

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      searchMenuItems();
    }, 300);

    return () => clearTimeout(delayDebounceFn);
  }, [searchQuery]);

  useEffect(() => {
    getAllPopular();
  }, []);

  const searchMenuItems = async () => {
    if (!searchQuery) {
      setMenuItems([]);
      return;
    }
    try {
      setLoading(true);
      const response = await axios.get(`http://192.168.8.100:8080/menu/search`, {
        params: { itemName: searchQuery }
      });
      setMenuItems(response.data);
      setLoading(false);
    } catch (err) {
      setError(err.message || 'Error searching menu items');
      setLoading(false);
    }
  };

  const getAllPopular = async () => {
    try {
      setLoading(true);
      const response = await axios.get('http://192.168.8.100:8080/popular/getAll');
      setPopular(response.data);
      setLoading(false);
    } catch (error) {
      setError(error.message || 'Error fetching popular items');
      setLoading(false);
    }
  };

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
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerContainer}>
          <Text style={styles.teast}>Taste </Text>
          <Text style={styles.hub}>hub</Text>
        </View>
        <Image style={styles.profileImage} source={{ uri: 'https://img.freepik.com/premium-photo/shiny-gold-letter-m-plain-white-background-3d-rendering_601748-26755.jpg?ga=GA1.1.1360257794.1717265664&semt=ais_user' }} />
      </View>

      <TextInput
        style={styles.searchInput}
        placeholder="Search"
        value={searchQuery}
        onChangeText={setSearchQuery}
      />

      {loading && <ActivityIndicator size="large" color="#0000ff" />}
      {error && <Text style={styles.errorText}>{error}</Text>}

      {searchQuery && menuItems.length > 0 && menuItems.map((item, index) => (
        <TouchableOpacity key={index} style={styles.searchItem} onPress={() => detailClick(item)}>
          <Image style={styles.searchImage} source={{ uri: item.image }} />
          <Text style={styles.searchText}>{item.itemName}</Text>
          <Text style={styles.searchPrice}>LKR {item.price}</Text>
        </TouchableOpacity>
      ))}

      <ScrollView horizontal style={styles.categoryContainer}>
        <TouchableOpacity style={styles.categoryItem} onPress={() => router.push('/beverages')}>
          <Text style={styles.categoryText}>Beverages</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.categoryItem} onPress={() => router.push('/burger')}>
          <Text style={styles.categoryText}>Burger</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.categoryItem} onPress={() => router.push('/pizza')}>
          <Text style={styles.categoryText}>Pizza</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.categoryItem} onPress={() => router.push('/snack')}>
          <Text style={styles.categoryText}>Snack</Text>
        </TouchableOpacity>
      </ScrollView>

      <View style={styles.promotionContainer}>
        <Text style={styles.promotionTitle}>Promotions</Text>
        <View style={styles.promotionItem}>
          <View style={styles.promotionTextContainer}>
            <Text style={styles.promotionText}>Today's offer</Text>
            <Text style={styles.promotionText}>Free Box of Fries</Text>
            <Text style={styles.promotionSubText}>On All Orders above LKR 2500.00</Text>
          </View>
          <Image style={styles.promotionImage} source={require('../../images/box.png')} />
        </View>
      </View>

      <View style={styles.popularContainer}>
        <Text style={styles.popularTitle}>Popular</Text>
        {popular.map((item, index) => (
          <TouchableOpacity key={index} style={styles.popularItem} onPress={() => detailClick(item)}>
            <Image style={styles.popularImage} source={{ uri: item.image }} />
            <Text style={styles.popularText}>{item.itemName}</Text>
            <Text style={styles.popularPrice}>LKR {item.price}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 10,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'black',
    borderRadius: 10,
    paddingVertical: 5,
    paddingHorizontal: 10,
  },
  teast: {
    fontSize: 15,
    fontWeight: 'bold',
    color: 'white',
  },
  hub: {
    fontSize: 15,
    fontWeight: 'bold',
    backgroundColor: '#FFA500',
    color: 'black',
    borderRadius: 5,
    paddingHorizontal: 8,
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  searchInput: {
    backgroundColor: '#f0f0f0',
    margin: 20,
    padding: 10,
    borderRadius: 10,
  },
  categoryContainer: {
    flexDirection: 'row',
    paddingVertical: 20,
  },
  categoryItem: {
    marginLeft: 15,
    padding: 10,
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
  },
  categoryText: {
    fontSize: 16,
  },
  promotionContainer: {
    padding: 20,
  },
  promotionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  promotionItem: {
    backgroundColor: '#FFC490',
    padding: 20,
    borderRadius: 10,
    marginTop: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  promotionImage: {
    width: 80,
    height: 80,
    marginLeft: 10,
  },
  promotionTextContainer: {
    flex: 1,
  },
  promotionText: {
    fontSize: 16,
  },
  promotionSubText: {
    fontSize: 14,
    color: '#888',
  },
  popularContainer: {
    padding: 20,
  },
  popularTitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  popularItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  popularImage: {
    width: 60,
    height: 60,
    borderRadius: 10,
  },
  popularText: {
    fontSize: 16,
    marginLeft: 10,
  },
  popularPrice: {
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 'auto',
  },
  searchItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
    marginLeft: 20,
  },
  searchImage: {
    width: 60,
    height: 60,
    borderRadius: 10,
  },
  searchTextContainer: {
    marginLeft: 10,
    flex: 1,
  },
  searchText: {
    fontSize: 16,
    marginLeft: 8,
  },
  searchPrice: {
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 'auto',
  },
});

export default HomeScreen;
