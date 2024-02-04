import { test, expect } from '@playwright/test';

test.skip('Footer should fetch socials data, open email send dialogue, and redirect on link click', async ({ page }) => {
    await page.goto('/');

    await page.waitForSelector('[data-testid="site-footer"]');

    await expect(page.locator('[data-testid="social-links"]')).toBeVisible();

    const socialLinks = await page.$$eval('[data-testid="social-links"] a', (links) =>
        links.map((link) => link.getAttribute('href'))
    );

    expect(socialLinks).toBeDefined();
    expect(socialLinks.length).toBeGreaterThan(0);

    const githubLink = page.locator('[data-testid="github"] a');
    await expect(githubLink).toBeVisible();

    const [newPage] = await Promise.all([
        page.waitForEvent('popup'),
        githubLink.click(),
    ]);

    await newPage.waitForLoadState('domcontentloaded');

    const currentURL = newPage.url();
    expect(currentURL).toBe('https://github.com/StGrozdanov');
});