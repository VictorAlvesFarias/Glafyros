import { headers } from "next/dist/client/components/headers";
import { defaultLocale, languageIsValid } from '../../../i18n.config'

function useServerInter(dictionary: string) {
    const headersList = headers();
    const internationalizationPath: any = headersList.get('x-url');
    const language = languageIsValid(internationalizationPath) ? internationalizationPath : defaultLocale

    return import(`@/dictionaries/${language}/${dictionary}.json`)
        .then((modulo) => {
            return modulo
        });
}

export default useServerInter

