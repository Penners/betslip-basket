export const BetslipReducer = (state, action) => {
    switch(action.type){
        case "ADD_BET":
            if (!state.bets.find(bet => bet.id === action.payload.id)){
                return {
                    ...state,
                    bets: [
                        ...state.bets,
                        action.payload
                    ]
                }
            }

            return state
        case "REMOVE_BET":
            return {
                ...state,
                bets: state.bets.filter(bet => bet.id !== action.payload.id)
            }

        case "TOGGLE_MENU":
            return {
                ...state,
                menuOpen: !state.menuOpen
            }

        case "REHYDRATE_STATE":
            return {
                ...state,
                ...action.payload
            }
            
        case "SET_DECIMAL_ODDS":
            return {
                ...state,
                oddsPreference: 2
            }

        case "SET_FRACTIONAL_ODDS":
            return {
                ...state,
                oddsPreference: 1
            }
        
        case "OPEN_MENU":
            return {
                ...state,
                menuOpen: true
            }

        default:
            return state
    }
}