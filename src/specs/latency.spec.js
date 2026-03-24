import LoginPage from "../pages/login.page.js";
import InventoryPage from "../pages/inventory.page.js";
import UserFactory from "../data/user.factory.js";
import { info } from "../utils/logger.js";

describe("UC-2: Handling Latency (Wait Strategies)", () => {
  beforeEach(async () => {
    info("Opening login page");
    await LoginPage.open();

    info("Logging in as performance user");
    const user = UserFactory.performance();
    await LoginPage.login(user.username, user.password);

    info("Waiting for inventory page to load");
    await InventoryPage.addBackpackBtn.waitForDisplayed();
  });

  it("Given slow performance user, When logging in, Then app should load and allow reset and logout", async () => {
    info("Validating inventory page loaded");
    await expect(InventoryPage.addBackpackBtn).toBeDisplayed();

    info("Opening menu");
    await InventoryPage.openMenu();

    info("Waiting for reset app state button");
    await InventoryPage.resetAppState.waitForDisplayed();

    info("Resetting app state");
    await InventoryPage.resetApp();

    info("Logging out");
    await InventoryPage.logout();

    await expect(browser).toHaveUrl("https://www.saucedemo.com/");
  });
});
