import { test, expect } from '@playwright/test';

test('It has an input for pokemans', async ({ page }) => {
  await page.goto('/pokemon-search');
  const searchInput = page.getByPlaceholder('Search');
  await searchInput.fill('Pika');
  page.getByRole('link', { name: 'Pikachu' });
});
