import axios from 'axios';

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
    .then((resp) => sign('post', resp.data))
    .catch((e) => {
      e = 'erro ao cadastar!';
      console.log(e);
    });
}

export default sign;
