module.exports = function (grunt) {
  /* Do not prepend ./ to the paths- it will prevent newly added files
  to not be detected during grunt watch */
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    sass: {
      dist: {
        files: [{
          expand: true,
          cwd: 'src/scss',
          src: ['style.scss'],
          dest: 'src/styles',
          ext: '.css',
          extDot: 'last'
        }]
      }
    },
    watch: {
      sass: {
        files: ['src/scss/**/*.scss'],
        tasks: ['sass']
      }
    }
  })

  // Load the plugins
  grunt.loadNpmTasks('grunt-contrib-sass')
  grunt.loadNpmTasks('grunt-contrib-watch')

  // Default task(s).
  grunt.registerTask('default', ['watch'])
}
