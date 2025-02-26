import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';

// Dummy plumber data
const plumbers = [
  { id: '1', name: 'John Doe', rating: 4.8, experience: '5 years', contact: '+1234567890' },
  { id: '2', name: 'FixIt Plumbing', rating: 4.5, experience: '7 years', contact: '+1987654321' },
  { id: '3', name: 'QuickFix Services', rating: 4.3, experience: '3 years', contact: '+1122334455' },
];

const PlumberList = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Available Plumbers</Text>
      <FlatList
        data={plumbers}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.name}>{item.name}</Text>
            <Text>⭐ {item.rating} | {item.experience}</Text>
            <Text>☎ {item.contact}</Text>
          </View>
        )}
      />
    </View>
  );
};

export default PlumberList;

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#fff' },
  header: { fontSize: 20, fontWeight: 'bold', marginBottom: 10 },
  card: { padding: 15, marginVertical: 5, backgroundColor: '#f9f9f9', borderRadius: 8 },
  name: { fontSize: 18, fontWeight: 'bold' },
});
