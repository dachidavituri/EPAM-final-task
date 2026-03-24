import BasePage from "./base.page";

class InventoryPage extends BasePage {
  get addBackpackBtn() {
    return $("#add-to-cart-sauce-labs-backpack");
  }

  get cartIcon() {
    return $(".shopping_cart_link");
  }

  get burgerMenu() {
    return $("#react-burger-menu-btn");
  }

  get resetAppState() {
    return $("#reset_sidebar_link");
  }

  get logoutBtn() {
    return $("#logout_sidebar_link");
  }

  async addBackpackToCart() {
    await this.waitAndClick(this.addBackpackBtn);
  }

  async openCart() {
    await this.waitAndClick(this.cartIcon);
  }

  async openMenu() {
    await this.waitAndClick(this.burgerMenu);
  }

  async resetApp() {
    await this.waitAndClick(this.resetAppState);
  }

  async logout() {
    await this.waitAndClick(this.logoutBtn);
  }
}

export default new InventoryPage();
