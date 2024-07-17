import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { launchImageLibrary } from 'react-native-image-picker';

export default function Profile() {
  const [profileImage, setProfileImage] = useState('https://via.placeholder.com/150'); // Default image URL

  const selectImage = () => {
    const options = {
      mediaType: 'photo',
    };

    launchImageLibrary(options, (response) => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      } else {
        const source = { uri: response.assets[0].uri };
        setProfileImage(source.uri);
      }
    });
  };

  return (
    <ScrollView style={styles.container}>
      {/* <View style={styles.header}>
        <TouchableOpacity>
          <Icon name="arrow-back" size={30} color="#000" />
        </TouchableOpacity>
        <TouchableOpacity>
          <Icon name="settings" size={30} color="#000" />
        </TouchableOpacity>
      </View> */}
      <View style={styles.profileContainer}>
        <Image 
          style={styles.profileImage} 
          source={{ uri: profileImage }} 
        />
        <Text style={styles.profileName}>Nicolas Adams</Text>
        <Text style={styles.profileEmail}>nicolasadams@gmail.com</Text>
        <TouchableOpacity style={styles.upgradeButton} onPress={selectImage}>
          <Text style={styles.upgradeText}>Edit Profile Picture</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.menuContainer}>
        {menuItems.map((item, index) => (
          <TouchableOpacity key={index} style={styles.menuItem}>
            <Icon name={item.icon} size={25} color="#000" />
            <Text style={styles.menuText}>{item.label}</Text>
            <Icon name="chevron-forward" size={25} color="#000" style={styles.menuIcon} />
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
}

const menuItems = [
  { label: 'Privacy', icon: 'lock-closed' },
  { label: 'Purchase History', icon: 'time' },
  { label: 'Help & Support', icon: 'help-circle' },
  { label: 'Settings', icon: 'settings' },
  { label: 'Invite a Friend', icon: 'person-add' },
  { label: 'Logout', icon: 'log-out' },
];

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 20,
  },
  profileContainer: {
    alignItems: 'center',
    marginVertical: 30,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  profileName: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  profileEmail: {
    fontSize: 16,
    color: '#777',
    marginBottom: 20,
  },
  upgradeButton: {
    backgroundColor: '#FFA500',
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 30,
  },
  upgradeText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  menuContainer: {
    marginVertical: 20,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  menuText: {
    fontSize: 18,
    marginLeft: 15,
    flex: 1,
  },
  menuIcon: {
    color: '#ccc',
  },
});
