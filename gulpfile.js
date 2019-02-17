var gulp = require('gulp');
var protractor = require("gulp-protractor").protractor;
var webdriver_standalone = require("gulp-protractor").webdriver_standalone;
var webdriver_update = require("gulp-protractor").webdriver_update;
var reporter = require("gulp-protractor-cucumber-html-report");
var gutil = require('gulp-util');
var minimist = require('minimist');


gulp.task('webdriver-start', webdriver_standalone);

gulp.task('webdriver-update', webdriver_update);

gulp.task("execute", function () {
    return gulp.src([])
        .pipe(protractor({
            configFile: "./conf.js"
        })).on('error', (err) => {
            gutil.log(gutil.colors.red('Error (' + err.plugin + '): ' + err.message));
            gulp.start('report',function() {
                gutil.log(gutil.colors.magenta('Starting Report generation on error'));
            });
          }).on('end',  function() {
            gutil.log(gutil.colors.magenta('Starting Report generation on end'));
            gulp.start('report');
        });
    }
);

gulp.task("report", function () {
    gulp.src("./reports/cucumber-test-results.json")
        .pipe(reporter({
            dest: "reports"
        }));
});

gulp.task('cucumber-xml:report', function() {
    gulp.src('./reports/cucumber-test-results.json')
        .pipe(cucumberXmlReport({strict: true}))
        .pipe(gulp.dest('reports'));
});

function cucumberXmlReport(opts) {
    var gutil = require('gulp-util'),
        through = require('through2'),
        cucumberJunit = require('cucumber-junit');

    return through.obj(function (file, enc, cb) {
        // If tests are executed against multiple browsers/devices
        var suffix = file.path.match(/\/cucumber-?(.*)\.json/);
        var xml = cucumberJunit(file.contents, opts);
        file.contents = new Buffer(xml);
        file.path = gutil.replaceExtension(file.path, '.xml');
        cb(null, file);
    });
}