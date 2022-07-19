// 使用ES6导入模块
import $ from 'jquery'
// 在webpack中，一切皆模块，都可以通过ES6导入语法进行导入和使用
import './CSS/index.css'
import './CSS/index.less'
// 导入图片
import logo from './img/1.jpg'
// 定义jq的入口函数
$(function(){
    // 3.实现奇偶变色效果
    $('li:odd').css('background-color','yellow');
    $('li:even').css('background-color','red');
    
    // 图片赋给src属性
    document.querySelector('.box').src = logo;
    console.log( document.querySelector('.box').src);
    // $('.box').attr('src',logo);
})

// 定义装饰器函数
function info(target){
    target.info = 'Person info.';
}

// 定义一个普通类
// @info
// class Person{}

console.log(Person.info);