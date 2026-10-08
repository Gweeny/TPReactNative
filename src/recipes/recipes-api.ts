	export type Recipe = {
	  id: string;
	  title: string;
	  minutes: number;
	};
	 
	export const TOTAL_RECIPES = 500;
	const PAGE_SIZE = 30;
	 
	export const ALL_RECIPES: Recipe[] = Array.from({ length: TOTAL_RECIPES }, (_, i) => ({
	  id: `recipe-${i}`,
	  title: `Recette n°${i + 1}`,
	  minutes: 10 + (i % 80),
	}));
	 
	/** Fausse API paginée, avec 600 ms de latence */
	export async function fetchRecipes(page: number) {
	  await new Promise((resolve) => setTimeout(resolve, 600));
	  const start = page * PAGE_SIZE;
	  
	  return {
	    items: ALL_RECIPES.slice(start, start + PAGE_SIZE),
	    hasMore: start + PAGE_SIZE < TOTAL_RECIPES,
	  };
	}