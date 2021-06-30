module.exports = function(grunt) {
  grunt.loadNpmTasks('grunt-html-snapshot');

  grunt.initConfig({
    htmlSnapshot: {
      all: {
        options: {
          snapshotPath: 'snapshots/',
          sitePath: 'www.maatai.com',
          msWaitForPages : 7000 ,
          urls: ['#/', '#/empresas']
        }
      }
    }
  });

  grunt.registerTask('default', ['htmlSnapshot']);
};
