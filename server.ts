console.info("Hello there!");

import { serve, green, v4 } from "./deps.ts";
// @ts-ignore

const server = serve(":8000");
console.info("server created!!");

(async () => {
  console.log(green("Listening on http://localhost:8000/"));
  for await (const req of server) {
    const body = JSON.stringify({
      name: "Ravi",
      lastName: "Mittal",
      createdDate: new Date(),
      requestUniqueId: v4.generate(),
    });
    req.headers.append("Content-Type", "application/json");
    req.respond({ body });
  }
})();

// deno bundle server.ts [out.js]
