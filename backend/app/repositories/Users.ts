function Users(this: any, app) {
  this._db = app.db('users');
}

Users.prototype.Insert = function (user: any, res) {
  return this._db
    .where({ email: user.email })
    .first()
    .then((exists) => {
      if (exists) {
        return res.send('Este e-mail já esta cadastrado.');
      } else {
        return this._db
          .insert(user)
          .then(() => res.status(200).send('Conta cadastrada com sucesso!'))
          .catch((err) => res.status(500).send('Erro inesperado:' + err));
      }
    })
    .catch((err) => res.status(500).send('Erro inesperado:' + err));
};

module.exports = function () {
  return Users;
};
