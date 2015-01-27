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
    }
  });

  grunt.loadNpmTasks('grunt-contrib-compass');

  grunt.registerTask('default', ['compass:dev']);

};