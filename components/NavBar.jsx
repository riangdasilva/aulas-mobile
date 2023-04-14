import { View, Text, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import styles from '../styles/styles';

import Search from './Search';

import { useState } from 'react';

export default function NavBar({ onChangeText, text }) {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <View style={styles.NavBar}>
      <View style={styles.Container}>
        <Text style={styles.Logo}>UniMetrocamp Wyden</Text>
        <Text style={styles.Logo}>Aulas</Text>
      </View>
      <TouchableOpacity>
        <Ionicons
          onPress={() => setModalVisible(true)}
          name="search"
          size={32}
          color="white"
        />
      </TouchableOpacity>
      <Search
        onChangeText={onChangeText}
        text={text}
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
      />
    </View>
  );
}
