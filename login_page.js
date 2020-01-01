var LoginPage = function() {
  // login page URL
  var page_url = 'http://automationpractice.com/index.php?controller=authentication&back=my-account';
  // page elements
  var lostPassword    = element(by.css('.lost_password.form-group a'));
  var alert_message   = element(by.css('.alert.alert-danger ol li'));
  var loginFormHeader = element(by.css('#login_form h3.page-subheading'));
  var email           = element(by.id('email'));
  var password        = element(by.id('passwd'));
  var submitLogin     = element(by.id('SubmitLogin'));
  
  // login alert messages and form titles
  this.LOGIN_FORM_HEADER          = 'ALREADY REGISTERED?';
  this.LOST_PASSWORD_MSG          = 'Forgot your password?';
  this.EMAIL_ADDRESS_REQUIRED_MSG = 'An email address required.';
  this.INVALID_EMAIL_ADDRESS_MSG  = 'Invalid email address.';
  this.PASSWORD_REQUIRED_MSG      = 'Password is required.';
  this.INVALID_PASSWORD_MSG       = 'Invalid password.';
  this.AUTHENTICATION_FAILDED_MSG = 'Authentication failed.';


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