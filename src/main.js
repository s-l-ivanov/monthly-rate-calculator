import express from 'express';
import loadError from './config/error';
import loadConfig from './config/express';
import loadRoutes from './routes';

/**
 * Initialize app
 */
const app = express();

/**
 * Load express configurations
 */
loadConfig(app);

/**
 * Load express routes
 */
loadRoutes(app);

/**
 * Load express error handler
 */
loadError(app);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`App listen on port ${PORT}.`);
});
