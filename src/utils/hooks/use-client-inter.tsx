import { usePathname } from "next/navigation";
import { languageFactory } from "../../../i18n.config";
import { useEffect, useState } from "react";

function useClientInter<T>(dictionaryFile: string, callback?: (e: any) => any) {
    const pathname = usePathname();
    const internationalizationPath = pathname.split("/")[1];
    const language = languageFactory(internationalizationPath);
    const [texts, setTexts] = useState<T | null>(null); // Inicializado corretamente

    useEffect(() => {
        let isMounted = true; 

        language(dictionaryFile).then((modulo) => {
            if (isMounted) {
                if (callback) {
                    callback(modulo);
                }
                setTexts(modulo);
            }
        });

        return () => {
            isMounted = false;
        };
    }, [language, dictionaryFile]);

    return texts;
}

export default useClientInter;
