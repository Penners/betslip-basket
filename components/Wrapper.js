const Wrapper = ({children}) => {
    return(
        <>
        <div className="container">
            {children}
        </div>
        <style jsx>{`
            .container {
                display: block; 
                width: calc(100% - 20px);
                max-width: 768px;
                padding: 10px;
                margin: 10px auto;
                background-color: white;
                border-radius: 5px;
            }
        `}</style>
        </>
    )
}

export default Wrapper