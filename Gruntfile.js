module.exports = function(grunt){
         grunt.loadNpmTasks('grunt-contrib-jshint');
         grunt.initConfig({

	 jshint: {
	     
	     all: ['Gruntfile.js', 'lib/**/*.js',  'www/**/*.js']
	 },
	 
	 watch: {
	 
	    files: ['Gruntfile.js'],
	    tasks: ['jshint']
	 }

	 });	

};

