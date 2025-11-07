import React, { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function Page() {
  const [name, setName] = useState<string>('');
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bem-vindo ao meu primeiro app!</Text>

      <TextInput
        style={styles.input}
        placeholder="Digite seu nome"
        value={name}
        onChangeText={setName}
      />

      <Button title="Mostrar nome" onPress={() => alert(`Olá, ${name}!`)} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2c2727ff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#aaa',
    borderRadius: 8,
    padding: 10,
    width: '80%',
    marginBottom: 20,
    backgroundColor: '#fff',
  },
});
