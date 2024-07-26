import { ExpressAuth } from "@auth/express"
import { MongoDBAdapter } from "@auth/mongodb-adapter"
import client from "./lib/db"
 
const app = express()
 
app.set("trust proxy", true)
app.use(
  "/auth/*",
  ExpressAuth({
    providers: [
 
      Credentials({
        credentials: {
          username: { label: "Username" },
          password: { label: "Password", type: "password" },
        },
        async authorize({ request }) {
          const response = await fetch(request);
          if (!response.ok) return null;
          return (await response.json()) ?? null;
        },
      }),
     
    ],
    adapter: MongoDBAdapter(client),
  })
)





// providers: [
//   CredentialsProvider({
//     name: "credentials",
//     credentials: {
//       username: { label: "Username", type: "text" },
//       password: { label: "Password", type: "password" }
//     },

//     async authorize(credentials) {
//       const { email, password } = credentials;
//       try {
//         await connectMongoDB();
//         const user = await User.findOne({ email });

//         if (!user) {
//           return null;
//         }

//         const passwordsMatch = await bcrypt.compare(password, user.password);
//         if (!passwordsMatch) {
//           return null;
//         }

//         return user;     //    { user, role: user.role ?? "user" };
//       } catch (error) {
//         console.log("error", error);
//       }
//     },
//   }),
// ],
// callbacks: {
//   async jwt({ token, user }) {
//     if (user) {
//       token.role = user.role;
//     }
//     return token;
//   },
//   async session({ session, token }) {
//     session.user.role = token.role;
//     return session;
//   },
// },
// session: {
//   strategy: "jwt",
// },
// secret: process.env.NEXTAUTH_SECRET,
// pages: {
//   signIn: "/",
// },