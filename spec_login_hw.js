// spec.js
describe('Protractor Login App', function() {
  var email = element(by.id('email'));
  var password = element(by.id('passwd'));

  beforeEach(function() {
    browser.waitForAngularEnabled(false);
    browser.get('http://automationpractice.com/index.php?controller=authentication&back=my-account');
  });

  it('should have a title', function() {
    expect(browser.getTitle()).toEqual('Login - My Store');
  });

  it('should read the value from an input', function() {
    email.sendKeys(1);
    expect(email.getAttribute('value')).toEqual('1');
    password.sendKeys(2);
    expect(password.getAttribute('value')).toEqual('2');
  });
  
});