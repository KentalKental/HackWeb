import { Dice1 } from "lucide-react"
 {/*
  Heads up! 👋

  Plugins:
    - @tailwindcss/forms
*/}

import TabHeader from "../TabHeader"
export const Information = () => {
    return (
        <div className="h-screen">
            <TabHeader tabs={[ "Description", "Rules",   "Requirements", "Participants", "Resources", "Submissions", "Schedule"]}></TabHeader>
        </div>
    )
}