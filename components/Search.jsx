import { View, Text, Button, Modal, TextInput } from 'react-native';
import styles from '../styles/styles';
export default function NavBar({
  onChangeText,
  text,
  modalVisible,
  setModalVisible,
}) {
  return (
    <Modal transparent={true} visible={modalVisible}>
      <View style={styles.ModalBackground}>
        <View style={styles.Modal}>
          <Text style={styles.ModalTitle}>Pesquisar por disciplina</Text>
          <TextInput
            style={styles.TextInput}
            onChangeText={onChangeText}
            value={text}
          />
          <Button
            title="Fechar"
            color="#FF2A00"
            onPress={() => setModalVisible(false)}
          />
        </View>
      </View>
    </Modal>
  );
}
