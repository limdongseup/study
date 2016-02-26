var gulp = require('gulp'), // gulp
    webserver = require('gulp-webserver'), // webserver
    concat = require('gulp-concat'), // js 병합
    uglify = require('gulp-uglify'), // js 압축
    livereload = require('gulp-livereload'), // live load 크롬웹스토어에서 live load검색후 확장프로그램 설치
    watch = require('gulp-watch'), // 파일감지
    plumber = require('gulp-plumber'), // 오류처리
    rename = require("gulp-rename"), // 이름 변경
    minifyCss = require('gulp-minify-css'), // css 압축
    jshint  = require('gulp-jshint'), // js 문법체크
    image = require('gulp-imagemin'), // 이미지 용량 축소
    less = require('gulp-less'), // less
    autoprefixer = require('gulp-autoprefixer'),// -webit- 자동 생성
    csscomb = require('gulp-csscomb'); // css 순서

var src = 'src/',
    dist = 'dist/';

var paths = {
    js : src + 'script/',
    css : src + 'style/',
    image : src +'images/'
};

// 웹서버를 localhost:8000 로 실행한다.
gulp.task('server', function() {
    return gulp.src('/')
        .pipe(plumber({ errorHandler: errorHandler }))
        .pipe(webserver());
});

// 자바스크립트 파일을 하나로 합치고 압축한다.
gulp.task('script', function() {
    return gulp.src(paths.js + '**/*.js') // 작업파일, 결과파일 같은 폴더라서 배열로 파일명 지정
        .pipe(plumber({ errorHandler: errorHandler }))
        .pipe(concat('tabMenu.plugin.js'))
        .pipe(jshint())
        .pipe(jshint.reporter('jshint-stylish'))
        .pipe(gulp.dest(dist +'js')) // 압축 전
        .pipe(uglify())
        .pipe(rename(function(path) {
            path.basename += '.min';
        }))
        .pipe(gulp.dest(dist +'/js')); // 압축후
});

// style(기존)
gulp.task('style', function() {
    return gulp.src(paths.css + 'common.less') // 작업파일, 결과파일 같은 폴더라서 배열로 파일명 지정
        .pipe(plumber({ errorHandler: errorHandler }))
        .pipe(less())
        .pipe(autoprefixer())
        .pipe(csscomb())
        .pipe(autoprefixer())
        .pipe(csscomb())
        .pipe(gulp.dest(dist +'/css')) // 압축 전
        .pipe(minifyCss())
        .pipe(rename(function(path) {
            path.basename += '.min'
        }))
        .pipe(gulp.dest(dist +'/css')); // 압축후
});


// image
gulp.task('imagemin', function() {
    return gulp.src(paths.image + '**/*')
        .pipe(plumber({ errorHandler: errorHandler }))
        .pipe(image({
            pngquant: true,
            optipng: false,
            zopflipng: true,
            advpng: true,
            jpegRecompress: false,
            jpegoptim: true,
            mozjpeg: true,
            gifsicle: true,
            svgo: true
        }))
        .pipe(gulp.dest(dist +'/img'));
});

// 파일 변경 감지
gulp.task('watch', function() {
    livereload.listen();
    gulp.watch(paths.js + '**/*', ['script']);
    gulp.watch(paths.css + '**/*', ['style']);
    gulp.watch(paths.image + '**/*', ['imagemin']);
    gulp.watch([dist +'/css/*',dist +'/js/*',dist +'/*',dist +'/img/*']).on('change', livereload.changed);
});

gulp.task('default', [
    'script',
    'style',
    'imagemin',
    'watch'
]);


function errorHandler(err) {
    console.log(err);
    this.emit('end');
}

