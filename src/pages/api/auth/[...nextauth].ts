import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const authOptions: NextAuthOptions = {

  providers: [
    CredentialsProvider({
      type: "credentials",
      credentials: {},
      async authorize(credentials, req) {
        const { email, password } = credentials as {
          email: string;
          password: string;
        };
        console.log(`${process.env.DB_SERVER}/user/login}`)
        const res = await fetch(`${process.env.DB_SERVER}/user/login}`,{
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: email,
            password: password,
          }),
        })

        const user = await res.json();
       
        // perform you login logic
        // find out user from db
        if (user) {
          return user;
        }else{
          throw new Error("invalid credentials");
        }
      },
    }),
  ],
  pages: {
    signIn: "/auth/signin",
    // error: '/auth/error',
    // signOut: '/auth/signout'
  },
//   callbacks: {
//     jwt(params) {
//       // update token
//       if (params.user?.role) {
//         params.token.role = params.user.role;
//       }
//       // return final_token
//       return params.token;
//     },
//   },
};

export default NextAuth(authOptions);