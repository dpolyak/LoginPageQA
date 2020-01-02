var loginPage = require('./login_page.js');
var accoutPage = require('./my_account_page.js');
var passwordPage = require('./forgot_pwd_page.js');

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
    //browser.driver.sleep(2000);
  });

  it('should have login form elements', function() {
    expect(loginPage.getLoginFormHeader()).toEqual(loginPage.LOGIN_FORM_HEADER);
    expect(loginPage.isEmailElementPresent()).toBe(true);
    expect(loginPage.isPasswordElementPresent()).toBe(true);
    expect(loginPage.isSubmitButtonPresent()).toBe(true);
    expect(loginPage.getLostPasswordText()).toEqual(loginPage.LOST_PASSWORD_MSG);
  });

  it('should login and have a user info', function() {
    // lower case email
    var lowerCaseEmail = browser.params.validEmail.toLowerCase();
    login(lowerCaseEmail, browser.params.validPassword);
    expect(accoutPage.getUserInfo()).toEqual(browser.params.userFullName);
    accoutPage.logout();
 
    // upper case email
    var upperCaseEmail = browser.params.validEmail.toUpperCase();
    login(upperCaseEmail, browser.params.validPassword);
    expect(accoutPage.getUserInfo()).toEqual(browser.params.userFullName);
    accoutPage.logout();
  });

  it('should have forgot password action', function() {
    loginPage.lostPassword();
    expect(browser.getTitle()).toEqual(passwordPage.PAGE_TITLE);
  });

  it('should have an email', function() {
    login(browser.params.empty, browser.params.empty);
    expect(loginPage.getAlertText()).toEqual(loginPage.EMAIL_ADDRESS_REQUIRED_MSG);
  });

  it('should have a valide email', function() {
    login(browser.params.wrongEmail_1, browser.params.empty);
    expect(loginPage.getAlertText()).toEqual(loginPage.INVALID_EMAIL_ADDRESS_MSG);
  
    login(browser.params.wrongEmail_2, browser.params.invalidPassword);
    expect(loginPage.getAlertText()).toEqual(loginPage.INVALID_EMAIL_ADDRESS_MSG);
  });

  it('should have a password', function() {
    login(browser.params.validEmail, browser.params.empty);
    expect(loginPage.getAlertText()).toEqual(loginPage.PASSWORD_REQUIRED_MSG);
  });

  it('should have a valid password', function() {
    login(browser.params.validEmail, browser.params.invalidPassword);
    expect(loginPage.getAlertText()).toEqual(loginPage.INVALID_PASSWORD_MSG);
  });

  it('should have a correct password', function() {
    login(browser.params.validEmail, browser.params.wrongPassword);
    expect(loginPage.getAlertText()).toEqual(loginPage.AUTHENTICATION_FAILDED_MSG);
  });

});