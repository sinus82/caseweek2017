function Schools() {
  this.section_schools_list = null;
  this.ul_schools_list = null;
  this.school_template = null;
  this.schools_types = ['elementary','middle','comprehensive','university','other'];
  this.schools = {
    'elementary': [
		{
			'name': 'Szkoła Podstawowa nr 3',
			'photo': 'http://photos.nasza-klasa.pl/100574/36/main/161f869b72.jpeg',
			'stars': 4,
			'students_count': 3402
		},
		{
			'name': 'Samorządowa Szkoła Podstawowa nr 35',
			'photo': 'http://photos.nasza-klasa.pl/565326/4/main/831d4ce886.jpeg',
			'stars': 0,
			'students_count': 2094
		},
		{
			'name': 'Szkoła Podstawowa nr 41',
			'photo': 'http://photos.nasza-klasa.pl/34931/1/main/d556b6ec90.jpeg',
			'stars': 0,
			'students_count': 1936
		},
		{
			'name': 'Szkoła Podstawowa nr 1',
			'photo': 'http://photos.nasza-klasa.pl/303483/1/other/std/dbb2f1d1b3.jpeg',
			'stars': 5,
			'students_count': 1704
		},
		{
			'name': 'Szkoła Podstawowa nr 4',
			'photo': 'http://photos.nasza-klasa.pl/716476/6/other/std/7c2e6dadbd.jpeg',
			'stars': 0,
			'students_count': 1354
		},
		{
			'name': 'Szkoła Podstawowa nr 11',
			'photo': 'http://photos.nasza-klasa.pl/192355/2/other/std/62a195d45c.jpeg',
			'stars': 0,
			'students_count': 1352
		},
		{
			'name': 'Publiczna Szkoła Podstawowa nr 24',
			'photo': 'http://photos.nasza-klasa.pl/60604/27/main/bf7f41f7ff.jpeg',
			'stars': 5,
			'students_count': 1344
		},
		{
			'name': 'Publiczna Szkoła Podstawowa',
			'photo': 'http://photos.nasza-klasa.pl/6919792/3/main/f48a64045b.jpeg',
			'stars': 0,
			'students_count': 190
		}
    ],
    'comprehensive' : [
		{
			'name': 'Publiczne Liceum Ogólnokształcące Nr II Z Oddziałami Dwujęzycznymi',
			'photo': 'http://photos.nasza-klasa.pl/4469/50/main/48e7e4db17.jpeg',
			'stars': 0,
			'students_count': 5898
		},
		{
			'name': 'Liceum Ogólnokształcące Nr II',
			'photo': 'http://photos.nasza-klasa.pl/3058/93/other/std/1f04d5ae9b.jpeg',
			'stars': 0,
			'students_count': 5261
		},
		{
			'name': 'XIII Liceum Ogólnokształcące',
			'photo': 'http://photos.nasza-klasa.pl/32797/25/other/std/4b9ac0b488.jpeg',
			'stars': 0,
			'students_count': 4651
		},
		{
			'name': 'IV Liceum Ogólnokształcące',
			'photo': 'http://photos.nasza-klasa.pl/9042/130/other/std/31044bc43c.jpeg',
			'stars': 0,
			'students_count': 4612
		},
	],
	'middle': [],
	'university': [],
	'other': []
  };

  this.init = function() {
    this.section_schools_list = $('#section_schools_list');
    this.init_school_type();
	this.ul_schools_list = $('#ul_schools_list');
	this.school_template = $('#school_template');
  }

  this.init_school_type = function() {
    var thiz = this;
    this.schools_types.forEach(function(name) {
      $('#school-type--' + name).click(function() {
		thiz.render_schools(thiz.getSchools(name));
        return false;
      });
    });
  }

  this.ul_schools_list_clear = function() {
	this.ul_schools_list.empty();
  }
  
  this.render_schools = function(schools_list) {
	for(var i = 0; i < schools_list.length; i++) {
		this.school_template.tmpl(schools_list[i]).appendTo(this.ul_schools_list);
	}
	this.section_schools_list.removeClass('hidden');
  }
  
  this.getSchools = function(name) {
	return this.schools[name];
  }
}

window.onload = function() {
  var schools = new Schools();
  schools.init();
}
