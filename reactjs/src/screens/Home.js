/* ~ ~ ~ ~ ~ <1> Import Required Dependencies </1> ~ ~ ~ ~ ~ */
import { Link } from 'react-router-dom';

/* ~ ~ ~ ~ ~ <2> Main [React] Process </2> ~ ~ ~ ~ ~ */
function Home() {
  /* - - - - - <2A> Return JSX Markup </2A> - - - - - */
  return (
    <main className='container'>
      <i id='spinner' className='fab fa-react fa-4x'></i>
      <h1>Clementine React/Express Starter</h1>
      <small>Developed by Steven Clements</small>
      <Link to='/login'>
        <button type='submit' className='btn btn-primary'>
          Let's Get Started
        </button>
      </Link>
    </main>
  );
}

/* ~ ~ ~ ~ ~ <3> Export the [React] Application </3> ~ ~ ~ ~ ~ */
export default Home;