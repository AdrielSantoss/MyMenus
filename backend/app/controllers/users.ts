const bcrypt = require('bcrypt');

module.exports.GetUsers = (application, req, res) => {
  res.status(200).send(['user1', 'user2', 'user3']);
};

module.exports.PostUser = (application, req, res) => {
  const data = req.body;

  req.assert('name', 'Nome é obrigatório').notEmpty();
  req.assert('email', 'Email obrigatório.').notEmpty();
  req.assert('email', 'Email inválido.').isEmail();
  req.assert('password', 'Senha é obrigatória.').notEmpty();
  req.assert('password', 'Senha deve possuir no minímo 6 caracteres.').isLength({ min: 6 });
  req.assert('confirmPassword', 'Confirmação de senha é obrigatória.').notEmpty();
  req.assert('confirmPassword', 'Senhas não conferem.').equals(data.password);

  const errors = req.validationErrors();

  if (errors) {
    return res.status(400).json({ errors });
  }

  const encrypt = (pass) => {
    const salt = bcrypt.genSaltSync(10);
    return bcrypt.hashSync(pass, salt);
  };

  data.password = encrypt(data.password);
  delete data.confirmPassword;

  try {
    const repository = new (application as any).app.repositories.Users(application);
    repository.Insert(data, res);
  } catch (error) {
    return res.status(500).send(error);
  }
};
