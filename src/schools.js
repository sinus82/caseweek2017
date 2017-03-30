function Schools() {
  this.schools_list = null;
  this.schools_types = ['elementary','middle','comprehensive','university','other'];
  this.schools = {
    'elementary': [
      
    ],
    'comprehensive' : [
    ]
  };

  this.init = function() {
    this.schools_list = $('#schools_list');
    console.log(this.schools_list);
    this.init_school_type();
  }

  this.init_school_type = function() {
    var thiz = this;
    this.schools_types.forEach(function(name) {
      $('#school-type--' + name).click(function() {
        thiz.getSchools(name);
        return false;
      });
    });
  }

  this.getSchools = function(name) {

  }
}

window.onload = function() {
  var schools = new Schools();
  schools.init();
}
