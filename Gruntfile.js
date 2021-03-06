var watchedFiles = [
  'server.js',
  'api/**/*.js',
  'config/**/*.js',
  'game-engine/**/*.js',
  'socketEvents/**/*.js',
  'public/'
];

var watchedCSS = [
  'public/css/*.css',
  '!public/css/normalize.css',
  '!public/css/skeleton.css'
];
  

module.exports = function(grunt) {
  require('load-grunt-tasks')(grunt);

  grunt.initConfig({

    // Dev Tool Configurations
    env: {
      dev: {
        NODE_ENV: 'development'
      },
      test: {
        NODE_ENV: 'test'
      }
    },

    nodemon: {
      dev: {
        script: 'server.js',
        options: {
          ext: 'js, html',
          watch: watchedFiles 
        }
      },
      debug: {
        script: 'server.js',
        options: {
          nodeArgs: ['--debug'],
          ext: 'js, html',
          watch: watchedFiles
        }
      }
    },

    watch: {
      js: {
        files: [
          'server.js',
          'socketEvents/**/*.js'
        ],
        tasks: ['jshint']
      },
      src: {
        files: ['src/**/*.js'],
        tasks: ['browserify']
      },
      css: {
        files: watchedCSS,
        tasks: ['csslint']
      }
    },

    concurrent: {
      dev: {
        tasks: ['nodemon', 'watch'],
        options: {
          logConcurrentOutput: true
        }
      },
      debug: {
        tasks: ['nodemon:debug', 'watch', 'node-inspector'],
        options: {
          logConcurrentOutput: true
        }
      }
    },


    'node-inspector': {
      debug: {
        options: {
          'web-port': 8989
        }
      }
    },
    
    jsdoc: {
      dist: {
        src: ['game/*.js'],
        options: {
          destination: 'docs'
        }
      }
    },

    // Build Configurations
    browserify: {
      dist: {
        options: {
          transform: ["babelify"]
        },
        files: {
          "./public/js/app.js": ["./src/client/index.js"]
        }
      }
    },

    // Testing Configurations
    mochaTest: {
      src: 'test/**/*.js',
      options: {
        reporter: 'spec'
      }
    },

    // Linting Configurations
    jshint: {
      all: {
        src: ['server.js'],
        options: {
          esnext: true
        }
      }
    },
    csslint: {
      all: {
        src: watchedCSS
      }
    }

  });

  // Register Tasks
  grunt.registerTask('default', [
    'env:dev',
    'lint',
    'browserify',
    'concurrent:dev'
  ]);
  
  grunt.registerTask('build', [
    'browserify:dist'
  ]);

  grunt.registerTask('debug', [
    'env:dev',
    'lint',
    'browserify',
    'concurrent:debug'
  ]);

  grunt.registerTask('test', [
    'env:test',
    'mochaTest'
  ]);

  grunt.registerTask('lint', [
    'jshint',
    'csslint'
  ]);
}
