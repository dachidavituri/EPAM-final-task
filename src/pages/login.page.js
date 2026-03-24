import BasePage from "./base.page";

class LoginPage extends BasePage {
  get usernameInput() {
    return $("#user-name");
  }
  get passwordInput() {
    return $("#password");
  }
  get loginButton() {
    return $("#login-button");
  }

  get errorMessage() {
    return $('h3[data-test="error"]');
  }

  async open() {
    await super.open("/");
  }

  async login(username, password) {
    await this.waitAndType(this.usernameInput, username);
    await this.waitAndType(this.passwordInput, password);
    await this.waitAndClick(this.loginButton);
  }
}

export default new LoginPage();
