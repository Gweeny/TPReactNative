// src/app/(tabs)/index.tsx
	import { Link, useLocalSearchParams } from "expo-router";
	import { FlatList, Pressable, StyleSheet, Text, View } from "react-native";
	import { SafeAreaView } from "react-native-safe-area-context";
	 
	import { LIEUX } from "@/data/lieux";
	import { useLifecycleLog } from "@/hooks/use-lifecycle-log";
	 
	export default function LieuxScreen() {
	  useLifecycleLog("Accueil");
	  const { ville } = useLocalSearchParams<{ ville?: string }>();
	  const lieux = ville ? LIEUX.filter((lieu) => lieu.ville === ville) : LIEUX;
	 
	  return (
	    <SafeAreaView style={styles.container} edges={["top"]}>
	      <View style={styles.header}>
	        <Text style={styles.title}>{ville ? ville : "Tous les lieux"}</Text>
	        <Link href="/filtre" style={styles.filter}>
	          Filtrer
	        </Link>
	      </View>
	      <FlatList
	        data={lieux}
	        keyExtractor={(lieu) => lieu.id}
	        renderItem={({ item }) => (
	          <Link href={{ pathname: "/lieu/[id]", params: { id: item.id } }} asChild>
	            <Pressable style={styles.row}>
	              <Text style={styles.name}>{item.nom}</Text>
	              <Text style={styles.meta}>
	                {item.type} · {item.ville}
	              </Text>
	            </Pressable>
	          </Link>
	        )}
	      />
	    </SafeAreaView>
	  );
	}
	 
	const styles = StyleSheet.create({
	  container: { flex: 1 },
	  header: { flexDirection: "row", justifyContent: "space-between", alignItems: "center", padding: 16 },
	  title: { fontSize: 22, fontWeight: "700" },
	  filter: { fontSize: 16, color: "#208AEF" },
	  row: { padding: 16, borderBottomWidth: StyleSheet.hairlineWidth, borderBottomColor: "#ccc" },
	  name: { fontSize: 16, fontWeight: "600" },
	  meta: { fontSize: 13, color: "#666", marginTop: 2 },
	});