requirejs.config({
    baseUrl:"js",
    paths:{
        zepto:"library/zepto.min"
    }
});

require([['zepto'],'infrastructure/flexible'],function(zepto,flexible){
    
});