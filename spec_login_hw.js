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
    expect(loginPage.getLoginFormHeader()).toEqual(loginPage.LOGIN_FORM_HEADER);
    expect(loginPage.isEmailElementPresent()).toBe(true);
    expect(loginPage.isPasswordElementPresent()).toBe(true);
    expect(loginPage.isSubmitButtonPresent()).toBe(true);
    expect(loginPage.getLostPasswordText()).toEqual(loginPage.LOST_PASSWORD_MSG);
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
    expect(loginPage.getAlertText()).toEqual(loginPage.EMAIL_ADDRESS_REQUIRED_MSG);
  });

  it('should have a valide email', function() {
    login('a', '');
    expect(loginPage.getAlertText()).toEqual(loginPage.INVALID_EMAIL_ADDRESS_MSG);
  });

  it('should have a valide email', function() {
    login('a@@b.com', '123');
    expect(loginPage.getAlertText()).toEqual(loginPage.INVALID_EMAIL_ADDRESS_MSG);
  });

  it('should have a password', function() {
    login('dpolyak@outbrain.com', '');
    expect(loginPage.getAlertText()).toEqual(loginPage.PASSWORD_REQUIRED_MSG);
  });

  it('should have a valid password', function() {
    login('dpolyak@outbrain.com', '123');
    expect(loginPage.getAlertText()).toEqual(loginPage.INVALID_PASSWORD_MSG);
  });

  it('should have a correct password', function() {
    login('dpolyak@outbrain.com', '123456');
    expect(loginPage.getAlertText()).toEqual(loginPage.AUTHENTICATION_FAILDED_MSG);
  });

  it('should have forgot password action', function() {
    loginPage.lostPassword();
    expect(browser.getCurrentUrl()).toEqual("http://automationpractice.com/index.php?controller=password");
  });

});