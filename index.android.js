import React from 'react';
import { Text, AppRegistry, View, Image, TouchableOpacity ,Alert} from 'react-native';

//Formatações
const Estilos = {
    principal:{
        flex:1,
        justifyContent: 'center',
        alignItems:'center'
    },
    imagem:{
        justifyContent: 'flex-start',
        padding:5
    },
    botao: {
       backgroundColor:'#538530',
       paddingVertical:10,
       paddingHorizontal:40,
       marginTop:20
      },
      textoBotao:{
        color:'#fff'
      }
  

     };
  const gerarNovaFrase = () => {
          var numeroAleatorio = Math.random();
          numeroAleatorio = Math.floor (numeroAleatorio * 5)

      var frases = Array();
      frases[0] = 'O importante não é vencer todos os dias, mas lutar sempre'; 
      frases[1] = 'Maior que a tristeza de não haver vencido é a vergonha de não ter lutado!'; 
      frases[2] = 'É melhor conquistar a si mesmo do que vencer mil batalhas.'; 
      frases[3] = 'Há uma exuberância na bondade que parece ser maldade.'; 
      frases[4] = 'O medo de perder tira a vontade de ganhar.'; 


      var fraseEscolhida = frases[numeroAleatorio];
     Alert.alert(fraseEscolhida);
  };


//componente
const App = () => {

 const { principal, botao, textoBotao } = Estilos;

    return (
      <View style= { principal }>
          <Image source = {require ('./imgs/logo.png')}/>
          <TouchableOpacity 
            onPress={gerarNovaFrase}
            style={botao}>
           
             <Text style={textoBotao}>Nova Frase</Text>
          </TouchableOpacity>
      </View>  
    );
};

//Renderizar
AppRegistry.registerComponent('App2', () => App);