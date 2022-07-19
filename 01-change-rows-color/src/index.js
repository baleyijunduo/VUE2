// 使用ES6导入模块
import $ from 'jquery'

// 定义jq的入口函数
$(function(){
    // 3.实现奇偶变色效果
    $('li:odd').css('background-color','red');
    $('li:even').css('background-color','pink');
    
})