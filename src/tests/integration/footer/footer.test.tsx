import { test, expect } from '@playwright/test';
import { mockSocialsResponse } from '../../mocks/data.mock';

require('dotenv').config();

test('Footer should fetch socials data, open email send dialogue, and redirect on link click', async ({ page }) => {
    await page.goto(process.env.BASE_URL || '');

    await page.waitForSelector('[data-testid="site-footer"]');

    await expect(page.locator('[data-testid="social-links"]')).toBeVisible();

    const emailLink = page.locator('[data-testid="email"] a');
    await expect(emailLink).toBeVisible();
    expect(await emailLink.getAttribute('href')).toEqual(`mailto:${mockSocialsResponse.email}`);

    const facebookLink = page.locator('[data-testid="facebook"] a');
    await expect(facebookLink).toBeVisible();
    expect(await facebookLink.getAttribute('href')).toEqual(mockSocialsResponse.facebook);

    const linkedInLink = page.locator('[data-testid="linkedIn"] a');
    await expect(linkedInLink).toBeVisible();
    expect(await linkedInLink.getAttribute('href')).toEqual(mockSocialsResponse.linkedIn);

    const githubLink = page.locator('[data-testid="github"] a');
    await expect(githubLink).toBeVisible();
    expect(await githubLink.getAttribute('href')).toEqual(mockSocialsResponse.github);
});
