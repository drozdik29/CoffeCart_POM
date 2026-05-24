import { test, expect } from '@playwright/test';
import { MenuPage } from '../../src/pages/MenuPage';
import { CartPage } from '../../src/pages/CartPage';

test('Cappuccino removed from Cart after clicking Remove', async ({ page }) => {
  const menuPage = new MenuPage(page);
  const cartPage = new CartPage(page);
  await menuPage.open();
  await menuPage.addCoffeeToCart('Cappuccino');
  await menuPage.viewCart();
  await cartPage.waitForLoading();
  await cartPage.removeAllCoffeeFromCart('Cappuccino');
  await cartPage.getErrorMessage();
});
