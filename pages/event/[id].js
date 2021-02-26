import Wrapper from 'components/Wrapper'
import OddsButton from 'components/OddsButton'

export default function event(data) {

    const {
        ev_id: event_id,
        desc: event_title,
        ev_class_name: event_sport,
        ev_type_name: event_competition,
        start_time: unix,
        market_sort,
        markets,
    } = data

    return (
        <Wrapper>
            <h1>{event_title}</h1>
            <span>{new Date(parseInt(unix) * 1000).toString()}</span>
            <h3>{event_sport}</h3>

            {market_sort.map((marketKey) => {
                return (
                    <Market key={marketKey} {...{...markets[marketKey], event_id, event_title, event_sport, event_competition, unix,  }} />
                )
            })}
        </Wrapper>

    )
}

const Market = ({name: market_name, ev_mkt_id: market_id, outcomes, outcome_sort, notes: { essential }, event_id, event_title, event_sport, event_competition, unix}) => {
    if (essential) return null
    return (
        <>
            
            {outcome_sort.map((outcomeKey) => {
                return(
                    <Outcome key={outcomeKey} {...{...outcomes[outcomeKey], event_id, event_title, event_sport, event_competition, unix, market_name, market_id }} />
                )
            })}

        </>
    )
}

const Outcome = (props) => {

    const {ev_oc_id: outcome_id, lp_disp_fraction: odds, lp_disp_decimal: oddsDecimal, desc: outcome_name, event_id, event_title, event_sport, event_competition, unix, market_name, market_id } = props

    return(
        <>
        <tr>
            <td>{outcome_name}</td>
            <td className="odds">
                <OddsButton {...{event_id, event_title, event_sport, event_competition, unix, market_name, market_id, outcome_id, outcome_name, odds, oddsDecimal}} />
            </td>
        </tr>
        <style jsx>{`
                td {
                    padding: 5px 0;
                }
                .odds {
                    width: 100px;
                    text-align: center;
                }
        `}</style>
        </>
    )
}




export async function getServerSideProps(context) {

    const { query: { id } } = context

    const data = await fetch(`http://services.skybet.com/sportsapi/v2/event/${id}?api_user=`)
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