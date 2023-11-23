import fs from 'fs';
import fonter from 'gulp-fonter';
import ttf2woff2 from 'gulp-ttf2woff2';

export const otfToTtf = () => {
    return app.gulp.src(`${app.path.srcFolder}/fonts/*.otf`)
        .pipe(app.plugins.plumber(
            app.plugins.notify.onError({
                title: "FONTS",
                message: "Error: <%= error.message %>"
            })
        ))
        .pipe(fonter({
            formats: ['ttf']
        }))
        .pipe(app.gulp.dest(`${app.path.srcFolder}/fonts/`))
}

export const ttfToWoff = () => {
    return app.gulp.src(`${app.path.srcFolder}/fonts/*.ttf`)
        .pipe(app.plugins.plumber(
            app.plugins.notify.onError({
                title: "FONTS",
                message: "Error: <%= error.message %>"
            })
        ))
        .pipe(fonter({
            formats: ['woff']
        }))
        .pipe(app.gulp.src(`${app.path.srcFolder}/fonts/*.ttf`))
        .pipe(ttf2woff2())
        .pipe(app.gulp.dest(`${app.path.build.fonts}`))
}

export const fontsStyle = (cb) => {
    let file_content = fs.readFileSync(app.path.srcFolder + '/less/fonts.less');
    if (file_content == '') {
        fs.writeFile(app.path.srcFolder + '/less/fonts.less', '', () => {
            fs.readdir(app.path.build.fonts, function (err, items) {
                if (items) {
                    let c_fontname;
                    fs.appendFile(app.path.srcFolder + '/less/fonts.less', '// main: style.less\r\n', cb);
                    for (var i = 0; i < items.length; i++) {
                        let fontname = items[i].split('.');
                        fontname = fontname[0];
                        if (c_fontname != fontname) {
                            fs.appendFile(app.path.srcFolder + '/less/fonts.less', '.font("' + fontname + '", "' + fontname + '", "400", "normal");\r\n', cb);
                        }
                        c_fontname = fontname;
                    }
                    cb(); // Вызываем колбэк, когда все операции завершены
                }
            })
        });
    } else {
        cb(); // Вызываем колбэк, если файл уже существует
    }
};

function cb() { }