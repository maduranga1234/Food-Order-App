import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { launchImageLibrary } from 'react-native-image-picker';
import { useLocalSearchParams } from 'expo-router';

export default function Profile() {
  const { userId, userName, userEmail } = useLocalSearchParams();
  const [profileImage, setProfileImage] = useState('');

  useEffect(() => {
    if (userId && userName && userEmail) {
      // setProfileImage(userImage);
    } else {
      Alert.alert('Profile Error', 'User information not found.');
    }
  }, [userId, userName, userEmail]);

  const selectImage = () => {
    const options = {
      mediaType: 'photo',
    };

    launchImageLibrary(options, (response) => {
      if (response.assets && response.assets.length > 0) {
        const source = { uri: response.assets[0].uri };
        updateProfilePicture(source.uri);
      }
    });
  };

  const updateProfilePicture = async (imageUri) => {
    try {
      const response = await fetch(`http://localhost:8080/user/${userId}/image`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'multipart/form-data',
        },
        body: JSON.stringify({ image: imageUri }),
      });

      const data = await response.json();

      if (response.status === 200) {
        Alert.alert(data.success);
      } else {
        Alert.alert(data.error);
      }
    } catch (error) {
      Alert.alert("Error updating profile picture", error.message);
    }
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.profileContainer}>
        <TouchableOpacity onPress={selectImage}>
          <Image 
            style={styles.profileImage} 
            source={{ uri: profileImage }} 
          />
        </TouchableOpacity>
        <Text style={styles.profileName}>{userName}</Text>
        <Text style={styles.profileEmail}>{userEmail}</Text>
        <TouchableOpacity style={styles.editButton} onPress={selectImage}>
          <Text style={styles.editText}>Edit Profile Picture</Text>
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
  { label: 'Invite a Friend', icon: 'people' },
  { label: 'Logout', icon: 'log-out' },
];

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  profileContainer: {
    alignItems: 'center',
    marginVertical: 20,
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: '#ddd',
  },
  profileName: {
    fontSize: 22,
    fontWeight: 'bold',
    marginTop: 10,
  },
  profileEmail: {
    fontSize: 16,
    color: '#888',
    marginBottom: 10,
  },
  editButton: {
    backgroundColor: '#FFA500',
    paddingVertical: 8,
    paddingHorizontal: 20,
    borderRadius: 20,
  },
  editText: {
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
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  menuText: {
    flex: 1,
    fontSize: 16,
  },
  menuIcon: {
    marginLeft: 'auto',
  },
});
