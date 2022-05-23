import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import './style/login.css';

const loginPage = () => {
  return (
    <Fragment>
      <form>
        <div id="containerLogin">
          <div className="field">
            <label className="label has-text-black">Username</label>
            <div className="control has-icons-left has-icons-right">
              <input className="input is-success" type="text" placeholder="Username" required />
              <span className="icon is-small is-left">
                <i className="fas fa-user"></i>
              </span>
              <span className="icon is-small is-right">
                <i className="fas fa-check"></i>
              </span>
            </div>
          </div>
          <div className="field">
            <label className="label has-text-black">Password</label>
            <div className="control has-icons-left has-icons-right">
              <input className="input" type="password" placeholder="Password" required />
              <span className="icon is-small is-left">
                <i className="fas fa-eye"></i>
              </span>
            </div>
          </div>
          <div className="field">
            <p className="control ">
              <button className="button is-success">Login</button>
            </p>
            <br />
            <Link to={'/forgotPassword'}>
              <p>Esqueci minha senha</p>
            </Link>
            <p>
              Não tem conta? Faça seu cadastro <Link to={'/sign'}>Aqui!</Link>
            </p>
          </div>
        </div>
      </form>
    </Fragment>
  );
};

export default loginPage;
