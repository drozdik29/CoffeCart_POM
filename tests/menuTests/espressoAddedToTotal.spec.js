import { test, expect } from '@playwright/test';
import { MenuPage } from '../../src/pages/MenuPage';

test('Espresso cost is added to Total on menu page', async ({ page }) => {
const menuPage = new MenuPage(page);
await menuPage.open();
await menuPage.addCoffeeToCart('Espresso');
await menuPage.checkoutTotalContains('$10.00');
});
