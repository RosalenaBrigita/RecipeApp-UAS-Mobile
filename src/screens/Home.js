import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const recipes = [
  {
    id: '1',
    title: 'Vegeterian Green Bowl',
    time: '20-30 min',
    servings: '2 Servings',
    icon: 'bowl',
    image: 'https://via.placeholder.com/150', // Ganti URL gambar sesuai kebutuhan
  },
  {
    id: '2',
    title: 'Grilled Salmon Salad',
    time: '10-20 min',
    servings: '2 Servings',
    icon: 'salad',
    image: 'https://via.placeholder.com/150', // Ganti URL gambar sesuai kebutuhan
  },
];

const Home = () => {
  const renderRecipeCard = ({ item }) => (
    <View style={styles.recipeCard}>
      <Image source={{ uri: item.image }} style={styles.recipeImage} />
      {/* Waktu Masak */}
      <View style={styles.timeBadge}>
        <Text style={styles.timeText}>{item.time}</Text>
      </View>
      {/* Ikon Favorite */}
      <TouchableOpacity style={styles.favoriteIcon}>
        <Ionicons name="heart" size={24} color="white" />
      </TouchableOpacity>
      {/* Informasi Resep */}
      <View style={styles.recipeInfo}>
        <Text style={styles.recipeTitle}>{item.title}</Text>
        <Text style={styles.recipeDetails}>
          {item.servings} | {item.icon}
        </Text>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Image
          source={{ uri: 'https://via.placeholder.com/50' }} // Gambar profil
          style={styles.profileImage}
        />
        <Text style={styles.headerTitle}>Welcome name.</Text>
       
      </View>

      {/* Search Bar */}
      <View style={styles.searchContainer}>
        <Ionicons name="search-outline" size={20} color="gray" />
        <TextInput
          placeholder="Search Food and Recipes"
          style={styles.searchInput}
        />
      </View>

      {/* Best Recipes */}
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>Best Recipes</Text>
        <TouchableOpacity>
          <Text style={styles.viewAll}>View All</Text>
        </TouchableOpacity>
      </View>

      {/* Recipe List */}
      <FlatList
        data={recipes}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id}
        renderItem={renderRecipeCard}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
    marginTop: 10,
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  headerTitle: {
    flex: 1,
    fontSize: 18,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F2F2F2',
    marginHorizontal: 20,
    paddingHorizontal: 15,
    borderRadius: 10,
    marginTop: 10,
  },
  searchInput: {
    flex: 1,
    paddingVertical: 10,
    marginLeft: 5,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginTop: 20,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  viewAll: {
    fontSize: 14,
    color: 'green',
  },
  recipeCard: {
    width: 200,
    height: 250,
    borderRadius: 15,
    overflow: 'hidden',
    backgroundColor: '#fff',
    marginRight: 15,
    marginLeft: 20,
    elevation: 3, // Shadow effect
  },
  recipeImage: {
    width: '100%',
    height: '60%',
  },
  timeBadge: {
    position: 'absolute',
    top: 10,
    left: 10,
    backgroundColor: '#FF6B00',
    borderRadius: 10,
    paddingHorizontal: 8,
    paddingVertical: 4,
  },
  timeText: {
    color: 'white',
    fontSize: 12,
  },
  favoriteIcon: {
    position: 'absolute',
    top: 10,
    right: 10,
  },
  recipeInfo: {
    padding: 10,
  },
  recipeTitle: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  recipeDetails: {
    fontSize: 12,
    color: 'gray',
    marginTop: 5,
  },
});

export default Home;
