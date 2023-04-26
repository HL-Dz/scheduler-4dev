class AuthController {
  async auth(req, res) {
    if (!req.body)
      return res
        .status(400)
        .send({ status: 400, message: "Введите логин и пароль!" });
    let { login, password } = req.body;
    const validUser = "admin";
    const validPassword = "admin";
    const token = "gfldkgjfhdlkjh5-0435o84365o4fsdlkfjdlkjh543-0435243ofds";

    if (login === validUser && password === validPassword) {
      res.status(200).send({ token });
    } else {
      return res.status(403).send({ status: 403, message: "Ошибка доступа!" });
    }
  }
}

module.exports = new AuthController();
