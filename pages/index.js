
import DateTime from 'components/DateTime'
import Wrapper from 'components/Wrapper'
import Link from 'next/link'

export default function Home({ events, events_sort, name = false }) {



    return (
        <Wrapper>
            <h1>Betting Markets for {name}</h1>
            <div>
                {events_sort.map((eventSortKey) => {
                    return (
                        <TopLevelEvent key={eventSortKey} {...events[eventSortKey]} />
                    )
                })}
            </div>
        </Wrapper>

    )
}


// takes a competition event e.g Premier league, and displays all events within
const TopLevelEvent = ({ name, events, event_sort }) => {
    return (
        <div>
            <h2>{name}</h2>
            <div>
                {event_sort.map((eventSortKey) => {

                    const props = {
                        ...events[eventSortKey],
                        ...{
                            id: eventSortKey
                        }
                    }

                    return <SecondLevelEvent key={eventSortKey} {...props} />
                })}
            </div>
        </div>
    )
}
// displays a 
const SecondLevelEvent = ({ desc, start_time, id, outright, settled }) => {
    if (settled) return null
    return(
        <Link href={`/event/${id}`}>
            <a>
                <h4>{desc}</h4>
            </a>
        </Link>
    )
}




export async function getServerSideProps(context) {
    const data = await fetch(`http://services.skybet.com/sportsapi/v2/football/events/1?api_user=`)
        .then(res => res.json())
        .then(resp => resp)
        .catch((error) => {
            console.log(error)
            return false
        })

    return {
        props: { ...data }
    }
}