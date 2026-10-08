	import { useEffect, useState } from "react";
	 
	/** Nombre de cartes actuellement montées */
	export const counters = { mounted: 0 };
	 
	/** Log le temps de montage de l'écran, et renvoie le nombre de cartes montées */
	export function usePerf(label: string) {
	  const [start] = useState(() => performance.now());
	  const [mounted, setMounted] = useState(0);
	 
	  useEffect(() => {
	    console.log(`[perf] ${label} : monté en ${Math.round(performance.now() - start)} ms`);
	    const id = setInterval(() => setMounted(counters.mounted), 500);
	    return () => clearInterval(id);
	  }, [label, start]);
	 
	  return mounted;
	}