module.exports = function(grunt) {
  var globalConfig = {
    themeDir: 'themes/captureiowa'
  };

  // Project configuration.
  grunt.initConfig({
    globalConfig: globalConfig,
    pkg: grunt.file.readJSON('package.json'),

    concat: {
      dist: {
        src: [
          'bower_components/bootstrap-sass/javascript/bootstrap.js',
          'division-bar/js/division-bar.js',
          'themes/captureiowa/js/*.js'
        ],
        dest: 'themes/captureiowa/js/build/main.js'
      }
    },

    uglify: {
      build: {
        src: ['themes/captureiowa/js/build/main.js'],
        dest: 'themes/captureiowa/js/build/main.min.js'
      }
    },

    sass: {
      dist: { 
        files: {
          '<%=globalConfig.themeDir %>/css/master.css' : '<%=globalConfig.themeDir %>/scss/master.scss'
        },                  // Target
        options: {              // Target options
          style: 'compressed',
          loadPath: ['bower_components/bootstrap-sass/assets/stylesheets/']
        }
      }
    },


    imagemin: {
      dynamic: {
        files: [{
          expand: true,
          cwd: 'themes/captureiowa/images/',
          src: ['**/*.{png,jpg,gif}'],
          dest: 'themes/captureiowa/images/'
        }]
      }
    },

    watch: {
      scripts: {
        files: ['division-simple/js/*.js', 'division-simple/js/**/*.js', 'themes/captureiowa/js/*.js'],
        tasks: ['concat', 'uglify'],
        options: {
          spawn: false,
        }
      },
      css: {
        files: ['themes/captureiowa/scss/*.scss', 'themes/captureiowa/scss/**/*.scss'],
        tasks: ['sass'],
        options: {
          spawn: false,
        }
      }
    },

  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-imagemin');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-simple-watch');

  // Default task(s).
  grunt.registerTask('default', ['concat', 'uglify', 'sass', 'simple-watch']);

};