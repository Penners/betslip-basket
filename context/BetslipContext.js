import { createContext, useReducer, useEffect } from 'react'

import { BetslipReducer } from 'context/BetslipReducer'

export const BetslipContext = createContext()

const initalState = {
    bets: [],
    deeplink: false,
    menuOpen: false,
    oddsPreference: 1,
    oddsChoices: [{id: 1, type: 'Fractional'},{id: 2, type: 'Decimal'}]
}


const BetslipContextProvider = ({children}) => {
    
    const [state, dispatch] = useReducer(BetslipReducer, initalState)

    useEffect(() => {
        if (localStorage.getItem('global_state') !== null){
            dispatch({type: 'REHYDRATE_STATE', payload: JSON.parse(localStorage.getItem('global_state'))})
        }
    }, [])

    useEffect(() => {
        localStorage.setItem('global_state', JSON.stringify(state))
    }, [state])

    const toggleBet = (payload) => {
        dispatch({type: 'TOGGLE_BET', payload})
    }

    const addBet = (payload) => {
        dispatch({type: 'ADD_BET', payload})
    }

    const removeBet = (payload) => {
        dispatch({type: 'REMOVE_BET', payload})
    }
    const openMenu = () => {
        dispatch({type: 'OPEN_MENU'})
    }
    const closeMenu = () => {
        dispatch({type: 'OPEN_MENU'})
    }
    const toggleMenu = () => {
        dispatch({type: 'TOGGLE_MENU'})
    }

    const setFractionalOdds = () => {
        dispatch({type: 'SET_FRACTIONAL_ODDS'})
    }

    const setDecimalOdds = () => {
        dispatch({type: 'SET_DECIMAL_ODDS'})
    }

    const contextValues = {
        toggleMenu,
        openMenu,
        closeMenu,
        toggleBet,
        addBet,
        removeBet,
        setFractionalOdds,
        setDecimalOdds,
        ...state
    }

    return (
        <BetslipContext.Provider value={contextValues}>
            {children}
        </BetslipContext.Provider>
    )
}


export default BetslipContextProvider