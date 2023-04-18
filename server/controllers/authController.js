class AuthController {
  async auth(req, res) {
    let { user: userName, password } = req.body;
    const validUser = "admin";
    const validPassword = "admin";
    const token = "gfldkgjfhdlkjh5-0435o84365o4fsdlkfjdlkjh543-0435243ofds";

    if (userName === validUser && password === validPassword) {
      res.status(200).send({ token });
    } else {
      return res.status(303).send({ status: 303, message: "Ошибка доступа!" });
    }
  }
}

module.exports = new AuthController();
