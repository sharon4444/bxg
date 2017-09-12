
  define(["jquery", "template", "cookie"], function($, template){
  $(function(){
   
    if(location.pathname != "/dashboard/login"){
      if(!$.cookie("PHPSESSID")){
        location.href = "/dashboard/login";
      }

      var userinfo = JSON.parse($.cookie("userinfo"));
      var html = template("profile_tpl", userinfo);
      $("#profile").html(html);
    }

    // 头部退出功能
    $("#logout-btn").click(function(){
      console.log(1)
      $.ajax({
        url:"/api/logout",
        type:"post",
        success:function(data){
          if(data.code == 200){
            location.href = "/dashboard/login"
          }
        }
      })
    })

    //实现子菜单栏的展示和隐藏
    $("#nav-course").click(function(){
      $(this).find("ul").stop().slideToggle();
    })

   //当前页面导航高亮
    var navi =$(".navs>ul>li>a");
    navi.each(function(i,e){
      var _this = $(e);
      if(_this.attr("href")== location.pathname){
        _this.addClass("active")
      }
    })

  })  
})

