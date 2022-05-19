import React, {Fragment} from 'react';
import NavBar from './components/navbar/navbar'
import RouterPages from './routes/routes';
import './App.css';

function App() {
  return (
    <Fragment>
      <RouterPages/>
    </Fragment>
  );
}

export default App;
