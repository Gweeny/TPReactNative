// src/app/lieu/[id].tsx
import { Stack, useLocalSearchParams, useRouter, useFocusEffect } from "expo-router";
import { useState, useCallback } from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import { getLieu } from "@/data/lieux";
import { useLifecycleLog } from "@/hooks/use-lifecycle-log";

export default function LieuScreen() {
  const { id, from, ref } = useLocalSearchParams<{ id: string; from?: string; ref?: string }>();
  const router = useRouter();
  const [compteur, setCompteur] = useState(0);
  useLifecycleLog(`Lieu ${id}`);

  // Validation : id doit être un nombre
  if (isNaN(Number(id))) {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Lieu introuvable : {id}</Text>
        <Button title="Retour à l'accueil" onPress={() => router.replace("/")} />
      </View>
    );
  }

  const lieu = getLieu(id);
  if (!lieu) {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Lieu introuvable : {id}</Text>
        <Button title="Retour à l'accueil" onPress={() => router.replace("/")} />
      </View>
    );
  }

  useFocusEffect(
    useCallback(() => {
      const timer = setInterval(() => console.log(`tick ${lieu.nom}`), 1000);
      return () => clearInterval(timer);
    }, [lieu.nom]),
  );

  const suivant = String(Number(id) + 1);

  return (
    <View style={styles.container}>
      <Stack.Screen options={{ title: lieu.nom }} />
      <Text style={styles.title}>{lieu.nom}</Text>
      <Text>{lieu.type} · {lieu.ville}</Text>
      {from ? <Text>Ouvert depuis : {from}</Text> : null}
      {ref ? <Text>Ref : {ref}</Text> : null}
      <Text>Compteur local : {compteur}</Text>
      <Button title="+1" onPress={() => setCompteur((valeur) => valeur + 1)} />
      <Button
        title={`Voir le lieu n°${suivant}`}
        onPress={() => router.push({ pathname: "/lieu/[id]", params: { id: suivant, from: `lieu ${id}` } })}
      />
      <Button title="Retour" onPress={() => router.back()} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 24, gap: 12 },
  title: { fontSize: 22, fontWeight: "700" },
});