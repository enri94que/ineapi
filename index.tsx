import React from 'react';
import reactDom from 'react-dom';
import'./index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Amplify from './aws-amplify';
import awsExport from './aws-exports';
Amplify.configure(awsExports);

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
    document.getElementById('root')
);
