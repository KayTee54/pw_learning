import { Page } from '@playwright/test';

export class LoginLocators {
  constructor(private page: Page) {} //khai báo page là thuộc tính của class
  shopname() {
    return this.page.locator('#Retailer'); //phương thức trả về locator cho trường tên cửa hàng
  }

  username() { //phương thức trả về locator cho trường tên đăng nhập
    return this.page.locator('#UserName');
  }

  password() {
    return this.page.locator('#Password');
  }

  loginmanagerbtn() {
    return this.page.getByRole('button', { name: /Quản lý/i });
  }
  loginsalebtn(){
    return this.page.locator('#loginNewSale');
  }
}
