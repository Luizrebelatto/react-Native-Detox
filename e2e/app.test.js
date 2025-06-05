import { by, device, element, expect } from 'detox';

describe('App Flow', () => {
  beforeAll(async () => {
    await device.launchApp();
  });

  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('should show login screen on app launch', async () => {
    await expect(element(by.text('Login'))).toBeVisible();
  });

  it('should show error message with invalid credentials', async () => {
    await element(by.placeholder('Email')).typeText('invalid@email.com');
    await element(by.placeholder('Password')).typeText('wrongpassword');
    await element(by.text('Login')).tap();
    await expect(element(by.text('Error'))).toBeVisible();
  });

  it('should navigate to items screen after successful login', async () => {
    await element(by.placeholder('Email')).typeText('teste@gmail.com');
    await element(by.placeholder('Password')).typeText('teste123');
    await element(by.text('Login')).tap();
    await expect(element(by.placeholder('Search items...'))).toBeVisible();
  });

  it('should show items list and allow searching', async () => {
    await element(by.placeholder('Email')).typeText('teste@gmail.com');
    await element(by.placeholder('Password')).typeText('teste123');
    await element(by.text('Login')).tap();

    await expect(element(by.text('Item 1'))).toBeVisible();
    await expect(element(by.text('Item 2'))).toBeVisible();

    await element(by.placeholder('Search items...')).typeText('Item 1');
    await expect(element(by.text('Item 1'))).toBeVisible();
    await expect(element(by.text('Item 2'))).not.toBeVisible();
  });

  it('should navigate to item details and back', async () => {
    await element(by.placeholder('Email')).typeText('teste@gmail.com');
    await element(by.placeholder('Password')).typeText('teste123');
    await element(by.text('Login')).tap();

    await element(by.text('Item 1')).tap();

    await expect(element(by.text('Item 1'))).toBeVisible();
    await expect(element(by.text('Details Description for item 1'))).toBeVisible();

    await element(by.text('Back')).tap();

    await expect(element(by.placeholder('Search items...'))).toBeVisible();
  });
}); 