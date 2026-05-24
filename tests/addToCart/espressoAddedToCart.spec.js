import { test, expect } from '@playwright/test';
import { MenuPage } from '../../src/pages/MenuPage';
import { CartPage } from '../../src/pages/CartPage';

test('Espresso correctly added to the Cart', async ({ page }) => {

  const menuPage = new MenuPage(page);
  const cartPage = new CartPage(page);
  await menuPage.open();
  await menuPage.addCoffeeToCart('Espresso');
  await menuPage.viewCart();
  await cartPage.waitForLoading();
await cartPage.verifyCartItemName('Espresso');
await cartPage.verifyCartItemUnitPrice('Espresso', '$10.00');
await cartPage.verifyCartItemTotalPrice('Espresso', '$10.00');
});
