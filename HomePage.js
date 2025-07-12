import React, { useState, useEffect } from 'react';
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
  Dimensions,
  StatusBar,
  Animated,
  LinearGradient,
} from 'react-native';
import { Ionicons, FontAwesome5, MaterialIcons } from '@expo/vector-icons';

const { width, height } = Dimensions.get('window');

const HomePage = ({ navigation }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [fadeAnim] = useState(new Animated.Value(0));
  const [slideAnim] = useState(new Animated.Value(50));

  useEffect(() => {
    Animated.parallel([
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 800,
        useNativeDriver: true,
      }),
      Animated.timing(slideAnim, {
        toValue: 0,
        duration: 800,
        useNativeDriver: true,
      }),
    ]).start();
  }, []);

  const services = [
    { id: 1, name: 'Plumbing', icon: 'tools', color: '#4A90E2', bgColor: '#E8F2FF' },
    { id: 2, name: 'Electrician', icon: 'bolt', color: '#F5A623', bgColor: '#FFF8E1' },
    { id: 3, name: 'HVAC Services', icon: 'fan', color: '#7ED321', bgColor: '#F0F8E8' },
    { id: 4, name: 'Cleaning', icon: 'broom', color: '#BD10E0', bgColor: '#F8E8FF' },
    { id: 5, name: 'Security', icon: 'shield-alt', color: '#D0021B', bgColor: '#FFE8E8' },
    { id: 6, name: 'Waste Disposal', icon: 'dumpster', color: '#50E3C2', bgColor: '#E8FFF8' },
    { id: 7, name: 'Pest Control', icon: 'bug', color: '#B8E986', bgColor: '#F0F8E8' },
    { id: 8, name: 'Gardening', icon: 'seedling', color: '#8B572A', bgColor: '#F0E8D8' },
    { id: 9, name: 'Painting', icon: 'paint-brush', color: '#9013FE', bgColor: '#F0E8FF' },
    { id: 10, name: 'Carpentry', icon: 'hammer', color: '#FF6F00', bgColor: '#FFF0E8' },
  ];

  const promoCards = [
    { id: 1, title: 'Special Offers', subtitle: 'Up to 30% off on all services', gradient: ['#667eea', '#764ba2'] },
    { id: 2, title: 'Top-Rated Services', subtitle: 'Verified professionals only', gradient: ['#f093fb', '#f5576c'] },
    { id: 3, title: 'Quick Booking', subtitle: 'Book in under 2 minutes', gradient: ['#4facfe', '#00f2fe'] },
  ];

  const nearbyServices = [
    { id: 1, name: 'QuickFix Plumbing', rating: 4.8, distance: '0.5 km', image: 'https://via.placeholder.com/80x80' },
    { id: 2, name: 'ElectroMax Solutions', rating: 4.9, distance: '1.2 km', image: 'https://via.placeholder.com/80x80' },
    { id: 3, name: 'CleanPro Services', rating: 4.7, distance: '0.8 km', image: 'https://via.placeholder.com/80x80' },
    { id: 4, name: 'SecureHome Security', rating: 4.6, distance: '1.5 km', image: 'https://via.placeholder.com/80x80' },
  ];

  const handleViewAll = () => {
    setModalVisible(true);
  };

  const handleSearch = () => {
    if (searchQuery.trim()) {
      // Navigate to search results or filter services
      alert(`Searching for: ${searchQuery}`);
    }
  };

  const ServiceCard = ({ item }) => (
    <TouchableOpacity
      style={[styles.serviceCard, { backgroundColor: item.bgColor }]}
      onPress={() => {
        if (item.name === 'Plumbing') {
          navigation.navigate('Plumb');
        } else {
          alert(`${item.name} selected`);
        }
      }}
      activeOpacity={0.8}
    >
      <View style={[styles.serviceIconContainer, { backgroundColor: item.color }]}>
        <FontAwesome5 name={item.icon} size={20} color="#fff" />
      </View>
      <Text style={styles.serviceText}>{item.name}</Text>
    </TouchableOpacity>
  );

  const PromoCard = ({ item }) => (
    <View style={[styles.promoCard, { backgroundColor: item.gradient[0] }]}>
      <Text style={styles.promoTitle}>{item.title}</Text>
      <Text style={styles.promoSubtitle}>{item.subtitle}</Text>
      <TouchableOpacity style={styles.promoButton}>
        <Text style={styles.promoButtonText}>Learn More</Text>
      </TouchableOpacity>
    </View>
  );

  const NearbyServiceCard = ({ item }) => (
    <TouchableOpacity style={styles.nearbyCard} onPress={() => alert(`Selected ${item.name}`)}>
      <Image source={{ uri: item.image }} style={styles.nearbyImage} />
      <View style={styles.nearbyInfo}>
        <Text style={styles.nearbyName}>{item.name}</Text>
        <View style={styles.nearbyDetails}>
          <View style={styles.ratingContainer}>
            <Ionicons name="star" size={12} color="#FFD700" />
            <Text style={styles.ratingText}>{item.rating}</Text>
          </View>
          <Text style={styles.distanceText}>{item.distance}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#4A90E2" />
      
      {/* Header with gradient */}
      <View style={styles.headerGradient}>
        <View style={styles.header}>
          <TouchableOpacity style={styles.locationContainer} onPress={() => alert("Change Location")}>
            <Ionicons name="location" size={18} color="#fff" />
            <View>
              <Text style={styles.locationLabel}>Location</Text>
              <Text style={styles.locationText}>Bengaluru, Karnataka</Text>
            </View>
          </TouchableOpacity>
          <View style={styles.headerActions}>
            <TouchableOpacity style={styles.notificationButton} onPress={() => alert("Notifications")}>
              <Ionicons name="notifications" size={20} color="#fff" />
              <View style={styles.notificationBadge}>
                <Text style={styles.badgeText}>3</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.profileButton}>
              <Image
                source={{ uri: 'https://via.placeholder.com/50' }}
                style={styles.profileImage}
              />
            </TouchableOpacity>
          </View>
        </View>

        {/* Search Bar */}
        <View style={styles.searchContainer}>
          <View style={styles.searchBar}>
            <Ionicons name="search" size={20} color="#666" />
            <TextInput
              placeholder="What service do you need?"
              style={styles.searchInput}
              value={searchQuery}
              onChangeText={setSearchQuery}
              onSubmitEditing={handleSearch}
              placeholderTextColor="#999"
            />
            <TouchableOpacity onPress={handleSearch}>
              <Ionicons name="options" size={20} color="#666" />
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        {/* Promotional Cards */}
        <Animated.View style={[styles.section, { opacity: fadeAnim, transform: [{ translateY: slideAnim }] }]}>
          <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.promoScrollView}>
            {promoCards.map((item) => (
              <PromoCard key={item.id} item={item} />
            ))}
          </ScrollView>
        </Animated.View>

        {/* Services Section */}
        <Animated.View style={[styles.section, { opacity: fadeAnim }]}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Our Services</Text>
            <TouchableOpacity onPress={handleViewAll}>
              <Text style={styles.viewAllText}>View All</Text>
            </TouchableOpacity>
          </View>
          <FlatList
            data={services.slice(0, 6)}
            numColumns={3}
            renderItem={({ item }) => <ServiceCard item={item} />}
            keyExtractor={(item) => item.id.toString()}
            scrollEnabled={false}
            columnWrapperStyle={styles.serviceRow}
          />
        </Animated.View>

        {/* Nearby Services */}
        <Animated.View style={[styles.section, { opacity: fadeAnim }]}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Nearby Services</Text>
            <TouchableOpacity>
              <Text style={styles.viewAllText}>See All</Text>
            </TouchableOpacity>
          </View>
          <FlatList
            data={nearbyServices}
            renderItem={({ item }) => <NearbyServiceCard item={item} />}
            keyExtractor={(item) => item.id.toString()}
            horizontal
            showsHorizontalScrollIndicator={false}
            style={styles.nearbyList}
          />
        </Animated.View>

        {/* Quick Actions */}
        <Animated.View style={[styles.section, { opacity: fadeAnim }]}>
          <Text style={styles.sectionTitle}>Quick Actions</Text>
          <View style={styles.quickActions}>
            <TouchableOpacity style={styles.quickActionCard}>
              <Ionicons name="calendar" size={24} color="#4A90E2" />
              <Text style={styles.quickActionText}>My Bookings</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.quickActionCard}>
              <Ionicons name="help-circle" size={24} color="#4A90E2" />
              <Text style={styles.quickActionText}>Help & Support</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.quickActionCard}>
              <Ionicons name="gift" size={24} color="#4A90E2" />
              <Text style={styles.quickActionText}>Offers</Text>
            </TouchableOpacity>
          </View>
        </Animated.View>

        <View style={styles.bottomSpacing} />
      </ScrollView>

      {/* Enhanced Modal */}
      <Modal visible={modalVisible} transparent animationType="slide">
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <View style={styles.modalHeader}>
              <Text style={styles.modalTitle}>All Services</Text>
              <TouchableOpacity onPress={() => setModalVisible(false)}>
                <Ionicons name="close" size={24} color="#333" />
              </TouchableOpacity>
            </View>
            <FlatList
              data={services}
              numColumns={2}
              renderItem={({ item }) => (
                <TouchableOpacity
                  style={[styles.modalServiceCard, { backgroundColor: item.bgColor }]}
                  onPress={() => {
                    setModalVisible(false);
                    if (item.name === 'Plumbing') {
                      navigation.navigate('Plumb');
                    } else {
                      alert(`${item.name} selected`);
                    }
                  }}
                >
                  <View style={[styles.modalServiceIcon, { backgroundColor: item.color }]}>
                    <FontAwesome5 name={item.icon} size={20} color="#fff" />
                  </View>
                  <Text style={styles.modalServiceText}>{item.name}</Text>
                </TouchableOpacity>
              )}
              keyExtractor={(item) => item.id.toString()}
              showsVerticalScrollIndicator={false}
            />
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
  },
  headerGradient: {
    backgroundColor: '#4A90E2',
    paddingTop: StatusBar.currentHeight || 40,
    paddingBottom: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  locationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  locationLabel: {
    fontSize: 12,
    color: '#B8D4F0',
    marginLeft: 8,
  },
  locationText: {
    fontSize: 14,
    color: '#fff',
    fontWeight: '600',
    marginLeft: 8,
  },
  headerActions: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  notificationButton: {
    position: 'relative',
    marginRight: 15,
  },
  notificationBadge: {
    position: 'absolute',
    top: -5,
    right: -5,
    backgroundColor: '#FF4757',
    borderRadius: 8,
    width: 16,
    height: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  badgeText: {
    fontSize: 10,
    color: '#fff',
    fontWeight: 'bold',
  },
  profileButton: {
    borderRadius: 20,
    borderWidth: 2,
    borderColor: '#fff',
  },
  profileImage: {
    width: 36,
    height: 36,
    borderRadius: 18,
  },
  searchContainer: {
    paddingHorizontal: 20,
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 25,
    paddingHorizontal: 15,
    paddingVertical: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  searchInput: {
    flex: 1,
    marginLeft: 10,
    fontSize: 16,
    color: '#333',
  },
  content: {
    flex: 1,
    paddingTop: 20,
  },
  section: {
    marginBottom: 25,
    paddingHorizontal: 20,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: '#1a1a1a',
  },
  viewAllText: {
    color: '#4A90E2',
    fontSize: 14,
    fontWeight: '600',
  },
  promoScrollView: {
    marginHorizontal: -20,
    paddingHorizontal: 20,
  },
  promoCard: {
    width: width * 0.75,
    height: 120,
    borderRadius: 15,
    padding: 20,
    marginRight: 15,
    justifyContent: 'center',
  },
  promoTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#fff',
    marginBottom: 5,
  },
  promoSubtitle: {
    fontSize: 14,
    color: '#fff',
    opacity: 0.9,
    marginBottom: 10,
  },
  promoButton: {
    backgroundColor: 'rgba(255,255,255,0.2)',
    paddingHorizontal: 15,
    paddingVertical: 6,
    borderRadius: 15,
    alignSelf: 'flex-start',
  },
  promoButtonText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: '600',
  },
  serviceRow: {
    justifyContent: 'space-between',
  },
  serviceCard: {
    width: (width - 60) / 3,
    height: 90,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  serviceIconContainer: {
    width: 36,
    height: 36,
    borderRadius: 18,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8,
  },
  serviceText: {
    fontSize: 12,
    fontWeight: '600',
    textAlign: 'center',
    color: '#333',
  },
  nearbyList: {
    marginHorizontal: -20,
    paddingHorizontal: 20,
  },
  nearbyCard: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 15,
    marginRight: 15,
    width: 140,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  nearbyImage: {
    width: '100%',
    height: 60,
    borderRadius: 8,
    marginBottom: 10,
  },
  nearbyInfo: {
    flex: 1,
  },
  nearbyName: {
    fontSize: 14,
    fontWeight: '600',
    color: '#333',
    marginBottom: 5,
  },
  nearbyDetails: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  ratingText: {
    fontSize: 12,
    color: '#666',
    marginLeft: 3,
  },
  distanceText: {
    fontSize: 12,
    color: '#999',
  },
  quickActions: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  quickActionCard: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 20,
    alignItems: 'center',
    width: (width - 80) / 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  quickActionText: {
    fontSize: 12,
    color: '#333',
    fontWeight: '600',
    marginTop: 8,
    textAlign: 'center',
  },
  bottomSpacing: {
    height: 20,
  },
  modalContainer: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'flex-end',
  },
  modalContent: {
    backgroundColor: '#fff',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    padding: 20,
    maxHeight: height * 0.8,
  },
  modalHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: '#1a1a1a',
  },
  modalServiceCard: {
    width: (width - 60) / 2,
    height: 100,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  modalServiceIcon: {
    width: 36,
    height: 36,
    borderRadius: 18,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8,
  },
  modalServiceText: {
    fontSize: 12,
    fontWeight: '600',
    textAlign: 'center',
    color: '#333',
  },
});

export default HomePage;
