import Journey from "./main/Journey"
import data from "../data"

export default function Main(){
    const journyes = data.map(journey => {
        return <Journey journey={journey}/>
    })

    return (
        <main className="app-main">
            <div className="app-main__journeys">
                {journyes}
            </div>
        </main>
    )
}