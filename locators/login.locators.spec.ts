import { Page } from '@playwright/test';

export class LoginLocators {
  constructor(private page: Page) {} //khai báo page là thuộc tính của class

  username() {
    return this.page.getByLabel(/Tên đăng nhập/i);
  }

  password() {
    return this.page.getByLabel(/Mật khẩu/i);
  }

  loginButton() {
    return this.page.getByRole('button', { name: /Đăng nhập/i });
  }
}
