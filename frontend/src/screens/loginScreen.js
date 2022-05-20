import React, { Fragment } from 'react';
import './style/login.css';

const loginPage = () => {
  return (
    <Fragment>
      <form>
        <div id="containerLogin">
          <div className="field">
            <label className="label has-text-black">E-mail</label>
            <div className="control has-icons-left has-icons-right">
              <input className="input is-success" type="text" placeholder="Digite seu e-mail" />
              <span className="icon is-small is-left">
                <i className="fas fa-user"></i>
              </span>
              <span className="icon is-small is-right">
                <i className="fas fa-check"></i>
              </span>
            </div>
          </div>

          <div className="field">
            <label className="label has-text-black">Senha</label>
            <div className="control has-icons-left has-icons-right">
              <input className="input" type="password" placeholder="Digite sua senha" />
              <span className="icon is-small is-left">
                <i className="fas fa-eye"></i>
              </span>
            </div>
          </div>
          <div className="field">
            <p className="control">
              <button className="button is-success">Entrar</button>
            </p>
          </div>
        </div>
      </form>
    </Fragment>
  );
};

export default loginPage;
