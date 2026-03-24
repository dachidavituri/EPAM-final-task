class BasePage {
  async open(path = "") {
    await browser.url(path);
  }

  async waitAndClick(element) {
    await element.waitForDisplayed();
    await element.click();
  }

  async waitAndType(element, value) {
    await element.waitForDisplayed();
    await element.setValue(value);
  }
}

export default BasePage;
