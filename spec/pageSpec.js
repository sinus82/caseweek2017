var fs = require('fs');
var cheerio = require('cheerio');

$ = cheerio.load(fs.readFileSync('src/schools.html'));

describe("Deploy", function() {
  it("Dir check", function() {
    expect(fs.readFileSync('deploy.sh')).toMatch(/node up.js [0-9a-f]{5} src.zip/);
  });
});

describe("HTML", function() {

  it("School Types", function() {
    expect($('section#type_list ul li i.icon-school-type').length).toEqual(5);
  });

});
