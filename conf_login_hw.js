// conf.js
exports.config = {
  framework: 'jasmine',
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['spec_login_hw.js'],
  params: {
	  validEmail: 'dpolyak@outbrain.com',
	  validPassword: '123qwe',
	  userFullName: 'D P',
	  empty: '',
	  wrongEmail_1: 'a',
	  wrongEmail_2: 'a@@b.com',
	  invalidPassword: '123',
	  wrongPassword: '123456'
  }
}