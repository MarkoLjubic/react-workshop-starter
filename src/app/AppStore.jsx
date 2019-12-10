import React from 'react'

import AppContext from './_context/AppContext'

class AppStore extends React.Component {
    state = {
        isGrid: true,
        isLight: true
    }

    onChangeView = () => {
        this.setState(prevState => ({
            isGrid: !prevState.isGrid
        }))
    }

    onChangeLight = () => {
        this.setState(prevState => ({
            isLight: !prevState.isLight
        }))
    }

    render() {
        const storeValue = {
            ...this.state,
            changeView: this.onChangeView,
            changeLight: this.onChangeLight
        }

        return <AppContext.Provider value={storeValue}>{this.props.children}</AppContext.Provider>
    }
}

export default AppStore
