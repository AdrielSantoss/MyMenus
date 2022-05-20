import React, { Fragment } from 'react';
import './style/style.css';

const Error404 = () => {
  return (
    <Fragment>
      <div>
        <h3 id="error" className="is title has-text-white">
          Page Not Found
        </h3>
        <img
          id="error404"
          src="https://hugocalixto.com.br/wp-content/uploads/sites/22/2020/07/error-404-1.png"
          alt="Error404 Paga not found"
        />
      </div>
    </Fragment>
  );
};

export default Error404;
