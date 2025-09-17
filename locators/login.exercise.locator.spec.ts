import { Page } from "@playwright/test";

export class LoginExerciseLocators {
  constructor(private page: Page) {} //khai báo page là thuộc tính của class
    shopname1() {
        return this.page.locator('form#loginform input').nth(0); //nth(0) lấy phần tử đầu tiên trong danh sách các phần tử khớp với selector
    }
    shopname2() {
        return this.page.locator('form#loginform').locator('input[username="Retailer"]'); //tìm phần tử con bên trong phần tử cha
    }
}