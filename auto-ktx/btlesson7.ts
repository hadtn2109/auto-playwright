import { test, expect } from '@playwright/test';

test('ĐN_30: Kiểm tra khi chỉ nhập mật khẩu', async ({ page }) => {
await page.goto('https://dormitory-staging.phx-smartuni.com/login')
await page.click('//input[@id=":r1:"]');
await page.fill('#id=":r1:"', 'admin');
await page.click('//button[contains(text(),"Đăng nhập")]');
//Kiểm tra message
const Message = page.locator('text = "Vui lòng nhập tên đăng nhập"');
await expect(Message).toBeVisible();
//Kiểm tra focus trường lỗi
const usernameInput = page.locator('//input[@id=":r0:"]');
await expect(usernameInput).toBeFocused(); 
});

test('ĐN_31: Kiểm tra khi chỉ nhập tài khoản', async ({ page }) => {
await page.goto('https://dormitory-staging.phx-smartuni.com/login')
await page.click('//input[@id=":r0:"]')
await page.fill('#id=":r0:"', 'admin');
await page.click('//button[contains(text(),"Đăng nhập")]');
//Kiểm tra message
const Message = page.locator('text = "Vui lòng nhập mật khẩu"');
await expect(Message).toBeVisible();
//Kiểm tra focus trường lỗi
const usernameInput = page.locator("//input[@id=':r1:']");
await expect(usernameInput).toBeFocused(); 
});