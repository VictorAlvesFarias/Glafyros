import { headers } from "next/dist/client/components/headers";
import { languageFactory } from '../../../i18n.config'

function useServerInter<T>(dictionaryFile: string) {
    const headersList = headers();
    const internationalizationPath: any = headersList.get('x-url');
    const language = languageFactory(internationalizationPath)

    return language(dictionaryFile).then((modulo: T | null) => {
        return modulo
    });
}

export default useServerInter

