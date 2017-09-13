define(["jquery","template","utils","form"],function($,template,utils){
      var id = utils.getQueryUrl().id;
     
      if(id){
        $.ajax({
           url: "/api/teacher/edit",
           data: {
                tc_id: id
           },
           success:function(data){
            if(data.code == 200){
              data.result.add_name = "编辑讲师";
              data.result.add_btn = "保存";
              data.result.url = "/api/teacher/update"
              $(".body,.teacher").html(template("teacher-add-tpl",data.result));
            }
          }
        })
      }else{
        var obj = {
            add_name :"添加讲师",
            add_btn:"添加",
            url:"/api/teacher/add"
          }
          $(".body,.teacher").html(template("teacher-add-tpl",obj)); 
          }
          //form表单事件提交ajax
            console.log( $(".body,.teacher"));
            $(".body,.teacher").on("submit","form",function(){
                   console.log(1)
                   $(this).ajaxSubmit({
                     success:function(data){
                        console.log(data)
                        if(data.code == 200){
                          location.href = "/teacher/list";
                        }
                     }
                   })  
                   return false; 
              })

          //form表单事件提交ajax结束
})


  
     