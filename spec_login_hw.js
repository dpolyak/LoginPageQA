var loginPage = require('./login_page.js');

describe('Protractor Login App', function() {

  function login(email, pwd) {
    loginPage.setEmail(email);
    loginPage.setPassword(email);
    loginPage.submit();
  }

  beforeEach(function() {
    loginPage.get();
  });

  it('should include login elements', function() {
    expect(loginPage.isEmailElementPresent()).toBe(true);
    expect(loginPage.isPasswordElementPresent()).toBe(true);
    expect(loginPage.isSubmitButtonPresent()).toBe(true);
  });

  it('should have a correct email', function() {
    login('', '');
    expect(loginPage.getAlertText()).toEqual('An email address required.');

    login('', '123');
    expect(loginPage.getAlertText()).toEqual('An email address required.');

    login('a', '');
    expect(loginPage.getAlertText()).toEqual('Invalid email address.');

    login('a@b.', '123');
    expect(loginPage.getAlertText()).toEqual('Invalid email address.');
  });
  
});