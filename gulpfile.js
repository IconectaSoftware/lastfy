var gulp = require("gulp");
var sass = require("gulp-sass");
var browserSync = require("browser-sync").create();

//definicmos la tarea por defecto
gulp.task("default", function(){
    // iniciamos el servidor de desarrollo
    browserSync.init({ server: "src/"});
    
    // observa cambios en los archivos SASS y ejecuta las tarea compile-sass
    gulp.watch(["src/scss/*.scss", "src/scss/**/*.scss"], ["compile-sass"]);
    
    // observa los cambios en los archivos html y recarga el navegador
    gulp.watch("src/*.html").on("change", browserSync.reload);
})

//compilar sass
gulp.task("compile-sass", function(){
    gulp.src("./src/scss/style.scss") //cargamos el archivo styles.scsss
        .pipe(sass().on("error", sass.logError)) //lo compilamos con gulp-sass
        .pipe(gulp.dest("src/css")) // lo guardamos en la carpeta css
        .pipe(browserSync.stream()) // recarga el css del navegador

});