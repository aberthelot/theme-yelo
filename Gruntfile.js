'use strict';

module.exports = function (grunt) {

  grunt.initConfig({
    compass: {
      dist: {
        options: {
          sassDir: 'sass',
          cssDir: 'css',
          environment: 'production'
        }
      },
      dev: {
        options: {
          sassDir: 'assets/scss',
          cssDir: 'assets/css',
          imagesDir: 'assets/img'
        }
      }
    },
    watch: {
      css: {
        files: ['assets/scss/**/*.scss'],
        tasks: ['default']
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-compass');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('dev', ['watch']);
  grunt.registerTask('default', ['compass:dev']);

};