import { test, expect } from '@playwright/test';
import { MenuPage } from '../../src/pages/MenuPage';
import { CartPage } from '../../src/pages/CartPage';

test('Cart cleaned after page refresh', async ({ page }) => {
  const menuPage = new MenuPage(page);
  const cartPage = new CartPage(page);
  await menuPage.open();
  await menuPage.addCoffeeToCart('Cappuccino');
  await menuPage.addCoffeeToCart('Espresso');
  await menuPage.viewCart();
  await cartPage.waitForLoading();
  await cartPage.verifyCartItemIsVisible('Cappuccino');
  await page.reload();
  await cartPage.waitForLoading();
  await cartPage.verifyCartItemIsHidden('Cappuccino');
  await cartPage.getErrorMessage();
});
