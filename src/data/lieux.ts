// src/data/lieux.ts
	export type Lieu = {
	  id: string;
	  nom: string;
	  ville: string;
	  type: string;
	};
	 
	export const VILLES = ["Bordeaux", "Bègles", "Mérignac", "Talence", "Pessac"];
	 
	const TYPES = ["Marché", "Épicerie fine", "Primeur", "Boucherie", "Fromagerie"];
	const NOMS = ["Les Halles", "Le Comptoir", "Le Jardin", "L'Étal", "La Cave"];
	 
	export const LIEUX: Lieu[] = Array.from({ length: 60 }, (_, i) => ({
	  id: String(i + 1),
	  nom: `${NOMS[i % NOMS.length]} n°${i + 1}`,
	  ville: VILLES[i % VILLES.length],
	  type: TYPES[(i * 3) % TYPES.length],
	}));
	 
	export const getLieu = (id: string) => LIEUX.find((lieu) => lieu.id === id);