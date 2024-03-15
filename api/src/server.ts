import { app } from "./infra/http/express.app";

app.on("error", (reason) => {
  console.log("Unhandled error!!!", reason);
});

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => console.log(`API RUNNING ON PORT ${PORT}`));
