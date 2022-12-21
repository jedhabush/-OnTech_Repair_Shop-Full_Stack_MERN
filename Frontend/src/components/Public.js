import { Link } from "react-router-dom";

import React from "react";

const Public = () => {
  const content = (
    <section className="public">
      <header>
        <h1>
          Welcome to <span className="nowrap">Jed H. Repairs!</span>
        </h1>
      </header>
      <main className="public__main">
        <p>
          Located in Beautiful Downtown Sydney City, Jed H. Repairs provides a
          trained staff ready to meet your tech repair needs.
        </p>
        <address className="public__addr">
          Jed H. Repairs
          <br />
          555 Sydney Drive
          <br />
          Sydney City, AU 2000
          <br />
          <a href="tel:+15555555555">(544) 444-333</a>
        </address>
        <br />
        <p>Owner: Jed H</p>
      </main>
      <footer>
        <Link to="/login">Employee Login</Link>
      </footer>
    </section>
  );
  return content;
};

export default Public;
