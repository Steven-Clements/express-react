/* ~ ~ ~ ~ ~ <1> Import Required Dependencies </1> ~ ~ ~ ~ ~ */
const express = require('express');

/* ~ ~ ~ ~ ~ <2> Initialize the Express Router </2> ~ ~ ~ ~ ~ */
const router = express.Router();

/* ~ ~ ~ ~ ~ <3> Create Routes for the Resource </3> ~ ~ ~ ~ ~ */
/* - - - - - * - - - - - * - - - - - * - - - - - * - - - - - - *
 * ROUTE: /api/users    ACCESS: PUBLIC    METHOD: POST
 * <3A> DESC: Register a New User to the Database. </3A>
 * - - - - - * - - - - - * - - - - - * - - - - - * - - - - - - */
router.post('/', async (req, res)=> {
  /* * * * * <3A-I> Return Success Response </3A-I> * * * * */
  return res.json({ message: 'API Operating Normally...' });
});

/* ~ ~ ~ ~ ~ <4> Export the Router </4> ~ ~ ~ ~ ~ */
module.exports = router;