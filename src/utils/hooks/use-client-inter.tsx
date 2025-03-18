import { usePathClientSide } from "@/i18n/i18n.client";
import { languageFactory } from "../../i18n/i18n.config";
import { useEffect, useState } from "react";

function useClientInter<T>(dictionaryFile: string, callback?: (e: any) => any) {
    const internationalizationPath = usePathClientSide();
    const language = languageFactory(internationalizationPath);
    const [texts, setTexts] = useState<T | null>(null);

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
