	import { ScrollView, StyleSheet, Text, View } from "react-native";
	import { usePerf } from "./perf";
	import { RecipeCard } from "./RecipeCard";
	import { ALL_RECIPES } from "./recipes-api";
	 
	export function RecipeList() {
	  const mounted = usePerf("ScrollView + map");
	 
	  return (
	    <View style={{ flex: 1 }}>
	      <Text style={styles.counter}>Cartes montées : {mounted}</Text>
	      <ScrollView>
	        {ALL_RECIPES.map((recipe) => (
	          <RecipeCard key={recipe.id} recipe={recipe} />
	        ))}
	      </ScrollView>
	    </View>
	  );
	}
	 
	const styles = StyleSheet.create({
	  counter: { padding: 8, textAlign: "center", fontWeight: "600" },
	});