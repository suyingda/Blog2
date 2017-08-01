var express = require('express')  // 加载express模块
var swig = require('swig');
var app = express();
//加载模板

//第一参数：模板引擎的名称，同时是模板文件的后缀，第二个参数表示用于解析处理模板内容的方法
app.engine('html',swig.renderFile);
app.set('views','./views');
app.set('view engine','html')
swig.setDefaults({cache:false})

//加载数据库模块
var mongoose = require('mongoose');

//根据不同功能划分不同模块
app.use('/admin',require('./routers/admin'));
app.use('/api',require('./routers/api'));
/*app.use('/',require('./router/main'))*/


/*app.get('/',function(req,res,next){
	res.render('index')
})*/
mongoose.connect();
//监听请求
app.listen(8081);