(function() {
  var BackTop = {};
	BackTop.targetObj=null;
	BackTop.Speed=0;
	BackTop.Time=0;
	BackTop.Times=0;
  //匀速运动
	BackTop.scrollToTop=function () {
		var scrollTop=document.documentElement.scrollTop||document.body.scrollTop;
		if (BackTop.Time >= BackTop.Times || scrollTop<=0) {
			clearInterval(BackTop.targetObj);
      console.log("end");
			return;
		}
    BackTop.Time++;
		scrollTop -= BackTop.Speed;
		document.documentElement.scrollTop=document.body.scrollTop=scrollTop;
		console.log(scrollTop);
	};
  //匀加速运动
	BackTop.scrollToTop1=function () {
		var scrollTop=document.documentElement.scrollTop||document.body.scrollTop;
		if (BackTop.Time>=BackTop.Times || scrollTop<=0) {
			clearInterval(BackTop.targetObj);
      console.log("end");
			return;
		}
    BackTop.Time++;
    scrollTop = scrollTop - BackTop.Time * BackTop.Speed;
		document.documentElement.scrollTop=document.body.scrollTop=scrollTop;
		console.log(scrollTop);
	};
  //匀减速运动
	BackTop.scrollToTop2=function () {
		if (BackTop.Time<=0 || scrollTop<=0) {
			clearInterval(BackTop.targetObj);
      console.log("end");
			return;
		}
    BackTop.Time--;
    var scrollTop = (BackTop.Time*BackTop.Time)*BackTop.Speed/2;
		document.documentElement.scrollTop=document.body.scrollTop=scrollTop;
		console.log(scrollTop);
	};
	BackTop.start=function (type,times) {
    console.log("start");
    var scrollTop=document.documentElement.scrollTop||document.body.scrollTop;
    var interval = 30;
    var nun = times/interval;
    switch (type) {
      case 1://匀加速运动
        BackTop.Times = nun;
        BackTop.Time = 0;
        BackTop.Speed = (2*scrollTop)/(BackTop.Times*BackTop.Times);
        console.log("Speed:"+BackTop.Speed );
        BackTop.targetObj=setInterval(BackTop.scrollToTop1,interval);
        break;
      case 2://匀减速运动
        BackTop.Times = nun;
        BackTop.Time = nun;
        BackTop.Speed = (2*scrollTop)/(BackTop.Times*BackTop.Times);
        console.log("Speed:"+BackTop.Speed );
    		BackTop.targetObj=setInterval(BackTop.scrollToTop2,interval);
        break;
      default://匀速运动
        BackTop.Times = nun;
        BackTop.Time = 0;
        BackTop.Speed = scrollTop/nun;
        console.log("Speed:"+BackTop.Speed );
        BackTop.targetObj=setInterval(BackTop.scrollToTop,interval);
        break;
    }
	};
  BackTop.init=function (type,times) {
    var html =
	  	'<ul>'+
	  		'<li><a class="backtop-item backtop lnr lnr-chevron-up" href="javascript:void(0);" title="返回顶部"></a></li>'+
	  	  '<li><a class="backtop-item backhome lnr lnr-home" href="/" title="回到主页"></a></li>'+
	  	'</ul>';
    var element = document.createElement('div');
    element.setAttribute("class", "backtop-block");
    element.innerHTML = html;
    var target = element.getElementsByClassName('backtop');
    target[0].onclick = function(){BackTop.start(type,times);};
    document.body.appendChild(element);
  };
  BackTop.init(0,500);
})();
