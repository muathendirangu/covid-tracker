import React from 'react';

import Cards from './components/Cards';
import Charts from './components/Charts';
import CountryPicker from './components/CountryPicker';


 class App extends React.Component {
    render() {
        return (
            <>
            <Cards/>
            <CountryPicker/>
            <Charts/>
            </>
        )
    }
}


export default App;