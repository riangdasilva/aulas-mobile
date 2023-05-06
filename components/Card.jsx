import { View, Text, TouchableOpacity } from 'react-native';
import styles from '../styles/styles';

export default function Card({ content }) {
  return (
    <View style={styles.Card}>
      <Text>{content.codigo}</Text>
      <Text style={{ fontWeight: 'bold' }}>{content.disciplina}</Text>
      <Text>{content.professor}</Text>
      <View style={styles.Row}>
        <Text>Prédio: {content.predio}</Text>
        <Text>Andar: {content.andar}</Text>
        <Text>Sala: {content.sala}</Text>
      </View>
    </View>
  );
}
