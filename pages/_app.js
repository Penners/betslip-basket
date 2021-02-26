import 'styles/globals.css'
import BetslipContextProvider from 'context/BetslipContext'
import Basket from 'components/Basket'
import Nav from 'components/Nav'


const App = ({ Component, pageProps }) => {

    return (
        <BetslipContextProvider>
            <Nav />
            <Basket />
            <Component {...pageProps} />
        </BetslipContextProvider>
    )
}

export default App
