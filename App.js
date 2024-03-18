import { StatusBar } from 'expo-status-bar';
import { 
  Text, 
  View, 
  TextInput, 
  Pressable, 
  Image, 
  TouchableOpacity,

 } from 'react-native';
import { styles } from './styles';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native-stack'
import Routes from './src/routes';

export default function App() {
  return (

    <View style={styles.container}>
      <Image 
        source={require('../my-app/assets/vanmooshlogo.png')}
        style={styles.vanmoosh}
      />
      <View style={styles.containerForm}>
      <StatusBar style="auto" />
      <TextInput style={styles.formInput}

      placeholder="Email"
      autoCapitalize="none"
      autoComplete="email"
      />

      <TextInput style={styles.formInputSenha}
      placeholder="Informe a Senha" 
      keyboardType="email-adress"
      secureTextEntry
      />
      <Pressable style={styles.formButton}>
        <Text style={styles.textButton}>Login</Text>
      </Pressable>
      <View style={styles.subContainer}>
      <Pressable style={styles.subButton}>

        <Text style={styles.subTextButton}>Registre-se</Text>
      </Pressable>

      <Pressable style={styles.subButton}>
        <Text style={styles.subTextButton}>Esqueci minha Senha</Text>
      </Pressable>
      </View>
      </View>
    </View>
  );
}


