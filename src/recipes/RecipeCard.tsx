	import { memo, useEffect } from "react";
	import { StyleSheet, Text, View } from "react-native";
	import { counters } from "./perf";
	import type { Recipe } from "./recipes-api";
	import { Image } from 'react-native'; 
	const tarte = require('../../assets/images/tarte.jpg');
	export function RecipeCard({ recipe }: { recipe: Recipe }) {
	  useEffect(() => {
	    counters.mounted += 1;
	    return () => {
	      counters.mounted -= 1;
	    };
	  }, []);
	 
return (
  <View style={styles.card}>
    <Image
		source={tarte}
        style={styles.image}
    />
    <View>
      <Text style={styles.title}>{recipe.title}</Text>
      <Text style={styles.meta}>{recipe.minutes} min</Text>
    </View>
  </View>
);
	}
	 
	export const MemoRecipeCard = memo(RecipeCard);
	 
	const styles = StyleSheet.create({
      card: { flexDirection: "column", padding: 12, gap: 8 },
	  badge: { width: 48, height: 48, borderRadius: 8 },
	  title: { fontSize: 16, fontWeight: "600" },
	  meta: { fontSize: 13, color: "#666" },
	  image: { width: '100%', height: 120, borderRadius: 8, marginBottom: 8 },
	});