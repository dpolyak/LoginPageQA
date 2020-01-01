var LoginPage = function() {
  var loginFormHeader = element(by.css('#login_form h3.page-subheading'));
  var email = element(by.id('email'));
  var password = element(by.id('passwd'));
  var submitLogin = element(by.id('SubmitLogin'));
  var lostPassword = element(by.css('.lost_password.form-group a'));
  var alert_message = element(by.css('.alert.alert-danger ol li'));
  var page_url = 'http://automationpractice.com/index.php?controller=authentication&back=my-account';

  this.get = function() {
    browser.get(page_url);
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

  this.isLostPasswordLinkPresent = function() {
    return lostPassword.isPresent();
  }

  this.setEmail = function(user) {
    email.clear();
    email.sendKeys(user);
  };

  this.setPassword = function(pwd) {
    password.clear();
    password.sendKeys(pwd);
  };

  this.submit = function() {
    submitLogin.click();
  }

  this.lostPassword = function() {
    lostPassword.click();
  }

  this.getAlertText = function() {
    return alert_message.getText();
  };

  this.getLoginFormHeader = function() {
    return loginFormHeader.getText();
  }

  this.getLostPasswordText = function() {
    return lostPassword.getText();
  }
};

module.exports = new LoginPage();