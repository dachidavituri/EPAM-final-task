import LoginPage from "../pages/login.page.js";
import UserFactory from "../data/user.factory.js";
import { info } from "../utils/logger.js";

describe("Login Page", () => {
  beforeEach(async () => {
    info("Opening login page");
    await LoginPage.open();
  });

  it("Given login page, When opened, Then title should be Swag Labs", async () => {
    info("Checking page title");
    await expect(browser).toHaveTitle("Swag Labs");
  });

  it("Given empty credentials, When login, Then 'Username is required' error is shown", async () => {
    info("Logging in with empty credentials");
    const user = UserFactory.empty();
    await LoginPage.login(user.username, user.password);

    await expect(LoginPage.errorMessage).toHaveText(
      "Epic sadface: Username is required",
    );
  });

  it("Given only username, When login, Then 'Password is required' error is shown", async () => {
    info("Logging in with username only");
    const user = UserFactory.standard();
    await LoginPage.login(user.username, "");

    await expect(LoginPage.errorMessage).toHaveText(
      "Epic sadface: Password is required",
    );
  });

  it("Given invalid credentials, When login, Then error message should be displayed", async () => {
    info("Logging in with invalid credentials");
    const user = UserFactory.invalid();
    await LoginPage.login(user.username, user.password);

    await expect(LoginPage.errorMessage).toHaveText(
      "Epic sadface: Username and password do not match any user in this service",
    );
  });
});
