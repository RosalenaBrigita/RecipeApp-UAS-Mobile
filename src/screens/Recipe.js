import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Recipe = ({navigation}) => {
  const [isLiked, setIsLiked] = useState(false); // For like/unlike state
  const [rating, setRating] = useState(4); // Example rating (out of 5)
  const [isReadMore, setIsReadMore] = useState(false);
  const [activeSection, setActiveSection] = useState('ingredients'); // Track which section is active

  const toggleLike = () => {
    setIsLiked(!isLiked);
  };

  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };

  const description = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`;

  const MAX_LINES = 5; // Approximate number of lines
  const truncatedText = description.split(' ').slice(0, MAX_LINES * 10).join(' ') + '...';

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <TouchableOpacity 
        style={styles.backButton} 
        onPress={() => navigation.navigate('MainTabs', { screen: 'Home' })}
      >
        <Ionicons name="arrow-back" size={30} color="#333333" />
      </TouchableOpacity>

      {/* Recipe Image */}
      <Image
        source={require('../images/carrotSoup.webp')}
        style={styles.recipeImage}
      />

      {/* Play Button */}
      <TouchableOpacity style={styles.playButton}>
        <Image source={require('../images/playbutton.png')} />
      </TouchableOpacity>

      {/* Recipe Details */}
      <View style={styles.bar}>
        <View style={styles.infoItem}>
            <Ionicons name="person" size={20} />
            <Text style={styles.infoText}>4</Text>
        </View>
        <View style={styles.separator} />
        <View style={styles.infoItem}>
            <Ionicons name="fast-food" size={20}/>
            <Text style={styles.infoText}>Easy</Text>
        </View>
        <View style={styles.separator} />
        <View style={styles.infoItem}>
            <Ionicons name="flame" size={20} />
            <Text style={styles.infoText}>320 Cal</Text>
        </View>
      </View>

      {/* Recipe Title */}
      <View style={styles.titleContainer}>
        <Text style={styles.recipeTitle}>Carrot Soup</Text>
        <Text style={styles.recipeSubtitle}>Easy, quick and tasty!</Text>
      </View>

      {/* Likes, Rating, and Time */}
      <View style={styles.recipeInfo}>
        <TouchableOpacity onPress={toggleLike} style={styles.infoIcon}>
          <Ionicons 
            name={isLiked ? "heart" : "heart-outline"} 
            size={24} 
            color={isLiked ? "#FF6B00" : "#444"} 
          />
          <Text style={styles.infoText}>2k</Text>
        </TouchableOpacity>
        <View style={styles.infoIcon}>
          <Ionicons name="star" size={24} color="yellow" />
          <Text style={styles.infoText}> {rating} / 5</Text>
        </View>
        <View style={styles.infoIcon}>
          <Ionicons name="time" size={24} color="grey" />
          <Text style={styles.infoText}>10 min.</Text>
        </View>
      </View>

      {/* Description */}
      <Text style={styles.description}>
        {isReadMore ? description : truncatedText}
        <TouchableOpacity onPress={toggleReadMore}>
          <Text style={styles.readMore}>
            {isReadMore ? ' Show Less' : ' Read More'}
          </Text>
        </TouchableOpacity>
      </Text>

      {/* Tabs for Ingredients, Steps, and Comments */}
      <View style={styles.tabs}>
        <TouchableOpacity 
          style={[styles.tab, activeSection === 'ingredients' && styles.activeTab]}
          onPress={() => setActiveSection('ingredients')}
        >
          <Text style={[styles.tabText, activeSection === 'ingredients' && styles.activeTabText]}>Ingredients</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={[styles.tab, activeSection === 'steps' && styles.activeTab]}
          onPress={() => setActiveSection('steps')}
        >
          <Text style={[styles.tabText, activeSection === 'steps' && styles.activeTabText]}>Steps</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={[styles.tab, activeSection === 'comments' && styles.activeTab]}
          onPress={() => setActiveSection('comments')}
        >
          <Text style={[styles.tabText, activeSection === 'comments' && styles.activeTabText]}>Comments</Text>
        </TouchableOpacity>
      </View>

      {/* Section Content */}
      {activeSection === 'ingredients' && (
        <View style={styles.ingredientsContainer}>
          <Text style={styles.sectionTitle}>Ingredients</Text>
          <View style={styles.ingredientList}>
            <Text style={styles.ingredientText}>Potatoes: <Text style={styles.ingredientHighlight}>250 g</Text></Text>
            <Text style={styles.ingredientText}>Butter: <Text style={styles.ingredientHighlight}>20 g</Text></Text>
            <Text style={styles.ingredientText}>Carrots: <Text style={styles.ingredientHighlight}>500 g</Text></Text>
            <Text style={styles.ingredientText}>Shallot: <Text style={styles.ingredientHighlight}>4</Text></Text>
            <Text style={styles.ingredientText}>Water: <Text style={styles.ingredientHighlight}>1 l</Text></Text>
            <Text style={styles.ingredientText}>Pepper: <Text style={styles.ingredientHighlight}>1 tbs</Text></Text>
            <Text style={styles.ingredientText}>Fine Salt: <Text style={styles.ingredientHighlight}>1 tbs</Text></Text>
            <Text style={styles.ingredientText}>Sugar: <Text style={styles.ingredientHighlight}>1 tbs</Text></Text>
          </View>
        </View>
      )}
      {activeSection === 'steps' && (
        <View style={styles.stepsContainer}>
          <Text style={styles.sectionTitle}>Steps</Text>
          <Text style={styles.stepText}>Step 1: Prep ingredients</Text>
          <Text style={styles.stepText}>Step 2: Boil water</Text>
          <Text style={styles.stepText}>Step 3: Cook</Text>
        </View>
      )}
      {activeSection === 'comments' && (
        <View style={styles.commentsContainer}>
          <Text style={styles.sectionTitle}>Comments</Text>
          <Text style={styles.commentText}>Very tasty!</Text>
          <Text style={styles.commentText}>Easy to make</Text>
        </View>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 15,
    backgroundColor: '#fff',
  },
  backButton: {
    position: 'absolute',
    top: 40,
    left: 20,
    zIndex: 1,
  },
  recipeImage: {
    marginTop: 70,
    width: '100%',
    height: 300,
    borderRadius: 10,
  },
  playButton: {
    position: 'absolute',
    left: '50%',
    transform: [{ translateX: -20 }, { translateY: 350 }],
  },
  titleContainer: {
    marginTop: 10,
    alignItems: 'center',
  },
  recipeTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FF6B00',
  },
  recipeSubtitle: {
    fontSize: 16,
    color: '#666',
  },
  recipeInfo: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 10,
  },
  infoText: {
    fontSize: 16,
    color: '#444',
    marginLeft: 5,
  },
  infoIcon: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  bar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 20,
    marginTop: 50,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#ccc',
  },
  infoItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  separator: {
    height: '100%',
    width: 1,
    backgroundColor: '#ccc',
  },
  description: {
    fontSize: 16,
    color: '#444',
    marginTop: 10,
  },
  readMore: {
    color: '#FF6B00',
    fontWeight: 'bold',
  },
  tabs: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,
  },
  tab: {
    padding: 10,
    borderRadius: 5,
  },
  activeTab: {
    borderBottomWidth: 2,
    borderBottomColor: '#FF6B00',
  },
  tabText: {
    fontSize: 16,
    color: '#444',
  },
  activeTabText: {
    fontWeight: 'bold',
    color: '#FF6B00',
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    marginVertical: 10,
    color: '#FF6B00',
  },
  ingredientsContainer: {
    padding: 10,
    backgroundColor: '#F9F9F9',
    borderRadius: 10,
  },
  stepsContainer: {
    padding: 10,
    backgroundColor: '#F9F9F9',
    borderRadius: 10,
  },
  commentsContainer: {
    padding: 10,
    backgroundColor: '#F9F9F9',
    borderRadius: 10,
  },
  ingredientList: {
    marginTop: 5,
  },
  ingredientText: {
    fontSize: 16,
    color: '#444',
    marginVertical: 2,
  },
  ingredientHighlight: {
    color: '#007AFF',
    fontWeight: 'bold',
  },
  stepText: {
    fontSize: 16,
    color: '#444',
    marginVertical: 5,
  },
  commentText: {
    fontSize: 16,
    color: '#444',
    marginVertical: 5,
  },
});

export default Recipe;
