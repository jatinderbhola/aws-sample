module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        concat: {
            "options": { "separator": ";" },
            build: {
                "src": [
                    "front-end/*.js",
                    "front-end/controller/*.js"
                ],
                "dest": "public/javascripts/aws-sample.js"
            },
            lib: {
                "src": [
                    "node_modules/angular/angular.js",
                    "node_modules/angular-material/angular-material.js",
                    "node_modules/angular-aria/angular-aria.js",
                    "node_modules/angular-animate/angular-animate.js",
                    'node_modules/angular-messages/angular-messages.js',
                ],
                "dest": "public/javascripts/aws-sample-packages.js"
            },
            css: {
                src: [
                    "node_modules/angular-material/angular-material.css",
                    "front-end/app.css"
                ],
                dest: 'public/stylesheets/aws-sample.css'
            }
        }
    });

    // Load required modules //uglify
    grunt.loadNpmTasks('grunt-contrib-concat');
    // grunt.loadNpmTasks('grunt-contrib-uglify');

    // Task definitions
    grunt.registerTask('default', ['concat']);
};