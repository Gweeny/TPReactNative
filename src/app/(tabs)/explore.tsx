// src/app/(tabs)/explore.tsx
	import * as Linking from "expo-linking";
	import { useState } from "react";
	import { Button, StyleSheet, Text } from "react-native";
	import { SafeAreaView } from "react-native-safe-area-context";
	 
	import { useLifecycleLog } from "@/hooks/use-lifecycle-log";
	 
	// Remplacer "tpexpo" par le scheme de votre app.json
	const SCHEME = "tpreactnative";
	 
	export default function LiensScreen() {
	  useLifecycleLog("Liens");
	  const [compteur, setCompteur] = useState(0);
	 
	  return (
	    <SafeAreaView style={styles.container} edges={["top"]}>
	      <Text style={styles.title}>Tester des liens</Text>
	      <Text>Compteur local : {compteur}</Text>
	      <Button title="+1" onPress={() => setCompteur((valeur) => valeur + 1)} />
	      <Button title="Ouvrir lieu/42" onPress={() => Linking.openURL(`${SCHEME}://lieu/42`)} />
	      <Button
	        title="Ouvrir lieu/42?from=partage"
	        onPress={() => Linking.openURL(`${SCHEME}://lieu/42?from=partage`)}
	      />
	      <Button title="Ouvrir lieu/999 (inconnu)" onPress={() => Linking.openURL(`${SCHEME}://lieu/999`)} />
	      <Button title="Ouvrir une route inconnue" onPress={() => Linking.openURL(`${SCHEME}://nimportequoi`)} />
	    </SafeAreaView>
	  );
	}
	 
	const styles = StyleSheet.create({
	  container: { flex: 1, padding: 24, gap: 12 },
	  title: { fontSize: 22, fontWeight: "700" },
	});