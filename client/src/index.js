import React from "react";
import ReactDOM from "react-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import App from "./App";
import { CartProvider } from "./components/cartcontext";
import { Auth0Provider } from "@auth0/auth0-react";

ReactDOM.render(
  <Auth0Provider
    domain="dev-vdg4ijzjxblxixl6.us.auth0.com"
    clientId="hh8NcXvTwjxuk20ohsbYgUx5qrctYaDW"
    authorizationParams={{
      redirect_uri: window.location.origin,
    }}
  >
    <CartProvider>
      <App />
    </CartProvider>
  </Auth0Provider>,
  document.getElementById("root")
);
