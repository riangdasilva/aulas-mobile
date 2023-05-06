import { View, Text, Button, Modal, TextInput } from 'react-native';
import { useState } from 'react';
import styles from '../styles/styles';
import DropDownPicker from 'react-native-dropdown-picker';
export default function NavBar({
  periodoValue,
  periodoSetValue,
  periodoItems,
  periodoSetItems,
  onChangeText,
  text,
  modalVisible,
  setModalVisible,
}) {
  const [open, setOpen] = useState(false);

  return (
    <Modal transparent={true} visible={modalVisible}>
      <View style={styles.ModalBackground}>
        <View style={styles.Modal}>
          <View style={styles.filterHeader}>
            <Text style={styles.ModalTitle}>Pesquisar por disciplina</Text>
            <Button
              title="X"
              color="#88005b"
              onPress={() => setModalVisible(false)}
            />
          </View>
          <TextInput
            style={styles.TextInput}
            onChangeText={onChangeText}
            value={text}
          />
          <DropDownPicker
            open={open}
            value={periodoValue}
            items={periodoItems}
            setOpen={setOpen}
            setValue={periodoSetValue}
            setItems={periodoSetItems}
          />
        </View>
      </View>
    </Modal>
  );
}
