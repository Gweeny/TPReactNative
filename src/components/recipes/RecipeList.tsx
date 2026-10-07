	import { FlashList } from "@shopify/flash-list";
	import { StyleSheet, Text, View } from "react-native";
	import { usePerf } from "./perf";
	import { MemoRecipeCard } from "./RecipeCard";
	import { ALL_RECIPES } from "./recipes-api";
	 
	export function RecipeList() {
	  const mounted = usePerf("FlashList");
	 
	  return (
	    <View style={{ flex: 1 }}>
	      <Text style={styles.counter}>Cartes montées : {mounted}</Text>
	      <FlashList
	        data={ALL_RECIPES}
	        renderItem={({ item }) => <MemoRecipeCard recipe={item} />}
	        keyExtractor={(item) => item.id}
	      />
	    </View>
	  );
	}
	 
	const styles = StyleSheet.create({
	  counter: { padding: 8, textAlign: "center", fontWeight: "600" },
	});