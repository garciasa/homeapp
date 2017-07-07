import React from 'react';
import ReactDOM from 'react-dom';
import { MuiThemeProvider } from 'material-ui/styles';
import Dashboard from './components/Dashboard';

function App() {
    return (
        <MuiThemeProvider>
            <Dashboard />
        </MuiThemeProvider>
    );
}

ReactDOM.render(<App />, document.getElementById('root'));
