import { headers } from "next/dist/client/components/headers";

export function getPathServerSide() {
    const headersList = headers();
    const internationalizationPath: any = headersList.get('x-url');
    
    return internationalizationPath
}
