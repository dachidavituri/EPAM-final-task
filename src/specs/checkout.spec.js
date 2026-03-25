const LoginPage = require("../pages/login.page.js");
const InventoryPage = require("../pages/inventory.page.js");
const CheckoutPage = require("../pages/checkout.page.js");
const UserFactory = require("../data/user.factory.js");
const CheckoutBuilder = require("../data/checkout.builder.js");
const { info } = require("../utils/logger.js");

describe("UC-1: Checkout Negative Case", () => {
  beforeEach(async () => {
    info("Opening login page");
    await LoginPage.open();

    info("Logging in as standard user");
    const user = UserFactory.standard();
    await LoginPage.login(user.username, user.password);

    info("Waiting for inventory page to load");
    await InventoryPage.addBackpackBtn.waitForDisplayed();

    info("Adding backpack to cart");
    await InventoryPage.addBackpackToCart();

    info("Opening cart");
    await InventoryPage.openCart();

    info("Starting checkout");
    await CheckoutPage.startCheckout();
  });

  it("Given missing postal code, When user continues checkout, Then error should be displayed", async () => {
    info("Building checkout data with missing postal code");
    const userData = new CheckoutBuilder()
      .withFirstName("Dachi")
      .withLastName("Davituri")
      .withoutPostalCode()
      .build();

    info("Filling checkout form");
    await CheckoutPage.fillForm(
      userData.firstName,
      userData.lastName,
      userData.postalCode,
    );

    info("Clicking continue");
    await CheckoutPage.continue();

    await expect(CheckoutPage.errorMessage).toHaveText(
      "Error: Postal Code is required",
    );
  });
});
