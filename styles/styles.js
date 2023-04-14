import { StyleSheet } from 'react-native';

const primaryColor = '#88005b';
const secondaryColor = '#FF2A00';

const styles = StyleSheet.create({
  App: {
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
  },
  NavBar: {
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: primaryColor,
    paddingTop: 16 + 8,
    padding: 8,
    height: 128,
    alignItems: 'center',
  },
  Modal: {
    backgroundColor: '#FFFFFF',
    borderRadius: 4,
    margin: 16,
    padding: 16,
    width: '100%',
  },
  TextInput: {
    backgroundColor: '#F5F5F5',
    borderRadius: 4,
    padding: 8,
    marginBottom: 16,
    width: '100%',
  },
  ModalBackground: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    flex: 1,
    padding: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  ModalTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  Container: {
    flex: 1,
  },
  Logo: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  Main: {
    backgroundColor: '#F5F5F5',
    flex: 1,
    padding: 16,
  },
  Card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 4,
    padding: 16,
    marginBottom: 16,
  },
  Row: {
    display: 'flex',
    flexDirection: 'row',
    gap: 16,
  },
});

export default styles;
