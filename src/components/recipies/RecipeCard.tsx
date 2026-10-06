	import { memo, useEffect } from "react";
	import { StyleSheet, Text, View } from "react-native";
	import { counters } from "./perf";
	import type { Recipe } from "./recipes-api";
	 
	export function RecipeCard({ recipe }: { recipe: Recipe }) {
	  useEffect(() => {
	    counters.mounted += 1;
	    return () => {
	      counters.mounted -= 1;
	    };
	  }, []);
	 
	  return (
	    <View style={styles.card}>
	      <View style={[styles.badge, { backgroundColor: `hsl(${(recipe.minutes * 4) % 360}, 70%, 60%)` }]} />
	      <View>
	        <Text style={styles.title}>{recipe.title}</Text>
	        <Text style={styles.meta}>{recipe.minutes} min</Text>
	      </View>
	    </View>
	  );
	}
	 
	export const MemoRecipeCard = memo(RecipeCard);
	 
	const styles = StyleSheet.create({
	  card: { flexDirection: "row", alignItems: "center", gap: 12, padding: 12 },
	  badge: { width: 48, height: 48, borderRadius: 8 },
	  title: { fontSize: 16, fontWeight: "600" },
	  meta: { fontSize: 13, color: "#666" },
	});