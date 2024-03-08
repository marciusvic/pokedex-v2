export const style = {
    root: {
        height: '4em',
        backgroundColor: '#C22E29',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: '2em',
    },
    imgLogo: {
        height: '3em',
        paddingLeft: '3em',
        '@media (max-width: 600px)': {
            paddingLeft: '1em'
        }
    },
    search: {
        marginRight: '1.5em',
        backgroundColor: 'transparent',
        borderRadius: '5px',
        width: '15em',
        display: 'flex',
        alignItems: 'center',
        paddingLeft: '0.5em',
        '&:hover': {
            backgroundColor: 'rgba(255, 255, 255, 0.1)'
        },
        '@media (max-width: 600px)': {
            marginRight: '0em'
        }
    },
    boxSnS:{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: '1.5em'
    },
}