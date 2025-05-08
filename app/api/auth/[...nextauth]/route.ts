import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";
import dbConnect from "@/app/helpers/sqliteDb";
import { NextAuthOptions } from "next-auth";
import { EmailIsExistAction } from "@/serverActions/EmailIsExistAction";

// interface Credentials {
//     email: string | undefined;
//     password: string | undefined ;
//   }
// interface User {
//     id: string;
//     full_name: string;
//     email: string;
//     password: string;

//     created_at?: string;
//   }

const authOptions: NextAuthOptions = {
  providers: [
    // // CredentialsProvider({
    // //   // The name to display on the sign in form (e.g. 'Sign in with...')
    // //   name: "Credentials",
    // //   credentials: {
    // //     email: { label: "Email", type: "text" },
    // //     password: { label: "Password", type: "password" },
    // //   },

    // //   // async authorize(credentials:Credentials,req){
    // //   async authorize(credentials,req){  
    // //     // a null check before destructuring credentials.
    // //     if (!credentials) return null;
        
    
        
    // //     const { email, password } = credentials ;
    // //     try {
    // //       await dbConnect();
    // //     const user:User = await EmailIsExistAction(email);
    // //       if (!user) {
    // //         return null;
    // //       }
    // //       console.log('first',user)
    // //       const hashedPassword = user.password;
    // //       const isValidPassword = await bcrypt.compare(
    // //         password,
    // //         hashedPassword
    // //       );
    // //       if (!isValidPassword) {
    // //         return null;
    // //       }
    // //     return user ;
          
    // //     } catch (error) {
    // //         console.error("Authorization error:", error);
    // //         return null;
    // //     }
    // //   },
    // // }),

    // google provider
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
  ],

  session: {
    strategy: "jwt",
  },

  secret: process.env.NEXTAUTH_SECRET,

  // if want to use your custom login page
  pages: {
    signIn: "/login",
  },
};

const  handler = NextAuth(authOptions)

export { handler as GET, handler as POST }
