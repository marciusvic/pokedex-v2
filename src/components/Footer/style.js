export const style = {
    root:{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '4em',
        backgroundColor: '#C22E29',
        position: 'fixed',
        bottom: 0,
        width: '100%',
        zIndex: 999,
        '@media (min-width: 601px)': {
            marginTop: '2em'
        }
    },
    link:{
        color: 'white',
        textDecoration: 'none',
        display: 'flex',
        alignItems: 'center',
        fontSize: '2em',
        '&:hover': {
            color: 'white',
        }
    },
    icon: {
        color: 'white',
        fontSize: '2em',
        marginLeft: '0.5em'
    }
}

