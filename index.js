import { readFileSync } from "fs";
import pkg from "json-server";
import { resolve } from "path";
const { create, router: _router, defaults, bodyParser } = pkg;

const server = create();
const __dirname = import.meta.url;
const router = _router(resolve(__dirname, "db.json"));

server.use(defaults({}));
server.use(bodyParser);

server.use(async (req, res, next) => {
  await new Promise((res) => {
    setTimeout(res, 800);
  });
  next();
});

server.post("/users/login", (req, res) => {
  try {
    const { email, password } = req.body;
    const db = JSON.parse(readFileSync(resolve(__dirname, "db.json"), "UTF-8"));
    const { users = [] } = db;

    const userFromBd = users.find(
      (user) => user.email === email && user.password === password
    );

    if (userFromBd) {
      return res.json(userFromBd);
    }

    return res.status(403).json({ message: "User not found" });
  } catch (e) {
    console.log(e);
    return res.status(500).json({ message: e.message });
  }
});

server.post("/users/new", (req, res) => {
  try {
    const userData = req.body;
    const db = JSON.parse(readFileSync(resolve(__dirname, "db.json"), "UTF-8"));
    const { users = [] } = db;

    const userFromBd = users.find(
      (user) =>
        user.email === userData.email && user.password === userData.password
    );

    if (!userFromBd) {
      users.push(userData);
      return res.json(userFromBd);
    }

    return res.status(403).json({ message: "User not found" });
  } catch (e) {
    console.log(e);
    return res.status(500).json({ message: e.message });
  }
});

server.use((req, res, next) => {
  if (!req.headers.authorization) {
    return res.status(403).json({ message: "AUTH ERROR" });
  }

  next();
});

server.use(router);

server.listen(8000, () => {
  console.log("server is running on 8000 port");
});
