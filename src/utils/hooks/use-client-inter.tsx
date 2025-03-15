

import { usePathname } from "next/navigation";
import { defaultLocale, languageIsValid } from "../../../i18n.config";
import { useEffect } from "react";

function useClientInter(dictionary: string, callback: (e: any) => any) {
    const pathname = usePathname()
    const language = languageIsValid(pathname.split("/")[1]) ? pathname.split("/")[1] : defaultLocale

    return useEffect(() => {
        import(`@/dictionaries/${language}/${dictionary}.json`)
            .then((modulo) => {
                callback(modulo)
            });
    }, [])
}

export default useClientInter

