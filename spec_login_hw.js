var loginPage = require('./login_page.js');
var accoutPage = require('./my_account_page.js');

describe('Protractor Login App', function() {

  function login(email, pwd) {
    loginPage.setEmail(email);
    loginPage.setPassword(pwd);
    loginPage.submit();
  }

  beforeAll(function() {
    browser.waitForAngularEnabled(false);
  });

  beforeEach(function() {
    loginPage.get();
  });

  afterEach(function() {
    browser.driver.sleep(2000);
  });

  it('should include login elements', function() {
    expect(loginPage.getLoginFormHeader()).toEqual('ALREADY REGISTERED?');
    expect(loginPage.isEmailElementPresent()).toBe(true);
    expect(loginPage.isPasswordElementPresent()).toBe(true);
    expect(loginPage.isSubmitButtonPresent()).toBe(true);
    expect(loginPage.getLostPasswordText()).toEqual('Forgot your password?');
  });

  it('should have a user info', function() {
    login('dpolyak@outbrain.com', '123qwe');
    expect(accoutPage.getUserInfo()).toEqual('D P');
    accoutPage.logout();
  });

  it('should have a user info', function() {
    login('DPOLYAK@OUTBRAIN.COM', '123qwe');
    expect(accoutPage.getUserInfo()).toEqual('D P');
    accoutPage.logout();
  });

  it('should have an email', function() {
    login('', '');
    expect(loginPage.getAlertText()).toEqual('An email address required.');
  });

  it('should have a valide email', function() {
    login('a', '');
    expect(loginPage.getAlertText()).toEqual('Invalid email address.');
  });

  it('should have a valide email', function() {
    login('a@@b.com', '123');
    expect(loginPage.getAlertText()).toEqual('Invalid email address.');
  });

  it('should have a password', function() {
    login('dpolyak@outbrain.com', '');
    expect(loginPage.getAlertText()).toEqual('Password is required.');
  });

  it('should have a valid password', function() {
    login('dpolyak@outbrain.com', '123');
    expect(loginPage.getAlertText()).toEqual('Invalid password.');
  });

  it('should have a correct password', function() {
    login('dpolyak@outbrain.com', '123456');
    expect(loginPage.getAlertText()).toEqual('Authentication failed.');
  });

  it('should have forgot password action', function() {
    loginPage.lostPassword();
    expect(browser.getCurrentUrl()).toEqual("http://automationpractice.com/index.php?controller=password");
  });
  
});