import React, { useState } from 'react';
import { StyleSheet, View, TextInput, Button, Keyboard } from 'react-native';
import RecipeList from './RecipeList';

export default function App() {
  const [ingredient, setIngredient] = useState('');

  const handleSearch = (inputIngredient) => {
    setIngredient(inputIngredient);
    Keyboard.dismiss();
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Enter ingredient"
        value={ingredient}
        onChangeText={setIngredient}
      />
      <Button title="Search" onPress={() => handleSearch(ingredient)} />
      <RecipeList ingredient={ingredient} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  input: {
    width: '80%',
    marginBottom: 20,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    marginTop: 50,
  },
});
