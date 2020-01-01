var LoginPage = function() {
  var email = element(by.id('email'));
  var password = element(by.id('passwd'));
  var submitLogin = element(by.id('SubmitLogin'));
  var alert = element(by.css('.alert.alert-danger ol li'));
  var login = element(by.css('a.login'));
  var logout = element(by.css('a.logout'));

  this.get = function() {
    browser.waitForAngularEnabled(false);
    browser.get('http://automationpractice.com/index.php?controller=authentication&back=my-account');
  };

  this.isEmailElementPresent = function() {
    return email.isPresent();
  }

  this.isPasswordElementPresent = function() {
    return password.isPresent();
  }

  this.isSubmitButtonPresent = function() {
    return submitLogin.isPresent();
  }

  this.isLoginButtonPresent = function() {
    return login.isPresent();
  }

  this.isLogoutButtonPresent = function() {
    return logout.isPresent();
  }

  this.clearEmail = function() {
    email.clear();
  }

  this.clearPassword = function() {
    password.clear();
  }

  this.setEmail = function(user) {
    email.sendKeys(user);
  };

  this.setPassword = function(pwd) {
    password.sendKeys(pwd);
  };

  this.submit = function() {
    submitLogin.click();
  }

  this.getAlertText = function() {
    return alert.getText();
  };
};

module.exports = new LoginPage();