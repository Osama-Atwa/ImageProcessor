import express from "express";
import { stringify } from "querystring";
import routes from "./routes/index";

const app = express();
const port = 3000;
app.use("/api", routes);

app.listen(port, () => {
  console.log(`server is on port http://localhost:${port}`);
});

export default app;
