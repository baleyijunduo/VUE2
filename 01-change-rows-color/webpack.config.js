const path = require('path');
// 1.导入html-webpack-plugin这个插件，得到插件的构造函数
const HtmlPlugin = require('html-webpack-plugin');
// 插入清除插件
const{CleanWebpackPlugin} = require('clean-webpack-plugin');
// 2.new 构造函数,创建插件的实例对象
const htmlPlugin = new HtmlPlugin({
    // 指定要复制的页面
    template:'./src/index.html',
    // 指定复制出来的文件名和存放路径
    filename:'./index.html'
});
// 使用Node.js中的导出语法，向外导出webpack配置对象
module.exports = {
    // 开发阶段建议值设为eval-source-map，方便定位代码
    // 发布阶段建议关闭devtool或设置nosources-source-map
    devtool:'eval-source-map',
    // 代表运行webpack的模式，包括development和production
    // 开发时要用development
    mode:'development',

    // entry：'指定要处理的文件'
    entry:path.join(__dirname,'./src/index1.js'),
    // 指定生成的文件要存放在哪里
    output:{
        // 存放到目录
        path:path.join(__dirname,'dist'),
        // 生成的文件名
        filename:'haohao.js'
    },
    devServer : {
        static : "./",
        // 自动打开浏览器
        open:true,
        // 自定义端口号
        // 在http协议中，端口号为80可以省略
        port:80,
        // 指定运行的主机地址
        host:'127.0.0.1'
    },
// 插件的数组，将来webpack在运行时，会加载并调用这些插件
    plugins:[htmlPlugin,new CleanWebpackPlugin()],
    module:{
        rules:[
            // 定义了不同模块对应的loader
            {test : /\.css$/,use:['style-loader','css-loader'] },
            // 处理.less文件的loader
            {test : /\.less$/,use:['css-loader','less-loader'] },
            // 处理图片文件的loader
            // 只有<=limit大小的图片才会被转成base64格式的图片
            // 还可以指定路径
            {test : /\.jpg|png|gif$/,use:'url-loader?limit=22229&outputPath=images' }
        ]
    }
}

