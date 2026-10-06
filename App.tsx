import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Animated, Easing, Pressable } from 'react-native';
import { useEffect, useRef } from 'react';
import * as Updates from 'expo-updates';

export default function App() {
  const spin = useRef(new Animated.Value(0)).current;
  const bounce = useRef(new Animated.Value(0)).current;
  const wiggle = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.loop(
      Animated.timing(spin, { toValue: 1, duration: 800, easing: Easing.linear, useNativeDriver: true })
    ).start();
    Animated.loop(
      Animated.sequence([
        Animated.timing(bounce, { toValue: -80, duration: 300, useNativeDriver: true }),
        Animated.timing(bounce, { toValue: 0, duration: 300, useNativeDriver: true }),
      ])
    ).start();
    Animated.loop(
      Animated.sequence([
        Animated.timing(wiggle, { toValue: 15, duration: 100, useNativeDriver: true }),
        Animated.timing(wiggle, { toValue: -15, duration: 100, useNativeDriver: true }),
      ])
    ).start();
  }, []);

  const spinInterpolate = spin.interpolate({ inputRange: [0, 1], outputRange: ['0deg', '360deg'] });

  const checkForUpdates = async () => {
    try {
      const update = await Updates.checkForUpdateAsync();
      if (update.isAvailable) {
        await Updates.fetchUpdateAsync();
        await Updates.reloadAsync();
      } else {
        alert('Aucune update disponible !');
      }
    } catch (e) {
      alert('Erreur : ' + e);
    }
  };

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.square, { transform: [{ rotate: spinInterpolate }] }]} />
      <Animated.Text style={[styles.title, { transform: [{ translateY: bounce }] }]}>
        🤡 LOOMS 🤡
      </Animated.Text>
      <Animated.View style={[styles.circle, { transform: [{ translateX: wiggle }] }]} />
      <View style={styles.triangle} />
      <Text style={styles.sub}>🌈 tout va bien 🌈</Text>
      <Pressable style={styles.button} onPress={checkForUpdates}>
        <Text style={styles.buttonText}>🔄 Vérifier les mises à jour</Text>
      </Pressable>
      <Text style={styles.sub}>📦 {Updates.updateId ?? "pas d'update OTA"}</Text>
      <Text style={styles.sub}>📡 {Updates.channel ?? 'pas de channel'}</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#00ff2a', alignItems: 'center', justifyContent: 'center', gap: 20 },
  square: { width: 80, height: 80, backgroundColor: '#00ff00', borderWidth: 5, borderColor: '#ff0000' },
  circle: { width: 100, height: 100, borderRadius: 50, backgroundColor: '#ffff00', borderWidth: 8, borderColor: '#0000ff' },
  triangle: { width: 0, height: 0, borderLeftWidth: 50, borderRightWidth: 50, borderBottomWidth: 100, borderLeftColor: 'transparent', borderRightColor: 'transparent', borderBottomColor: '#ff6600' },
  title: { fontSize: 36, fontWeight: 'bold', color: '#00ffff', textShadowColor: '#ff0000', textShadowOffset: { width: 3, height: 3 }, textShadowRadius: 1 },
  sub: { fontSize: 18, color: '#ffffff', backgroundColor: '#000000', padding: 8 },
  button: { backgroundColor: '#ff0000', padding: 15, borderRadius: 0, borderWidth: 3, borderColor: '#00ff00' },
  buttonText: { color: '#ffff00', fontSize: 16, fontWeight: 'bold' },
});