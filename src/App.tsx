
import { AutoContextProvider } from './contexts/AuthContext'
import { BrowserRouter, Route } from 'react-router-dom';

import { Home } from "./pages/Home"; //<- importações //
import { NewRoom } from "./pages/NewRoom";



function App() {

  return (
    <BrowserRouter>
      <AutoContextProvider>
        <Route path="/" exact={true} component={Home} />
        <Route path="/rooms/new" component={NewRoom} />
      </AutoContextProvider>


    </BrowserRouter>


  );
}

export default App;
