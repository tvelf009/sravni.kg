import ServerCookie from "next-cookies";
import React, { Component } from "react";
import { COOKIES } from "../../../lib/api/loginService";
import { AuthToken } from "../../../lib/api/authToken";

export type AuthProps = {
  auth: AuthToken
}


export function privateRoute(WrappedComponent: any) {
  return class extends Component<AuthProps> {
    static async getInitialProps(ctx: any) {
      const token = ServerCookie(ctx)[COOKIES.authToken];
      const auth = new AuthToken(token);
      const query = ctx.query;

      
      const initialProps = { auth, query };
      if (auth.isExpired) {
        ctx.res.writeHead(302, {
          Location: "/dash/login?redirected=true",
        });
        ctx.res.end();
      }
      if (WrappedComponent.getInitialProps) return WrappedComponent.getInitialProps(initialProps);
      return initialProps;
    }

    get auth() {
      // the server pass to the client serializes the token
      // so we have to reinitialize the authToken class
      //
      // @see https://github.com/zeit/next.js/issues/3536
      return new AuthToken(this.props.auth.token);
    }

    render() {
      return <WrappedComponent {...this.props} />;
    }
  };
}