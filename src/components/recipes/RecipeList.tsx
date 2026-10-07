	import { FlatList, ListRenderItem, StyleSheet, Text, View } from "react-native";
	import { usePerf } from "./perf";
	import { MemoRecipeCard } from "./RecipeCard";
	import { ALL_RECIPES, Recipe } from "./recipes-api";
	 
	// Définis hors du composant : les références restent identiques d'un rendu à l'autre
	const renderItem: ListRenderItem<Recipe> = ({ item }) => <MemoRecipeCard recipe={item} />;
	const keyExtractor = (item: Recipe) => item.id;
	 
	export function RecipeList() {
	  const mounted = usePerf("FlatList + memo");
	 
	  return (
	    <View style={{ flex: 1 }}>
	      <Text style={styles.counter}>Cartes montées : {mounted}</Text>
	      <FlatList data={ALL_RECIPES} renderItem={renderItem} keyExtractor={keyExtractor} />
	    </View>
	  );
	}
	 
	const styles = StyleSheet.create({
	  counter: { padding: 8, textAlign: "center", fontWeight: "600" },
	});