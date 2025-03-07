import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Image,
  ScrollView,
  TouchableOpacity,
  FlatList,
  Modal,
} from 'react-native';
import { Ionicons, FontAwesome5, MaterialIcons } from '@expo/vector-icons';

const HomePage = ({navigation }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const services = [
    { id: 1, name: 'Plumbing', icon: 'tools' },
    { id: 2, name: 'Electrician', icon: 'bolt' },
    { id: 3, name: 'HVAC Services', icon: 'fan' },
    { id: 4, name: 'Cleaning', icon: 'broom' },
    { id: 5, name: 'Security', icon: 'shield-alt' },
    { id: 6, name: 'Waste Disposal', icon: 'dumpster' },
    { id: 7, name: 'Pest Control', icon: 'bug' },
    { id: 8, name: 'More', icon: 'ellipsis-h' },
  ];
  const suggestions = ['Shop 1', 'Shop 2', 'Shop 3', 'Shop 4'];
  const sliderInfo = ['Special Offers', 'Top-Rated Services', 'Quick Booking'];

  const handleViewAll = () => {
    setModalVisible(true);
  };

  return (
    <View style={styles.container}>
      {/* Top Header */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.location} onPress={() => alert("Change Location")}>
          <Ionicons name="location-outline" size={20} color="#333" />
          <Text style={styles.locationText}>Your Location</Text>
        </TouchableOpacity>
        <View style={styles.profile}>
          <TouchableOpacity onPress={() => alert("Notifications")}>
            <Ionicons name="notifications-outline" size={24} color="#333" />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image
              source={{ uri: 'https://via.placeholder.com/50' }}
              style={styles.profileImage}
            />
          </TouchableOpacity>
        </View>
      </View>

      {/* Search Bar */}
      <View style={styles.searchBar}>
        <Ionicons name="search" size={20} color="#888" />
        <TextInput
          placeholder="What are you looking for?."
          style={styles.searchInput}
        />
      </View>

      {/* Services */}
      <View style={styles.services}>
        <Text style={styles.sectionTitle}>Services</Text>
        <FlatList
          data={services.slice(0, 6)}
          numColumns={3}
          renderItem={({ item }) => (
            <TouchableOpacity
            style={styles.serviceBox}
            onPress={() => {
              if (item.name === 'Plumbing') {
                navigation.navigate('Plumb'); // Navigate to PlumberListScreen
              } else {
                alert(`${item.name} selected`);
              }
            }}
          >
            <FontAwesome5 name={item.icon} size={24} color="#007BFF" />
            <Text style={styles.serviceText}>{item.name}</Text>
          </TouchableOpacity>
        )}
          keyExtractor={(item) => item.id.toString()}
        />
        <TouchableOpacity onPress={handleViewAll}>
          <Text style={styles.viewAll}>View All</Text>
        </TouchableOpacity>
      </View>

      {/* Slider */}
      <ScrollView horizontal style={styles.slider} showsHorizontalScrollIndicator={false}>
        {sliderInfo.map((info, index) => (
          <View style={styles.sliderItem} key={index}>
            <Text style={styles.sliderText}>{info}</Text>
          </View>
        ))}
      </ScrollView>

      {/* Suggestions */}
      <View style={styles.suggestions}>
        <Text style={styles.sectionTitle}>Nearby Services</Text>
        {suggestions.map((suggestion, index) => (
          <TouchableOpacity key={index} style={styles.suggestionItem} onPress={() => alert(`Selected ${suggestion}`)}>
            <Text>{suggestion}</Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Modal for View All */}
      <Modal visible={modalVisible} transparent animationType="slide">
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>All Services</Text>
            <FlatList
              data={services}
              numColumns={2}
              renderItem={({ item }) => (
                <TouchableOpacity style={styles.modalServiceItem} onPress={() => alert(`${item.name} selected`)}>
                  <FontAwesome5 name={item.icon} size={24} color="#007BFF" />
                  <Text style={styles.modalServiceText}>{item.name}</Text>
                </TouchableOpacity>
              )}
              keyExtractor={(item) => item.id.toString()}
            />
            <TouchableOpacity
              style={styles.closeButton}
              onPress={() => setModalVisible(false)}
            >
              <Text style={styles.closeButtonText}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f5f5f5', paddingHorizontal: 16 },
  header: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginVertical: 16 },
  location: { flexDirection: 'row', alignItems: 'center' },
  locationText: { marginLeft: 8, fontSize: 16, fontWeight: '600', color: '#333' },
  profile: { flexDirection: 'row', alignItems: 'center' },
  profileImage: { width: 40, height: 40, borderRadius: 20, marginLeft: 16 },
  searchBar: { flexDirection: 'row', alignItems: 'center', backgroundColor: '#fff', padding: 10, borderRadius: 8, marginBottom: 16 },
  searchInput: { marginLeft: 10, fontSize: 16, flex: 1 },
  services: { marginBottom: 16 },
  sectionTitle: { fontSize: 18, fontWeight: '600', marginBottom: 8 },
  serviceBox: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    width: '30%',
    margin: 5,
    elevation: 3,
  },
  serviceText: { marginTop: 8, fontSize: 14, fontWeight: '600', textAlign: 'center', color: '#333' },
  viewAll: { color: '#007BFF', marginTop: 8, textAlign: 'center' },
  slider: { marginBottom: 16 },
  sliderItem: { backgroundColor: '#007BFF', padding: 16, borderRadius: 8, marginRight: 8 },
  sliderText: { color: '#fff', fontSize: 16 },
  suggestions: { marginBottom: 16 },
  suggestionItem: { backgroundColor: '#fff', padding: 10, borderRadius: 8, marginBottom: 8, elevation: 2 },
  modalContainer: { flex: 1, backgroundColor: 'rgba(0,0,0,0.5)', justifyContent: 'flex-end' },
  modalContent: { backgroundColor: '#fff', borderTopLeftRadius: 20, borderTopRightRadius: 20, padding: 16 },
  modalTitle: { fontSize: 18, fontWeight: '600', marginBottom: 16 },
  modalServiceItem: { alignItems: 'center', padding: 16, backgroundColor: '#fff', borderRadius: 10, margin: 8, elevation: 3, width: '45%' },
  modalServiceText: { marginTop: 8, fontSize: 14, fontWeight: '600', textAlign: 'center' },
  closeButton: { alignItems: 'center', marginTop: 16 },
  closeButtonText: { color: '#007BFF', fontSize: 16 },
});

export default HomePage;
