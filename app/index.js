'use strict';
var yeoman = require('yeoman-generator');
var yosay = require('yosay');
var chalk = require('chalk');

var ArcGISProGenerator = yeoman.generators.Base.extend({

    init: function() {
        this.log(yosay('Welcome to the ArcGIS Pro generator!'));
    },

    askForName: function() {
        var done = this.async();

        var app = 'MyArcGISPro';
        var prompts = [{
            name: 'applicationName',
            message: 'What\'s the name of your ArcGIS Pro application?',
            default: app
        }];
        this.prompt(prompts, function(props) {
            this.applicationName = props.applicationName;

            done();
        }.bind(this));
    },

    retrieveContent: function() {
        var done = this.async();

        this.remote('bertt', 'ArcGISPro.HelloWorld', function(err, remote) {
            done();
        });
    },

    writing: function() {
        this.mkdir(this.applicationName);
        this.directory(this.cacheRoot() + '/bertt/ArcGISPro.HelloWorld/master', this.applicationName);
    },

    end: function() {
        console.log("Yo the project is created!");
    }
});

module.exports = ArcGISProGenerator;