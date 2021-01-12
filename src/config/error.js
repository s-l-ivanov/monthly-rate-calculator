const loadError = (app) => {
  app.use((err, req, res, next) => {
    if (err.statusCode === 500) {
      return res.status(500).send('Internal server error');
    }

    return res.status(err.statusCode).send(err.message);
  });
};

export default loadError;
