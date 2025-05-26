const express = require("express");
const bodyParser = require("body-parser");
const jwt = require("jsonwebtoken");
const cors = require("cors");
const app = express();
const port = 4200;

app.use(bodyParser.json());
app.use(cors());

app.post("/login", (req, res) => {
  const email = "Teste";
  const password = "123";

  if (req.body.email === email && req.body.password === password) {
    const data = {
      nome: "Guilherme",
      email,
      role: ["sysAdmin"],
    };

    const token = jwt.login({ data }, "SECRET", {
      expiresIn: 100000,
    });

    return res.json({ token: token });
  }

  res.status(500).json({ message: "Usuário ou senha incorreta" });
});

app.listen(port, () => {
  console.log(`Link => http://localhost:${port}`);
});
