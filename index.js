import { readFileSync } from "fs";
import pkg from "json-server";
import * as path from "path";
import { fileURLToPath } from "url";
const { create, router: _router, defaults, bodyParser } = pkg;

const server = create();
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const router = _router(path.resolve(__dirname, "db.json"));

server.use(defaults({}));
server.use(bodyParser);

server.use(async (req, res, next) => {
  await new Promise((res) => {
    setTimeout(res, 800);
  });
  console.log('test')
  next();
});

server.get("/users", (req, res) => {
  try {
    const data = JSON.parse(readFileSync(path.resolve(__dirname, "db.json")));
    res.json(data.users);
  } catch (e) {
    res.send(e);
  }
});

server.get("/user", (req, res) => {
  try {
    const data = JSON.parse(readFileSync(path.resolve(__dirname, "db.json")));
    res.json(data.user);
  } catch (e) {
    res.send(e);
  }
});

server.get("/publications", (req, res) => {
  try {
    const data = JSON.parse(readFileSync(path.resolve(__dirname, "db.json")));
    res.json(data.publications);
  } catch (e) {
    res.send(e);
  }
});

server.post("/users/login", (req, res) => {
  try {
    const { email, password } = req.body;
    const db = JSON.parse(
      readFileSync(path.resolve(__dirname, "db.json"), "UTF-8")
    );
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
    console.log("REQUEST", req.body);
    const db = JSON.parse(
      readFileSync(path.resolve(__dirname, "db.json"), "UTF-8")
    );
    const { users = [] } = db;

    const userFromBd = users.find((user) => user.email === userData.email);

    if (!userFromBd) {
      users.push(userData);
      console.log(users);
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
