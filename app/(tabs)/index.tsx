import { StyleSheet, TextInput, TouchableOpacity, Alert } from 'react-native';
import { useState } from 'react';

import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';

import {calculateController} from '../../Controller/calculate';
import {dataCalculateInterface} from '../../Model/calculate';

export default function HomeScreen() {
  const [a, setA] = useState<string>('');
  const [b, setB] = useState<string>('');
  const [c, setC] = useState<string>('');
  const [result1, setResult1] = useState<string>('');
  const [result2, setResult2] = useState<string>('');

  const calculateRoots = () => {
    const data: dataCalculateInterface = {
      a: 0,
      b: 0,
      c: 0,
      result1: '',
      result2: ''
    };

    const controller = new calculateController(data);
    
    controller.changeA(parseFloat(a) || 0);
    controller.changeB(parseFloat(b) || 0);
    controller.changeC(parseFloat(c) || 0);
    
    const hasResults = controller.performCalculation();

    setResult1(controller.getResult1());
    setResult2(controller.getResult2());

    if (!hasResults) {
      Alert.alert(
        "Aviso",
        "No es una ecuación de segundo grado",
        [{ text: "Aceptar" }]
      );
    }
  };

  return (
    <ThemedView style={styles.appbackground}>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title" style={styles.titletext}>Ecuaciones de segundo grado</ThemedText>
      </ThemedView>
      <ThemedView>
        <ThemedText style={styles.giantText}>ax² + bx + c = 0</ThemedText>
      </ThemedView>

      <ThemedView style={styles.stepContainer}>
        <ThemedView style={styles.inputRow}>
          <ThemedText>a:</ThemedText>
          <TextInput
            style={styles.inputfields}
            keyboardType="numeric"
            value={a}
            onChangeText={setA}
          />
        </ThemedView>
        <ThemedView style={styles.inputRow}>
          <ThemedText>b:</ThemedText>
          <TextInput
            style={styles.inputfields}
            keyboardType="numeric"
            value={b}
            onChangeText={setB}
          />
        </ThemedView>
        <ThemedView style={styles.inputRow}>
          <ThemedText>c:</ThemedText>
          <TextInput
            style={styles.inputfields}
            keyboardType="numeric"
            value={c}
            onChangeText={setC}
          />
        </ThemedView>

        <TouchableOpacity style={styles.buton} onPress={() => { calculateRoots(); }}>
          <ThemedText style={styles.buton}>Resolver</ThemedText>
        </TouchableOpacity>
        <ThemedView style={styles.inputRow}>
          <ThemedText>Raíz 1: </ThemedText>
          <ThemedText style={styles.inputfields}>{result1}</ThemedText>
        </ThemedView>
        <ThemedView style={styles.inputRow}>
          <ThemedText>Raíz 2: </ThemedText>
          <ThemedText style={styles.inputfields}>{result2}</ThemedText>
        </ThemedView>
      </ThemedView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({

  appbackground: {
    borderRadius: 10,
    padding: 20,
    margin: 20,
  },
  buton: {
    alignItems: 'center',
    alignContent: 'center',
    color: 'blue',
    padding: 10
  },

  inputRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  
  inputfields: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    flex: 1,
  },

  giantText: {
    fontSize: 32,
    fontWeight: 'bold',
    fontStyle: 'italic',
    textAlign: 'center',
    marginTop: 20,
    marginBottom: 20,
    paddingHorizontal: 10,
  },

  titletext: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 16,
  },

  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 16,
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
