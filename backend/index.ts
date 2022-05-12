const application = require("./configs/server.ts");

application.listen(5000, () => {
  console.info("Api running...");
});
