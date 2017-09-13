define(["jquery","template","utils","bootstrap"],function($,template,utils){
      var id = utils.getQueryUrl().id;
      console.log(id)
      // var id = 896;

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
              $(".body,.teacher").html(template("teacher-add-tpl",data.result));
                $("#add_btn").click(function(){
                   $.ajax({
                     url: "/api/teacher/update",
                     type: "post",
                     data:$("form").serialize(),
                     success:function(data){
                       console.log(data);
                       if(data.code == 200){
                          location.href = "/teacher/list";
                       }
                     }
                   })
                   return false;
                })
              }
            }
          })

      }else{
        var obj = {
            add_name :"添加讲师",
            add_btn:"添加"
          }
          $(".body,.teacher").html(template("teacher-add-tpl",obj));
              $("#add_btn").click(function(){
                   $.ajax({
                     url: "/api/teacher/add",
                     type: "post",
                     data:$("form").serialize(),
                     success:function(data){
                        console.log(data);
                        if(data.code == 200){
                          location.href = "/teacher/list";
                        }
                     }
                   })  
                   return false; 
              })
           
         }
})


  
     
    