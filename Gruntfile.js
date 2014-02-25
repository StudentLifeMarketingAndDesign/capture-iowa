module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({

    pkg: grunt.file.readJSON('package.json'),

    concat: {
      dist: {
        src: [
          'division-simple/bower_components/jquery/jquery.js',
          'division-simple/bower_components/magnific-popup/dist/jquery.magnific-popup.js',
          'division-simple/vendor/sass-bootstrap/js/sass-bootstrap.min.js',
          'division-bar/js/division-bar.js',
          'division-simple/js/*.js',
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

    compass: {
      dist: {                   // Target
        options: {              // Target options
          sassDir: 'themes/captureiowa/scss',
          cssDir: 'themes/captureiowa/css',
          environment: 'production'
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
        tasks: ['compass'],
        options: {
          spawn: false,
        }
      }
    },

  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-compass');
  grunt.loadNpmTasks('grunt-contrib-imagemin');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-simple-watch');

  // Default task(s).
  grunt.registerTask('default', ['concat', 'uglify', 'compass', 'simple-watch']);

};