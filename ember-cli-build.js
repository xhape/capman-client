/*jshint node:true*/
/* global require, module */
var EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function(defaults) {
  var app = new EmberApp(defaults, {
    // Add options here
  });

  //we are using the admin-lte theme https://almsaeedstudio.com/
  //use admin-lte dependencies if available to avoid conflict with the theme

  //fonts
  app.import('bower_components/font-awesome/css/font-awesome.css');
  app.import('bower_components/font-awesome/fonts/fontawesome-webfont.ttf', {
    destDir: 'fonts'
  });
  app.import('bower_components/font-awesome/fonts/fontawesome-webfont.woff', {
    destDir: 'fonts'
  });
  app.import('bower_components/font-awesome/fonts/fontawesome-webfont.woff2', {
    destDir: 'fonts'
  });
  app.import('bower_components/Ionicons/css/ionicons.css');
  app.import('bower_components/Ionicons/fonts/ionicons.ttf', {
    destDir: 'fonts'
  });
  app.import('bower_components/Ionicons/fonts/ionicons.woff', {
    destDir: 'fonts'
  });

  //css dependencies
  app.import('bower_components/admin-lte/bootstrap/css/bootstrap.css');
  app.import('bower_components/admin-lte/plugins/select2/select2.css');
  app.import('bower_components/admin-lte/plugins/fullcalendar/fullcalendar.css');
  app.import('bower_components/admin-lte/plugins/daterangepicker/daterangepicker-bs3.css');
  app.import('bower_components/admin-lte/plugins/bootstrap-wysihtml5/bootstrap3-wysihtml5.css');
  app.import('bower_components/admin-lte/dist/css/AdminLTE.css');
  app.import('bower_components/admin-lte/dist/css/skins/skin-blue.css');

  //javascript dependencies -
  app.import('bower_components/admin-lte/plugins/jQuery/jQuery-2.2.0.min.js');
  app.import('bower_components/admin-lte/bootstrap/js/bootstrap.js');

  //The jQuery replacement for select boxes
  app.import('bower_components/admin-lte/plugins/select2/select2.js');

  //required for full-calendar
  app.import('bower_components/moment/moment.js');

  //FullCalendar is a drag-n-drop jQuery plugin for displaying events on a full-sized calendar.
  app.import('bower_components/admin-lte/plugins/fullcalendar/fullcalendar.js');

  //for picking up date range
  app.import('bower_components/admin-lte/plugins/daterangepicker/daterangepicker.js');

  //eliminating the 300ms delay between a physical tap and the firing of a click event on mobile browsers
  app.import('bower_components/admin-lte/plugins/fastclick/fastclick.js');

  //wysig editor
  app.import('bower_components/admin-lte/plugins/bootstrap-wysihtml5/bootstrap3-wysihtml5.all.js');

  //small jQuery plugin that transforms any div into a scrollable area with a nice scrollbar
  app.import('bower_components/admin-lte/plugins/slimScroll/jquery.slimscroll.js');
  app.import('bower_components/admin-lte/dist/js/app.js');

  return app.toTree();
};
