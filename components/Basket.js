import { useContext } from 'react'
import { BetslipContext } from 'context/BetslipContext'

const Basket = () => {

    const { setDecimalOdds, setFractionalOdds, oddsPreference, bets, menuOpen, removeBet } = useContext(BetslipContext)

    return(
        <>
        <div className="betslip">

                {bets.map((bet, index) => {

                    const {id, event, market, outcome, odds, date} = bet


                    const handleDelete = (e) => {
                        removeBet(bet)
                    }

                    const DisplayOdds = odds[oddsPreference]

                    return(
                        <div className="betslip-item" key={`bi-${id}`}>
                            <div>{outcome} @ {DisplayOdds}</div>
                            <div>{market}</div>
                            <div>{event}</div>
                            <button onClick={handleDelete}>Delete</button>
                        </div>
                    )
                })}
            <div>
                <div className="bet-now">Bet Now</div>
                <button onClick={setFractionalOdds}>Fractional</button>
                <button onClick={setDecimalOdds}>Decimal</button>
            </div>

        </div>
        

        <style jsx>{`
            .betslip {

                position: fixed;
                display: 'block';
                width: 280px;
                top: 0;
                bottom: 0;
                right: ${menuOpen ? '0' : '-100%'};
                max-height: 100%;
                max-width: 280px;
                overflow-x: hidden;
                overflow-y: scroll;
                background-color: grey;
                padding: 50px 10px 10px 10px;
                transition: right 0.9s ease-in-out;
                
            }

            .betslip-item {
                background-color: white;
                display: block;
            }

            .bet-now {
                display: block;
                padding: 10px;
                margin: 10px 0;
                background-color: red;
                color: white;
                text-align: center;
            }
        `}</style>
        </>
    )

}


export default Basket