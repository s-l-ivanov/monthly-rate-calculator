import bodyParser from 'body-parser';
import cors from 'cors';

const loadConfig = (app) => {
  app.use(bodyParser.json());
  app.use(cors());
};

export default loadConfig;
