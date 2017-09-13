
define(["jquery","template","bootstrap"],function($,template){
  $(function(){

    //列表展示
    $.ajax({
      url:"/api/teacher",
      success:function(data){
        console.log(data)
        $("#teacher-list-tbody").html(template("teacher-list-tpl",data))
      }
    });

    //模态框
    $("#teacher-list-tbody").on("click",".tc-check",function(){
       var id = $(this).parent().data("id");
       $.ajax({
        url:"/api/teacher/view",
        data:{
          tc_id:id
        },
        success:function(data){
          if(data.code == 200){
            $("#teacherModal>div").html(template("modal-list-tpl",data.result));
            $("#teacherModal").modal("show");
          }
        }
       });  
    })
    //模态框结束

    // 启用开始,点击的时候,后台的数据会发生改变
     $("#teacher-list-tbody").on("click",".btn-state",function(){
       var _this = $(this);
       var id = _this.parent().data("id");
       var status = _this.data("status");
       $.ajax({
         url: "/api/teacher/handle",
         type: "post",
         data: {
           tc_id: id,
           tc_status: status
         },
         success:function(data){
           console.log(data);
           if(data.result.tc_status == 1){
             _this.text("启用").removeClass("btn-warning").addClass("btn-success").data("status",data.result.tc_status)
           }else{
             _this.text("注销").removeClass("btn-success").addClass("btn-warning").data("status",data.result.tc_status)
           }
         }
       });
    })
    //启用结束

  })
})