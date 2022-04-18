/* ~ ~ ~ ~ ~ <1> Import Required Dependencies </1> ~ ~ ~ ~ ~ */
import { Link } from 'react-router-dom';

/* ~ ~ ~ ~ ~ <2> Main [React] Process </2> ~ ~ ~ ~ ~ */
function Login() {
  /* - - - - - <2A> Return JSX Markup </2A> - - - - - */
  return (
    <main className='container'>
      <form>
        <h1>Member Login</h1>
        <Link to='/'>
          <button className='btn btn-primary'>Landing Screen</button>
        </Link>
      </form>
    </main>
  );
}

/* ~ ~ ~ ~ ~ <3> Export the [React] Application </3> ~ ~ ~ ~ ~ */
export default Login;