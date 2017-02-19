var config = require('./config');
var path = require('path');
var rename = require('gulp-rename');
var template = require('gulp-template');
var yargs = require('yargs');

module.exports = function(gulp) {

    let root = 'UIDev';

    // helper method for resolving paths
    let resolveToComponents = (glob = '') => {
        return path.join(root, 'app/components', glob); // app/components/{glob}
    };

    // let resolveToLazy = (glob = '') => {
    //     return path.join(root, 'app/components', glob); // app/components/{glob}
    // };

    let resolveToApt = (glob = '') => {
        return path.join(root, '../../UIDev/app/components', glob);
    };

    // map of all paths
    let paths = {
        output: root,
        blankTemplates: path.join(__dirname, 'generator', 'components/**/*.**'),
        // blankLazyTemplates: path.join(__dirname, 'generator', 'lazy/**/*.**'),
        blankAptTemplates: path.join(__dirname, 'generator', 'apt/**/*.**'),
        dest: path.join(__dirname, 'dist')
    };

    const cap = (val) => {
        return val.charAt(0).toUpperCase() + val.slice(1);
    };

    const snakeToCamel = (s) => {
        return s.replace(/(\-\w)/g, function(m) {
            return m[1].toUpperCase(); });
    };

    // generate eager loaded component
    gulp.task('component', () => {
        const name = yargs.argv.name;
        const nameSnakeCase = snakeToCamel(name);

        const parentPath = yargs.argv.parent || '';
        const destPath = path.join(resolveToComponents(), parentPath, name);

        return gulp.src(paths.blankTemplates)
            .pipe(template({
                name: name,
                nameSnakeCase: nameSnakeCase,
                upCaseName: cap(nameSnakeCase)
            }))
            .pipe(rename((path) => {
                path.basename = path.basename.replace('temp', name);
            }))
            .pipe(gulp.dest(destPath));
    });

    // // generate lazy loaded component
    // gulp.task('lazy', () => {
    //     const parentPath = yargs.argv.parent || '';
    //     const destPath = path.join(resolveToLazy(), parentPath, name);

    //     return gulp.src(paths.blankLazyTemplates)
    //         .pipe(template({
    //             name: name,
    //             nameSnakeCase: nameSnakeCase,
    //             upCaseName: cap(nameSnakeCase)
    //         }))
    //         .pipe(rename((path) => {
    //             path.basename = path.basename.replace('temp', name);
    //         }))
    //         .pipe(gulp.dest(destPath));
    // });

    gulp.task('apt', () => {
        const name = yargs.argv.name;
        const nameSnakeCase = snakeToCamel(name);

        const parentPath = yargs.argv.parent || '';
        const destPath = path.join(resolveToApt(), parentPath, name);

        return gulp.src(paths.blankAptTemplates)
            .pipe(template({
                name: name,
                nameSnakeCase: nameSnakeCase,
                upCaseName: cap(nameSnakeCase)
            }))
            .pipe(rename((path) => {
                path.basename = path.basename.replace('temp', name);
            }))
            .pipe(gulp.dest(destPath));
    });

};
