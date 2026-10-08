	// src/hooks/use-lifecycle-log.ts
	import { useFocusEffect } from "expo-router";
	import { useCallback, useEffect } from "react";
	 
	/** Log dans le terminal le montage et le focus d'un écran */
	export function useLifecycleLog(name: string) {
	  useEffect(() => {
	    console.log(`[nav] ${name} : monté`);
	    return () => console.log(`[nav] ${name} : démonté`);
	  }, [name]);
	 
	  useFocusEffect(
	    useCallback(() => {
	      console.log(`[nav] ${name} : au premier plan`);
	      return () => console.log(`[nav] ${name} : passé en arrière-plan`);
	    }, [name]),
	  );
	}