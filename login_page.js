var LoginPage = function() {
  var email = element(by.id('email'));
  var password = element(by.id('passwd'));
  var submitLogin = element(by.id('SubmitLogin'));
  var alert = element(by.css('.alert.alert-danger ol li'));

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