import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createNativeStackNavigator();

// Dummy plumber data
const plumbers = [
  { id: '1', name: 'John Doe', rating: 4.8, experience: '5 years', contact: '+1234567890' },
  { id: '2', name: 'FixIt Plumbing', rating: 4.5, experience: '7 years', contact: '+1987654321' },
  { id: '3', name: 'QuickFix Services', rating: 4.3, experience: '3 years', contact: '+1122334455' },
];

// Plumber List Screen
const PlumberListScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Available Plumbers</Text>
      <FlatList
        data={plumbers}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.card}
            onPress={() => navigation.navigate('PlumberDetails', { plumber: item })}
          >
            <Text style={styles.name}>{item.name}</Text>
            <Text>⭐ {item.rating} | {item.experience}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

// Plumber Details Screen
const PlumberDetailsScreen = ({ route }) => {
  const { plumber } = route.params;
  return (
    <View style={styles.container}>
      <Text style={styles.header}>{plumber.name}</Text>
      <Text>⭐ Rating: {plumber.rating}</Text>
      <Text>📅 Experience: {plumber.experience}</Text>
      <Text>📍 Location: Nearby</Text>
      <Text>☎ Contact: {plumber.contact}</Text>
    </View>
  );
};

// Navigation Setup
export default function PlumberList() {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator>
        <Stack.Screen name="PlumberList" component={PlumberListScreen} options={{ title: 'Plumbers' }} />
        <Stack.Screen name="PlumberDetails" component={PlumberDetailsScreen} options={{ title: 'Plumber Details' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

// Styles
const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#fff' },
  header: { fontSize: 20, fontWeight: 'bold', marginBottom: 10 },
  card: { padding: 15, marginVertical: 5, backgroundColor: '#f9f9f9', borderRadius: 8 },
  name: { fontSize: 18, fontWeight: 'bold' },
});
