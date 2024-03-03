import React, { useState, useEffect } from 'react';
import { View, TextInput, Button, FlatList, StyleSheet } from 'react-native';
import RecipeItem from './RecipeItem';

const RecipeList = ({ ingredient }) => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    if (ingredient) {
      fetchRecipes();
    }
  }, [ingredient]);

  const fetchRecipes = async () => {
    try {
      const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`);
      const data = await response.json();
      setRecipes(data.meals || []);
    } catch (error) {
      console.error('Error fetching recipes:', error);
    }
  };

  const renderRecipeItem = ({ item }) => (
    <RecipeItem title={item.strMeal} thumbnail={item.strMealThumb} />
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={recipes}
        renderItem={renderRecipeItem}
        keyExtractor={(item) => item.idMeal}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default RecipeList;
