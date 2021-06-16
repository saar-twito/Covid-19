import React from 'react'
import Main from './components//Main/Main'
import { CoronaProvider } from './components/UseContext/Corona'

// * Style
import './Style/App.css';

const App = () => (
  <CoronaProvider>
    <div className="App">
      <Main />
    </div>
  </CoronaProvider>
)

export default App;






