import { BetslipContext } from 'context/BetslipContext'
import { useContext } from 'react'



const OddsButton = (props) => {

    const { oddsPreference, addBet, removeBet, bets } = useContext(BetslipContext)

    
    const {event_id, event_title, event_sport, event_competition, unix, market_name, market_id, outcome_id, outcome_name, odds, oddsDecimal} = props


    const currentBet = {
        id: outcome_id,
        event: event_title,
        market: market_name,
        outcome: outcome_name,
        odds: { 1: odds, 2: oddsDecimal },       
        date: unix,
    }

    const inBetslip = bets.find(bet => bet.id === currentBet.id) !== undefined ? true : false

    const toggleBetslip = (e) => {
        if (inBetslip){
            removeBet(currentBet)
        } else {
            addBet(currentBet)
        }
    }

    const DisplayOdds = oddsPreference === 1 ? odds : oddsDecimal

    return (
        <>
            <button className="button" onClick={toggleBetslip}>{DisplayOdds}</button>
            <style jsx>{`
                .button {
                    background-color: ${inBetslip ? 'green' : 'red'};
                    padding: 10px;
                    display: block;
                    color: white; 
                }
            `}</style>
        </>
    )
}

export default OddsButton