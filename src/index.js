import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Hompage from './HomePage';
import registerServiceWorker from './registerServiceWorker';
import userData from './tempData';
import userSpecificData from './userSpecificData'

ReactDOM.render(<Hompage userData={userData} userSpecificData={userSpecificData}/>, document.getElementById('root'));
registerServiceWorker();
