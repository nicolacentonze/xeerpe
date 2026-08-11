import {redirect} from 'next/navigation'
import {sidebarElements} from "@/src/data/sidebarItems.ts";


export default function GuideIndexPage() {
    redirect(`/guide/${sidebarElements[0].items[0].slug}`)
}
