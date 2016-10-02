function Tab(tabId){
    
    this.tab = document.getElementById(tabId);
    this.lis = this.tab.getElementsByTagName("ul")[0].getElementsByTagName('li');    //找到所有的li
    this.divBody = this.tab.getElementsByTagName("div")[0];   //找tabBody
    this.divs = this.divBody.getElementsByTagName("div");     //找与li对应的div

    this.init(); //给li添加点击事件
    
    this.setFirstTab();

}

//根据li是否有某一个处于on。如果有，则显示相应的div，如果没有则默认第一个。
Tab.prototype.setFirstTab = function(){
    
    var currentIndex = 0;
    for(var i = 0; i<this.lis.length;i++){
        //检测是否有某一个li的class中有on 
        var className = this.lis[i].className;
        //检测字符串className是否有on
        if(className.indexOf("on") !=-1){
            currentIndex = i;
            break;
            
        }
    }
    

    this.on(currentIndex);
}


Tab.prototype.init = function(){
    var that = this;//缓存this
   // console.info("---",this);
    
    for (var i = 0; i<this.divs.length;i++){
        this.divs[i].style.display="none";
    }
    this.divs[0].style.display="block";
    
    
    for (var i = 0; i<this.lis.length;i++){
        
        this.lis[i].index = i;
        this.lis[i].onmouseenter = function(){
            
            var t = this.index;
            that.on(t); 
        }
    }
}

Tab.prototype.on=function(index){
    for(var i = 0;i< this.lis.length;i++){
        this.lis[i].className ="";
        this.divs[i].style.display = "none";
    }
    
    this.lis[index].className ="on";
    this.divs[index].style.display = "block";
    
    //console.info(index);
}

var t = new Tab("tab");



//console.info(t);
