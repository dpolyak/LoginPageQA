var MyAccountPage = function() {
  var userInfo = element(by.css('.header_user_info .account span'));
  var logout = element(by.css('a.logout'));

  this.getUserInfo = function() {
    return userInfo.getText();
  }

  this.logout = function() {
    logout.click();
  }

};

module.exports = new MyAccountPage();