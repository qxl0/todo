import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import QiangNavbar from './QiangNavbar';
import Routes from './Routes';
import { BrowserRouter as Router} from 'react-router-dom';

const App = () => {
	return (
		<Router>
		 	<QiangNavbar/>
		  <Routes />
		</Router>
	);
};

export default App;
