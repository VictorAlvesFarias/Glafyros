import { headers } from "next/dist/client/components/headers";

export function usePathServerSide() {
    const headersList = headers();
    const internationalizationPath: any = headersList.get('x-url');
    
    return internationalizationPath
}
