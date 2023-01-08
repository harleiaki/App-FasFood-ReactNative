import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons'; //icone fire
import { AntDesign } from '@expo/vector-icons';  //icone +
import { MaterialCommunityIcons } from '@expo/vector-icons';  //icone french-fries
import { MaterialIcons } from '@expo/vector-icons'; //icone drink

export default function AssetExample() {
 return (
    <View style={styles.container}>
      <Text style={styles.paragraph}> HamBurguer</Text>    
          <TouchableOpacity>
      <Image style={styles.logo} source={require('../assets/bovino.jpg')}/>    
          </TouchableOpacity>     
    <View style={styles.viewIcon }>
        <FontAwesome5 name="fire-alt" size={20} color="red" />  
      <Text style={{fontWeight: "bold"}}> 550 calorias. </Text>    
        <AntDesign name="clockcircle" size={20} color="black" />   
      <Text style={{fontWeight: "bold"}}> 10-20 min. </Text>    
        <FontAwesome5 name="hamburger" size={20} color="orange" />  
      <Text style={{fontWeight: "bold"}}> R$15.00 </Text>            
    </View>  
      <Text style={styles.texto}> HamBurguer o tradicional da casa, pão com gergilim, 500g de carne 
      bovina,queijo mussarela, queijo cheddar, alface, tomate, cebola roxa e maionese da casa.</Text>   
      <Text style={styles.paragraph}> HamBacon</Text>    
          <TouchableOpacity>   
      <Image style={styles.logo} source={require('../assets/bacon.jpg')}/>  
          </TouchableOpacity>     
    <View style={styles.viewIcon}>
        <FontAwesome5 name="fire-alt" size={20} color="red" />  
      <Text style={{fontWeight: "bold"}}> 700 calorias. </Text>    
        <AntDesign name="clockcircle" size={20} color="black" />   
      <Text style={{fontWeight: "bold"}}> 15-25 min. </Text>    
        <FontAwesome5 name="hamburger" size={20} color="orange" />  
        <AntDesign name="plus" size={10} color="black" />
        <MaterialCommunityIcons name="french-fries" size={20} color="red" />
      <Text style={{fontWeight: "bold"}}> R$25.00</Text>
    </View>
      <Text style={styles.texto}>HamBacon, pão brioche, 300g de carne bovina, 3 fatias de bacon 
      canadense, queijo cheddar, alface, tomate, picles e cebola rosa. Acompanha fritas.</Text>
      <Text style={styles.paragraph}> HamSoja</Text>       
          <TouchableOpacity>
      <Image style={styles.logo} source={require('../assets/soja.jpg')}/>   
          </TouchableOpacity>    
    <View style={styles.viewIcon}>
        <FontAwesome5 name="fire-alt" size={20} color="red" />  
      <Text style={{fontWeight: "bold"}}> 400 calorias. </Text>         
        <AntDesign name="clockcircle" size={20} color="black" />   
      <Text style={{fontWeight: "bold"}}> 20-30 min. </Text>    
        <FontAwesome5 name="hamburger" size={20} color="orange" />  
      <Text style={{fontWeight: "bold"}}> R$20.00</Text>
    </View>
      <Text style={styles.texto}>HamSoja, pão brioche, 300g de carne de soja, 2 fatias de queijo 
      tofu dourado, couve crispy e molho do chefe.
      </Text>
      <Text style={styles.paragraph}> HamFrango</Text>      
          <TouchableOpacity> 
      <Image style={styles.logo} source={require('../assets/refrigerante.jpg')}/>       
          </TouchableOpacity>     
    <View style={styles.viewIcon}>
        <FontAwesome5 name="fire-alt" size={20} color="red" />  
      <Text style={{fontWeight: "bold"}}> 700 calorias. </Text>     
        <AntDesign name="clockcircle" size={20} color="black" />   
      <Text style={{fontWeight: "bold"}}> 20-30 min. </Text>       
        <FontAwesome5 name="hamburger" size={20} color="orange" />  
        <AntDesign name="plus" size={10} color="black" />
        <MaterialIcons name="local-drink" size={24} color="blue" />
      <Text style={{fontWeight: "bold"}}> R$30.00</Text>
    </View>
      <Text style={styles.texto}>HamFrango, pão brioche, 300g de frango empanado, queijo cheddar, 
      alface, tomate e picles. Acompanha refrigerante.</Text>
      <Text style={styles.paragraph}> Batata</Text>    
          <TouchableOpacity>    
      <Image style={styles.logo} source={require('../assets/batata.jpg')}/>      
          </TouchableOpacity> 
    <View style={styles.viewIcon}>
        <FontAwesome5 name="fire-alt" size={20} color="red" />  
      <Text style={{fontWeight: "bold"}}> 200 calorias. </Text>   
        <AntDesign name="clockcircle" size={20} color="black" />   
      <Text style={{fontWeight: "bold"}}> 5-10 min. </Text>    
        <MaterialCommunityIcons name="french-fries" size={20} color="red" />
      <Text style={{fontWeight: "bold"}}> R$5.00</Text>
    </View>
      <Text style={styles.texto}>Batata, rústica com molho.</Text>
      <Text style={styles.paragraph}> HamBebida</Text>    
          <TouchableOpacity> 
      <Image style={styles.logo} source={require('../assets/bebida.jpg')}/>    
          </TouchableOpacity>
    <View style={styles.viewIcon}>
        <FontAwesome5 name="fire-alt" size={20} color="red" />  
      <Text style={{fontWeight: "bold"}}> 90 calorias. </Text>   
        <AntDesign name="clockcircle" size={20} color="black" />   
      <Text style={{fontWeight: "bold"}}> 5-10 min. </Text>    
        <MaterialIcons name="local-drink" size={24} color="blue" />
      <Text style={{fontWeight: "bold"}}> R$10.00</Text>      
    </View>
      <Text style={styles.texto}>Bebida especialidade da casa. Soda com frutas vermelhas</Text>
    </View>   
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    borderRadius: 30,
    backgroundColor: '#E0FFFF',
  },
  //espaço texto
  paragraph: {
    margin: 10,
    marginTop: 30,
    marginBottom: 5,
    fontSize: 27,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  //texto
  texto:{
    paddingTop: 0,
    margin: 2,
    marginTop: 10,
    marginBottom: 4,
    fontSize: 15,
    fontWeight: 'normal',
    textAlign: 'center',
  },
  //imagems
  logo: {
    left:75,
    height: 150,
    width: 200,    
    marginVertical:5,
    marginBottom: 5,
  },
  //icones
  viewIcon: { 
    flex: 1,
    justifyContent: "center",
    paddingTop: 20,
    marginTop: -170,
    marginBottom: 20,
    marginRight:200,
},
});