import rename from 'gulp-rename';
import gcmq from  'gulp-group-css-media-queries';
import cleanCss from 'gulp-clean-css';
import webpcss from "gulp-webpcss";
import autoprefixer from 'gulp-autoprefixer';

export const css = () => {
    return app.gulp.src(app.path.src.css, { sourcemap: app.isDev, allowEmpty: true})
        .pipe(app.plugins.plumber(
            app.plugins.notify.onError({
                title: "CSS",
                message: "Error: <%= error.message %>"
            })
        ))
        .pipe(app.plugins.replace(/@img\//g, "../img/"))
        .pipe(
            app.plugins.if(
                app.isBuild,
                webpcss({
                    webClass: ".webp",
                    noWebpClass: ".no-webp"
                })
            )
        )
        .pipe(
            app.plugins.if(
                app.isBuild,
                autoprefixer({
                    grid: true,
                    overrideBrowserlist: ["last 3 versions"],
                    cascade: true
                })
            )
        )
        .pipe(gcmq())
        .pipe(app.gulp.dest(app.path.build.css))
        .pipe(app.plugins.browsersync.stream())
        .pipe(
            app.plugins.if(
                app.isBuild,
                cleanCss()
            )
        )
        .pipe(rename({
            extname: ".min.css"
        }))
        .pipe(app.gulp.dest(app.path.build.css))
}