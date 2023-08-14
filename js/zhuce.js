function checkForm() {

    let username = document.getElementById('username');
    let psd = document.getElementById('password');
    let rpsd = document.getElementById('re_password');

    if (username.value == "") {
        username.style.border = "1px solid rgba(197,81,58,0.8)";
        alert("用户名不能为空！");
        return;
    } else {
        username.style.border = " 1px solid rgba(255,255,255,0.3)";
    }

    if (rpsd.value == '' || psd.value == '') {
        alert("密码不能为空！");
        return;
    }


    if (psd.value.length < 6) {
        alert("密码不能小于6位！");
        return;
    }



    if (rpsd.value == psd.value) {
        document.getElementById('register_form').submit();


        let flag = confirm("注册成功，是否跳转到登录界面？");
        if (flag == true)
            window.location = "denglu.html";


    } else {
        alert("密码不一致！");
        rpsd.value = "";
    }

}
