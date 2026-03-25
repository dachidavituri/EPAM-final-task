class UserFactory {
  static empty() {
    return {
      username: "",
      password: "",
    };
  }

  static standard() {
    return {
      username: "standard_user",
      password: "secret_sauce",
    };
  }

  static performance() {
    return {
      username: "performance_glitch_user",
      password: "secret_sauce",
    };
  }

  static invalid() {
    return {
      username: "wrong_user",
      password: "wrong_pass",
    };
  }
}

module.exports = UserFactory;
