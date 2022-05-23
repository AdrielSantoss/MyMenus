import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import sign from '../config/signConfig';
import './style/sign.css';

const SignPage = () => {
  return (
    <Fragment>
      <form onSubmit={sign}>
        <div id="containerSign">
          <div className="field">
            <label className="label has-text-black">Username</label>
            <div className="control has-icons-left has-icons-right">
              <input className="input is-success" id="username" type="text" placeholder="Username" required />
              <span className="icon is-small is-left">
                <i className="fas fa-user"></i>
              </span>
              <span className="icon is-small is-right">
                <i className="fas fa-check"></i>
              </span>
            </div>
          </div>
          <div className="field">
            <label className="label has-text-black">E-mail</label>
            <div className="control has-icons-left has-icons-right">
              <input className="input is-dark" id="email" type="email" placeholder="Email" required />
              <span className="icon is-small is-left">
                <i className="fas fa-envelope"></i>
              </span>
            </div>
          </div>
          <div className="field">
            <label className="label has-text-black">Senha</label>
            <div className="control has-icons-left has-icons-right">
              <input className="input" id="password" type="password" placeholder="Digite sua senha" required />
              <span className="icon is-small is-left">
                <i className="fas fa-eye"></i>
              </span>
            </div>
          </div>
          <div className="field">
            <label className="label has-text-black">Confirme sua senha</label>
            <div className="control has-icons-left has-icons-right">
              <input className="input" id="password" type="password" placeholder="Digite sua senha" required />
              <span className="icon is-small is-left">
                <i className="fas fa-eye"></i>
              </span>
            </div>
          </div>
          <div className="field">
            <div className="control">
              <label className="checkbox has-text-black">
                <input type="checkbox" id="checkbox" required />I agree to the
                <a href="#">
                  <strong className="has-text-blue"> terms and conditions</strong>
                </a>
              </label>
            </div>
            <br />
            <div className="field has-text-centered">
              <p>
                Já possui uma conta? <Link to={'/login'}>Clique Aqui!</Link>
              </p>
            </div>
          </div>
          <div className="field is-grouped">
            <div className="control">
              <button className="button is-link">Criar conta</button>
            </div>
          </div>
        </div>
      </form>
    </Fragment>
  );
};
export default SignPage;
