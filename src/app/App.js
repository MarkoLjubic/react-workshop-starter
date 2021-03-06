import React from 'react'

import './App.css'

import Header from './components/Header'
import Footer from './components/Footer'
import Main from './components/Main'
import AppStore from './AppStore'

class App extends React.Component {
    render() {
        return (
            <>
                <AppStore>
                    <Header title="App" onSwitchView={this.onChangeView} />
                    <Main />
                    <Footer />
                </AppStore>
            </>
        )
    }
}

export default App
