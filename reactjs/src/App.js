/* ~ ~ ~ ~ ~ <1> Import Required Dependencies </1> ~ ~ ~ ~ ~ */
import { BrowserRouter, Routes, Route } from 'react-router-dom';

/* ~ ~ ~ ~ ~ <2> Import Screens & Components </2> ~ ~ ~ ~ ~ */
import Home from './screens/Home';
import Login from './screens/UserScreens/Login'

/* ~ ~ ~ ~ ~ <3> Main [React] Process </3> ~ ~ ~ ~ ~ */
function App() {
  /* - - - - - <3A> Return JSX Markup </3A> - - - - - */
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={ <Home />} />
        <Route path='/login' element={ <Login /> } />
      </Routes>
    </BrowserRouter>
  );
}

/* ~ ~ ~ ~ ~ <4> Export the [React] Application </4> ~ ~ ~ ~ ~ */
export default App;