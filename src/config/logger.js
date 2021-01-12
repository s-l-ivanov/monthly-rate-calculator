import { createLogger, format, transports } from 'winston';

const morgan = require('morgan');

export const logger = createLogger({
  transports: [
    new transports.File({ filename: './logs/error.log', level: 'error' }),
    new transports.File({ filename: './logs/combined.log' })
  ]
});

if (process.env.NODE_ENV !== 'production') {
  logger.add(
    new transports.Console({
      format: format.combine(format.colorize({ all: true }))
    })
  );
}

logger.stream = {
  write(message) {
    logger.info(message);
  }
};

export const loadLogger = (app) => {
  app.use(morgan('combined', { stream: logger.stream }));
};
