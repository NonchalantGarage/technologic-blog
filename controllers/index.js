const router = require('express').Router();

const homeRoutes = require('./home-routes');
const apiRoutes = require('./api');
const dashboardRoutes = require('./dashboard-routes')

router.use('/dashboard',dashboardRoutes)


// point all / endpoints to homeroutes index
router.use('/', homeRoutes);
// point all api endpoints to api index
router.use('/api', apiRoutes);


// if using a route that doesn't exist
router.use((req, res) => {
    res.status(404).end();
  });

module.exports = router
