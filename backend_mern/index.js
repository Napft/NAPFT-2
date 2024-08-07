// import express from "express";
// import cors from "cors";
// import bodyParser from "body-parser";
// import morgan from "morgan";
// import dotenv from "dotenv";
// import connectDB from "./src/Config/db.js";
// import cookieParser from "cookie-parser";
// import NftRouter from "./src/routers/NftRouter/NftRouter.js";
// import UserRouter from "./src/routers/UserRouter/User.Router.js";

// const app = express();
// dotenv.config();

// app.use(cors());
// const allowedOrigins = [
//   // "http://localhost:5173",
//   // "http://localhost:4000",
//   // "https://napft.com",
//   "https://napft.com/",
//   // "http://napft.com",
// ];

// app.use(
//   cors({
//     origin: function (origin, callback) {
//       // Check if the origin is allowed or if it's a request from a browser extension (e.g., React DevTools)
//       if (
//         !origin ||
//         allowedOrigins.includes(origin) ||
//         origin.startsWith("chrome-extension://")
//       ) {
//         callback(null, true);
//       } else {
//         callback(new Error("Not allowed by CORS"));
//       }
//     },
//     credentials: true, // If you are using cookies or sessions
//   })
// );

// app.use(express.json()); // Parses the body if its in JSON format.
// connectDB();
// app.use(cookieParser());
// app.use(morgan("dev"));

// app.use("/api/v1/nft", NftRouter);
// app.use("/api/v1/user", UserRouter);

// const PORT = process.env.PORT || 8800;
// const MODE = process.env.DEV_MODE;
// app.listen(PORT, () => {
//   console.log(
//     `Server  is running in ${MODE} MODE IN port no ${PORT}`.bgCyan.black
//   );
// });
import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import morgan from "morgan";
import dotenv from "dotenv";
import connectDB from "./src/Config/db.js";
import cookieParser from "cookie-parser";
import NftRouter from "./src/routers/NftRouter/NftRouter.js";
import UserRouter from "./src/routers/UserRouter/User.Router.js";

dotenv.config();

const app = express();
const allowedOrigins = [
  "https://napft.com",
  "http://localhost:5173",
  "http://localhost:4000",
];

app.use(
  cors({
    origin: function (origin, callback) {
      // Allow requests with no origin, like mobile apps or curl requests
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
    credentials: true, // If you are using cookies or sessions
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS", // Allow these methods
  })
);

app.use(bodyParser.json()); // Parses the body if it's in JSON format
app.use(cookieParser());
app.use(morgan("dev"));

connectDB();

app.use("/api/v1/nft", NftRouter);
app.use("/api/v1/user", UserRouter);

const PORT = process.env.PORT || 8800;
const MODE = process.env.DEV_MODE;

app.listen(PORT, () => {
  console.log(`Server is running in ${MODE} MODE on port ${PORT}`);
});
