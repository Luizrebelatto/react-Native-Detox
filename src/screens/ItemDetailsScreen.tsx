import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

interface Item {
  id: string;
  title: string;
  description: string;
}

interface ItemDetailsScreenProps {
  navigation: any;
  route: {
    params: {
      item: Item;
    };
  };
}

const ItemDetailsScreen: React.FC<ItemDetailsScreenProps> = ({
  navigation,
  route,
}) => {
  const { item } = route.params;

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => navigation.goBack()}
      >
        <Text style={styles.backButtonText}>Back</Text>
      </TouchableOpacity>
      <ScrollView style={styles.content}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.description}>{`Details ${item.description}`}</Text>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 50
  },
  backButton: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  backButtonText: {
    fontSize: 16,
    color: '#007AFF',
    fontWeight: '600',
  },
  content: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  description: {
    fontSize: 16,
    color: '#333',
    lineHeight: 24,
  },
});

export default ItemDetailsScreen; 