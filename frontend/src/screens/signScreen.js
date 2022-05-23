import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import './style/sign.css';
import axios from 'axios';

const SignPage = () => {
  function sign(ev) {
    ev.preventDefault();
    const username = document.getElementById('username').value;
    const userEmail = document.getElementById('email').value;
    const userPassword = document.getElementById('password').value;

    axios
      .post('http://localhost:5000/api/users', {
        name: username,
        email: userEmail,
        password: userPassword,
        confirmPassword: userPassword
      })
      .then((resp) => console.info(resp))
      .catch((e) => console.error(e));
  }

  return (
    <Fragment>
      <form onSubmit={sign}>
        <div id="containerSign">
          <div className="field">
            <label className="label has-text-black">Username</label>
            <div className="control has-icons-left has-icons-right">
              <input className="input is-success" id="username" type="text" placeholder="Digite seu Nome" required />
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
              <input className="input is-dark" id="email" type="email" placeholder="Digite seu E-mail" required />
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
              <input className="input" id="confirmPassword" type="password" placeholder="Digite sua senha" required />
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
