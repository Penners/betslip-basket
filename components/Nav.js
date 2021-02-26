import Link from 'next/link'
import { BetslipContext } from 'context/BetslipContext'
import { useContext } from 'react'

const Nav = () => {

    const { bets, toggleMenu } = useContext(BetslipContext)

    const betsCount = bets.length

    return(
        <>
        <div className="nav">
            <Link href="/">
                <button>Home</button>
            </Link>
            <button className="betslip" onClick={toggleMenu}>
                Betslip - {betsCount}
            </button>
        </div>
        <style jsx>{`
            .nav {
                position: fixed;
                top: 0;
                left: 0;
                right: 0%;
                border: 1px solid black;
                display: flex;
                justify-content: space-between;
                height: 40px;
                z-index: 99;
                background-color: red;
            }
        `}</style>
        </>
    )
}


export default Nav