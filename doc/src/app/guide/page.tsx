import {permanentRedirect} from 'next/navigation'
import {sidebarElements} from "@/src/data/sidebarItems.ts";


const GuideIndexPage = () => {
    permanentRedirect(`/guide/${sidebarElements[0].items[0].slug}`)
}

export default GuideIndexPage