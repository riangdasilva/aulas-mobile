import { ScrollView, View } from 'react-native';
import { useState, useEffect } from 'react';

import NavBar from './components/NavBar';
import Card from './components/Card';

import styles from './styles/styles';

function getAulasFromAPI() {
  return fetch('http://172.16.2.5:3333/aulas')
    .then((response) => response.json())
    .then((aulas) => aulas)
    .catch((error) => console.log(error));
}

export default function App() {
  const [text, onChangeText] = useState('');
  const [aulas, setAulas] = useState([]);
  const [filteredAulas, setFilteredAulas] = useState([]);
  const [periodo, setPeriodo] = useState('noite');
  const [periodos, setPeriodos] = useState([
    { label: 'Manhã', value: 'manha' },
    { label: 'Noite', value: 'noite' },
  ]);

  useEffect(() => {
    getAulasFromAPI().then((aulas) => {
      setAulas(aulas);
      setFilteredAulas(aulas);
    });
    //newAulas = require('./aulas.json');
    //setAulas(newAulas);
    //setFilteredAulas(newAulas);
  }, []);

  function getFormattedText(text) {
    return text
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .toUpperCase();
  }

  const findAulasByDisciplinaNome = (text) => {
    setFilteredAulas(
      aulas.filter((aula) => {
        const disciplinaNome = getFormattedText(aula.disciplina);
        if (
          disciplinaNome.includes(getFormattedText(text)) &&
          aula.periodo == periodo
        ) {
          return aula;
        }
      })
    );
  };

  const handleOnChangeText = (text) => {
    onChangeText(text);
    findAulasByDisciplinaNome(text);
  };

  //const handleOnChangePeriodo = (periodoValueText) => {
  //  periodoSetValue(periodoValueText);
  //  findAulasByDisciplinaNome(text);
  //};

  return (
    <View style={styles.App}>
      <NavBar
        onChangeText={handleOnChangeText}
        text={text}
        periodoValue={periodo}
        periodoSetValue={setPeriodo}
        periodoItems={periodos}
        periodoSetItems={setPeriodos}
      />
      <View style={styles.Main}>
        <ScrollView>
          {filteredAulas.map((filteredAula, index) => (
            <Card content={filteredAula} key={index} />
          ))}
        </ScrollView>
      </View>
    </View>
  );
}

//const styles = StyleSheet.create({
//  safeAreaView: {
//    marginTop: 32,
//    flex: 1,
//    backgroundColor: '#f5f5f5',
//  },
//
//  input: {
//    padding: 16,
//    backgroundColor: '#ffffff',
//    borderRadius: 10,
//    margin: 16,
//  },
//
//  scrollView: {
//    width: '100%',
//    paddingHorizontal: 16,
//  },
//
//  card: {
//    padding: 16,
//    marginBottom: 16,
//    backgroundColor: '#ffffff',
//    width: '100%',
//    borderRadius: 10,
//    shadowColor: '#000',
//  },
//
//  location: {
//    display: 'flex',
//    flexDirection: 'row',
//    gap: 8,
//  },
//});
//
//
//    <SafeAreaView style={styles.safeAreaView}>
//      <View>
//        <Text>Busca</Text>
//      </View>
//      <TextInput
//        style={styles.input}
//        onChangeText={handleOnChangeText}
//        value={text}
//      />
//      <ScrollView style={styles.scrollView}>
//        {filteredAulas.map((filteredAula, index) => (
//          <View style={styles.card} key={index}>
//            <Text>{filteredAula.disciplina.nome}</Text>
//            <View style={styles.location}>
//              <Text>Prédio {filteredAula.predio}</Text>
//              <Text>{filteredAula.andar}</Text>
//              <Text>Sala {filteredAula.sala}</Text>
//            </View>
//            <Text>{filteredAula.professor}</Text>
//          </View>
//        ))}
//      </ScrollView>
//    </SafeAreaView>
