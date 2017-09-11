define(["jquery", "cookie"], function($) {
    $(function() {
        $("form").submit(function() {

            var name = $("#tc_name").val();
            var pass = $("#tc_pass").val();
            if (name.trim() == "") {
                alert("请输入用户名")
                return false;
            }
            if (pass.trim() == "") {
                alert("请输入密码")
                return false;
            }
            $.ajax({
                url: "/api/login",
                data: {
                    tc_name: name,
                    tc_pass: pass
                },
                type: "post",
                success: function(data) {
                    if (data.code == 200) {
                        $.cookie("userinfo", JSON.stringify(data.result), {
                            expires: 365,
                            path: "/"
                        });
                        location.href = "/";
                    }
                }
            })

            return false;
        })
    })
})