import { ExpressAuth } from "@auth/express"
import { MongoDBAdapter } from "@auth/mongodb-adapter"
 
const app = express()
 
app.set("trust proxy", true)
app.use(
  "/auth/*",
  ExpressAuth({
    providers: [
      CredentialsProvider({
        name: "credentials",
        credentials: {
          username: { label: "Username", type: "text" },
          password: { label: "Password", type: "password" },
        },
        async authorize(credentials) {
          const { email, password } = credentials;
  
          try {
            const client = await clientPromise;
            const db = client.db(); 
            const user = await db.collection("users").findOne({ email });
  
            if (!user) {
              return null;
            }
  
            const passwordsMatch = await bcrypt.compare(password, user.password);
            if (!passwordsMatch) {
              return null;
            }
  
            return { id: user._id, email: user.email, role: user.role };
          } catch (error) {
            console.error("Error authorizing user:", error);
            return null;
          }
        },
      }),
      ],
    adapter: MongoDBAdapter(client),
  })
)