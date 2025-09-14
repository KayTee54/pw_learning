import { test, expect } from '@playwright/test';

test.describe('FNB Login & Forgot Password', () => {

  test('Tiêu đề trang chứa "Đăng nhập"', async ({ page }) => {
    await page.goto('/'); //nhận cấu hình url từ playwright.config.ts
    await expect(page).toHaveTitle(/Đăng nhập/i); //kiểm tra tiêu đề trang, /i để bỏ qua chữ hoa/thường
  });

  test('Đi đến "Quên mật khẩu" và thấy heading', async ({ page }) => {
    await page.goto('/');
    await page.locator('text=Quên mật khẩu').click();
    //await page.getByRole('link', { name: 'Quên mật khẩu' }).click(); //getbyrole -> role được suy ra từ locator, ví dụ <a> (có href) → role "link"
    await expect(page.getByRole('heading', { name: 'Quên mật khẩu' })).toBeVisible();
  });
});
