import { StatusBar } from 'expo-status-bar';
import { 
  StyleSheet,
  Text,
  View,
  ScrollView,
  TextInput,
  Image,
  SafeAreaView,
  TouchableOpacity,
  SectionList,
  Alert,
} from 'react-native';
import { useState } from 'react';
import { phones, tablets, books, pc } from './data';

const sections = [
  {
    title: 'Celulares',
    data: phones,
  },
  {
    title: 'Tablets',
    data: tablets,
  },
  {
    title: 'PC',
    data: pc,
  },
  {
    title: 'Libros',
    data: books,
  },
]

const allSections = sections.map(section => section.title);
const allProducts = sections.reduce((products, section) => {
  return products.concat(section.data);
}, []);

export default function App() {

  const [filter, setFilter] = useState('');
  const [chipActivated, setChipActivated] = useState(false);
  const [sectionActivated, setSectionActivated] = useState('');

  function filterByName(arr, searchString) {
    return arr.filter(function(obj) {
      return obj.name.toLowerCase().includes(searchString.toLowerCase());
    });
  }
  
  function productsList(){
    if (filter === ''){
      if (chipActivated) {
        const aux = sections.find(section => section.title.includes(sectionActivated));
        return [ aux ];
      }
      return sections;
    } else {
      const auxObject = [
        {
          title: 'Resultado:',
          data: filterByName(allProducts, filter),
        }
      ];
      return auxObject;
    }
  }

  function activate(section){
    if (chipActivated && sectionActivated === section){
      setChipActivated(false);
      setSectionActivated('');
    } else {
      setChipActivated(true);
      setSectionActivated(section);
    }
  }

  const addToCart = (product) => {
    Alert.alert('Añadido al carro', `Se ha añadido ${product} al carro`, [
      {text: 'OK', onPress: () => ''},
    ]);
  }

  return (
    <>
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          onChangeText={setFilter}
          value={filter}
          placeholder="Buscar un producto"
          keyboardType="text"
          maxLength={20}
        />
        {filter === '' && (
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={true}
            contentContainerStyle={styles.scrollViewContent}
          >
            {allSections.map((section) => (
              <TouchableOpacity
                style={
                  sectionActivated === section
                    ? [styles.chip, styles.chipActivated]
                    : styles.chip
                }
                onPress={() => activate(section)}
              >
                <Text style={{ fontSize: 13, fontWeight: 'bold', color: '#333333' }}>{section}</Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        )}
      </View>
      <SafeAreaView style={styles.safeViewContainer}>
        <SectionList
          sections={productsList()}
          keyExtractor={(item) => item.id}
          renderItem={({ item, index }) => {
              return (
                <>
                  <View style={styles.productStyle} key={index}>
                    <View style={styles.imageArea}>
                      <Image source={{ uri: item.image }} resizeMode="cover" style={styles.productImage} />
                    </View>
                    <View style={styles.descriptionArea}>
                      <Text style={styles.text}>{item.name}</Text>
                      <Text>{item.description}</Text>
                      <Text>{item.price}</Text>
                    </View>
                    <View style={styles.buttonArea}>
                      <TouchableOpacity style={styles.button} onPress={() => addToCart(item.name)} >
                        <Text>+</Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                </>
              );
          }}
          renderSectionHeader={({section: {title}}) => (
            <View style={{ flex: 1, padding: 10, backgroundColor: '#fafafa' }}>
              <Text style={styles.header}>{title}</Text>
            </View>
          )}
        />
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  safeViewContainer: {
    flex: 7,
    paddingTop: StatusBar.currentHeight,
  },
  text: {
    color: '#000000',
    fontSize: 14,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 60,
  },
  productStyle: {
    flex: 0.3,
    flexDirection: 'row',
    paddingVertical: 20,
    paddingHorizontal: 10,
  },
  productImage: {
    flex: 1,
  },
  imageArea: {
    flex: 0.7,
    height: '100%',
    width: '33%',
    maxHeight: 50,
    maxWidth: 50,
  },
  descriptionArea: {
    flex: 2,
    paddingHorizontal: 10,
  },
  buttonArea: {
    flex: 0.5,
    width: '17%',
    justifyContent: 'center',
  },
  button: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
    borderRadius: 100,
    backgroundColor: '#8CB4FF'
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
    width: '90%',
  },
  header: {
    fontSize: 20,
  },
  chip: {
    display: 'flex',
    backgroundColor: '#d3d3d3',
    height: 20,
    width: '20%',
    margin: 5,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  chipActivated: {
    backgroundColor: '#8CB4FF',
  },
  scrollViewContent: {
    flexDirection: 'row',
    width: '100%',
  },
});
