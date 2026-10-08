// src/app/filtre.tsx
	import { useRouter } from "expo-router";
	import { Button, StyleSheet, Text, View } from "react-native";
	 
	import { VILLES } from "@/data/lieux";
	import { useLifecycleLog } from "@/hooks/use-lifecycle-log";
	 
	export default function FiltreScreen() {
	  const router = useRouter();
	  useLifecycleLog("Filtre");
	 
	  return (
	    <View style={styles.container}>
	      <Text style={styles.title}>Filtrer par ville</Text>
	      {VILLES.map((ville) => (
	        <Button
	          key={ville}
	          title={ville}
	          onPress={() => router.dismissTo({ pathname: "/", params: { ville } })}
	        />
	      ))}
	      <Button title="Toutes les villes" onPress={() => router.dismissTo({ pathname: "/", params: { ville: "" } })} />
	      <Button title="Fermer" onPress={() => router.dismiss()} />
	    </View>
	  );
	}
	 
	const styles = StyleSheet.create({
	  container: { flex: 1, padding: 24, gap: 12 },
	  title: { fontSize: 22, fontWeight: "700" },
	});