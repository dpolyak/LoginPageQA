var loginPage = require('./login_page.js');

describe('Protractor Login App', function() {

  function login(email, pwd) {
    loginPage.setEmail(email);
    loginPage.setPassword(pwd);
    loginPage.submit();
  }

  beforeEach(function() {
    //browser.driver.sleep(3000);
    loginPage.get();
    loginPage.clearEmail();
    loginPage.clearPassword();
  });

  it('should include login elements', function() {
    expect(loginPage.isEmailElementPresent()).toBe(true);
    expect(loginPage.isPasswordElementPresent()).toBe(true);
    expect(loginPage.isSubmitButtonPresent()).toBe(true);
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

});