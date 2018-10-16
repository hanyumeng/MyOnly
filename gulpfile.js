var gulp = require("gulp");
let sass=require("gulp-sass");

gulp.task("copy-html",function(){
	//gulp.src("index.html").pipe(gulp.dest("dist"));
	gulp.src("../MyOnly/**/*.html")
	.pipe(gulp.dest("D:\\phpStudy\\WWW\\only\\demo"));
});
gulp.task("copy-html1.1",function(){
	gulp.src("index1.1（加入轮播图jquery）.html")
	.pipe(gulp.dest("D:\\phpStudy\\WWW\\only\\demo"));
});
gulp.task("imgs",function(){
	gulp.src("img/**/*")
	.pipe(gulp.dest("D:\\phpStudy\\WWW\\only\\demo\\img"));
});
gulp.task("data1",function(){
	gulp.src("js/*.js")
	.pipe(gulp.dest("D:\\phpStudy\\WWW\\only\\demo\\js"));
});
gulp.task("data2",function(){
	gulp.src("css/*.css")
	.pipe(gulp.dest("D:\\phpStudy\\WWW\\only\\demo\\css"));
});
gulp.task("data3",function(){
	gulp.src("font/*.css")
	.pipe(gulp.dest("D:\\phpStudy\\WWW\\only\\demo\\font"));
});

gulp.task("sass",function(){
    gulp.src("*.scss")
    .pipe(sass())
    .pipe(gulp.dest("css"));
})

gulp.task("build",["copy-html","copy-html1.1","imgs","data1","data2","data3","sass"],function(){
	console.log("ok");
});



gulp.task("watch",function(){
	gulp.watch("../MyOnly/**/*.html",["copy-html"]);
	gulp.watch("index1.1（加入轮播图jquery）.html",["copy-html1.1"]);
	gulp.watch("img/**/*",["imgs"]);
	gulp.watch("js/*.js",["data1"]);
	gulp.watch("css/*.css",["data2"]);
	gulp.watch("font/*.css",["data3"]);
	gulp.watch("*.scss",["sass"]);
});