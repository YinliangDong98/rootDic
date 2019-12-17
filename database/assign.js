const { Rootmo } = require('./model');

exports.addRoot = (req, res) => {
  const newRoot = new Rootmo(req.body);
  newRoot.save((err) => {
    if (err) {
      console.error(err);
    }
    res.json({ name: req.body.name });
    console.log(`has saved a rootSubmit ${req.body}`);
  });
};
