module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    imagemin: {                          // Task
        dynamic: {                         // Another target
          files: [{
            expand: true,                  // Enable dynamic expansion
            cwd: 'photoshop/',                   // Src matches are relative to this path
            src: ['**/*.{png,jpg,gif}'],   // Actual patterns to match
            dest: 'xcode/'                  // Destination path prefix
          }]
        }
    }
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-imagemin');


  // Default task(s).
  grunt.registerTask('default', ['imagemin']);

};