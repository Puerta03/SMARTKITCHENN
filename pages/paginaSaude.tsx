import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Platform, StatusBar, ScrollView } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

const alturaStatusBar = StatusBar.currentHeight;

export function Saude() {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" translucent={true} backgroundColor="#f1f1f1" />
      <Text style={styles.header}>Dicas de autocuidado e saúde</Text>
      <View style={styles.form}>
        <Text style={styles.label}>Informe sua dúvida:</Text>
        <TextInput
          placeholder="Qual os sintomas?"
          style={styles.input}
        />
        <TextInput
          placeholder="Em que momento os sintomas apareceram: (ex: 3 dias atrás)."
          style={styles.input}
        />
      </View>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Obter dicas</Text>
        <MaterialIcons name="search" size={24} color="#FFF" />
      </TouchableOpacity>

      <ScrollView style={styles.containerScroll} showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 24, marginTop: 4 }}>
        <View style={styles.content}>
          <Text style={styles.title}>Analisando suas preferências...</Text>
        </View>

        <View style={styles.content}>
          <Text style={styles.title}>Sua recomendação de saúde e autocuidado:</Text>
          <Text style={styles.recomendacao}></Text>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f1f1f1',
    alignItems: 'center',
    paddingTop: 20,
  },
  header: {
    fontSize: 32,
    fontWeight: 'bold',
    paddingTop: Platform.OS === 'android' ? alturaStatusBar : 54,
  },
  form: {
    backgroundColor: '#FFF',
    width: '90%',
    borderRadius: 8,
    padding: 16,
    marginTop: 16,
    marginBottom: 8,
  },
  label: {
    fontWeight: 'bold',
    fontSize: 18,
    marginBottom: 8,
  },
  input: {
    borderWidth: 1,
    borderRadius: 4,
    borderColor: '#94a3b8',
    padding: 8,
    fontSize: 16,
    marginBottom: 16,
  },
  button: {
    backgroundColor: '#FF5656',
    width: '90%',
    borderRadius: 8,
    flexDirection: 'row',
    padding: 14,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 8,
  },
  buttonText: {
    fontSize: 18,
    color: '#FFF',
    fontWeight: 'bold',
  },
  content: {
    backgroundColor: '#FFF',
    padding: 16,
    width: '100%',
    marginTop: 16,
    borderRadius: 8,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 14,
  },
  recomendacao: {
    fontSize: 16,
    textAlign: 'center',
    marginTop: 10,
    color: '#333',
  },
  containerScroll: {
    width: '90%',
    marginTop: 8,
  },
});
