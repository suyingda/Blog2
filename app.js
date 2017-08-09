var express = require('express')  // 加载express模块
var swig = require('swig');
var app = express();
//加载模板

//当用户访问的URL以/public开始，那么直接返回对应__dirname+'/public'下的而文件
 
//app.use('./public',express.static(__dirname+'/public'));
app.use(express.static('public'));

 
//第一参数：模板引擎的名称，同时是模板文件的后缀，第二个参数表示用于解析处理模板内容的方法
app.engine('html',swig.renderFile);
app.set('views','./views');
app.set('view engine','html')
swig.setDefaults({cache:false})

//加载数据库模块
var mongoose = require('mongoose');

/*加载body-parser,用来处理post提交过来的数据*/
var bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({extended:true}))  //配置bodyParse
//根据不同功能划分不同模块
app.use('/admin',require('./routers/admin'));
app.use('/api',require('./routers/api'));
app.use('/',require('./routers/main'))


/*app.get('/',function(req,res,next){
	res.render('index')
})*/
mongoose.connect('mongodb://localhost:27017/blog',function(err){
	if(err){
		console.log('数据库连接失败');
	}else{
		console.log('数据库连接成功')
		app.listen(8081);
	}
});
//监听请求
