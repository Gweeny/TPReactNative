// src/app/lieu/[id].tsx
	import { Stack, useLocalSearchParams, useRouter } from "expo-router";
	import { useState } from "react";
	import { Button, StyleSheet, Text, View } from "react-native";
	 import { useFocusEffect } from "expo-router";
	import { getLieu } from "@/data/lieux";
	import { useLifecycleLog } from "@/hooks/use-lifecycle-log";
	 import { useCallback } from "react";
     
	export default function LieuScreen() {
	  const { id, from } = useLocalSearchParams<{ id: string; from?: string }>();
	  const router = useRouter();
	  const [compteur, setCompteur] = useState(0);
	  useLifecycleLog(`Lieu ${id}`);

	  const lieu = getLieu(id);
	  if (!lieu) {
	    return (
	      <View style={styles.container}>
	        <Text style={styles.title}>Lieu introuvable : {id}</Text>
	        <Button title="Retour à l'accueil" onPress={() => router.replace("/")} />
	      </View>
	    );
	  }

              // Le timer ne tourne que lorsque l'écran est au premier plan
    useFocusEffect(
      useCallback(() => {
        const id = setInterval(() => console.log(`tick ${lieu.nom}`), 1000);
        return () => clearInterval(id);
      }, [lieu.nom]),
    );
	 
	 
	  const suivant = String(Number(id) + 1);
	 
	  return (
	    <View style={styles.container}>
	      <Stack.Screen options={{ title: lieu.nom }} />
	      <Text style={styles.title}>{lieu.nom}</Text>
	      <Text>
	        {lieu.type} · {lieu.ville}
	      </Text>
	      {from ? <Text>Ouvert depuis : {from}</Text> : null}
	      <Text>Compteur local : {compteur}</Text>
	      <Button title="+1" onPress={() => setCompteur((valeur) => valeur + 1)} />
	      <Button
	        title={`Voir le lieu n°${suivant}`}
	        onPress={() =>
	          router.push({ pathname: "/lieu/[id]", params: { id: suivant, from: `lieu ${id}` } })
	        }
	      />
	      <Button title="Retour" onPress={() => router.back()} />
	    </View>
	  );
	}
	 
	const styles = StyleSheet.create({
	  container: { flex: 1, padding: 24, gap: 12 },
	  title: { fontSize: 22, fontWeight: "700" },
	});