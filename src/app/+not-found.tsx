// src/app/+not-found.tsx
	import { Link, Stack } from "expo-router";
	import { StyleSheet, Text, View } from "react-native";
	 
	export default function NotFoundScreen() {
	  return (
	    <>
	      <Stack.Screen options={{ title: "Page introuvable" }} />
	      <View style={styles.container}>
	        <Text>Ce lien ne mène à aucun écran.</Text>
	        <Link href="/">Retour à l'accueil</Link>
	      </View>
	    </>
	  );
	}
	 
	const styles = StyleSheet.create({
	  container: { flex: 1, alignItems: "center", justifyContent: "center", gap: 12 },
	});