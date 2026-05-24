import { test, expect } from '@playwright/test';
import { MenuPage } from '../../src/pages/MenuPage';
import { CartPage } from '../../src/pages/CartPage';

test('Empty cart shows correct message', async ({ page }) => {
  const cartPage = new CartPage(page);
  await cartPage.open();
  await cartPage.getErrorMessage();
});
