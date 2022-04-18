/* ~ ~ ~ ~ ~ <1> Import Required Dependencies </1> ~ ~ ~ ~ ~ */
import { Link } from 'react-router-dom';

/* ~ ~ ~ ~ ~ <2> Main [React] Process </2> ~ ~ ~ ~ ~ */
function Home() {
  /* - - - - - <2A> Return JSX Markup </2A> - - - - - */
  return (
    <main className='container'>
      <i id='spinner' className='fab fa-react fa-5x'></i>
      <h1>Clementine React/Express Starter</h1>
      <small>Developed by <a href='https://github.com/steven-clements' rel='noreferrer' target='_blank'>Steven Clements</a></small>
      <p>This application starter leverages Express for API requests whose functionality is utilized by the front-end UI component library React JS. A handful of other dependencies are included for an out-of-the-box experience for web applications (see the list that follows for a full summary of required dependencies).</p>
      <h3>Required Dependencies</h3>
      <ul className='dependencies'>
        <a href='https://www.npmjs.com/package/dotenv' rel='noreferrer' target='_blank'><li>dotenv</li></a>
        <a href='https://www.npmjs.com/package/express' rel='noreferrer' target='_blank'><li>express</li></a>
        <a href='https://www.npmjs.com/package/express-validator' rel='noreferrer' target='_blank'><li>express-validator</li></a>
        <a href='https://www.npmjs.com/package/mongoose' rel='noreferrer' target='_blank'><li>mongoose</li></a>
        <a href='https://www.npmjs.com/package/bcryptjs' rel='noreferrer' target='_blank'><li>bcryptjs</li></a>
        <a href='https://www.npmjs.com/package/jsonwebtoken' rel='noreferrer' target='_blank'><li>jsonwebtoken</li></a>
        <a href='https://www.npmjs.com/package/speakeasy' rel='noreferrer' target='_blank'><li>speakeasy</li></a>
        <a href='https://www.npmjs.com/package/nodemailer' rel='noreferrer' target='_blank'><li>nodemailer</li></a>
        <a href='https://www.npmjs.com/package/react-router-dom' rel='noreferrer' target='_blank'><li>react-router-dom</li></a>
        <a href='https://www.npmjs.com/package/axios' rel='noreferrer' target='_blank'><li>axios</li></a>
      </ul>
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