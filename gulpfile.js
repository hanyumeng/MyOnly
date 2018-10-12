var gulp = require("gulp");

gulp.task("copy-html",function(){
	//gulp.src("index.html").pipe(gulp.dest("dist"));
	gulp.src("index1.html")
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
gulp.task("build",["copy-html","copy-html1.1","imgs","data1","data2"],function(){
	console.log("ok");
});
gulp.task("watch",function(){
	gulp.watch("index1.html",["copy-html"]);
	gulp.watch("index1.1（加入轮播图jquery）.html",["copy-html1.1"]);
	gulp.watch("img/**/*",["imgs"]);
	gulp.watch("js/*.js",["data1"]);
	gulp.watch("css/*.css",["data2"]);
});