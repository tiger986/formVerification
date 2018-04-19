## Form validation and submission
#### JS code
```javascript
//中文名验证
$(".chineseName").blur(function(){
    var re = /^(([\u4E00-\u9FA5]+\.?)*[\u4E00-\u9FA5]){2,20}$/;
    if(!re.test($(".chineseName").val())){
        $(".bg").show();
	$(".iptPop").show();
	$(".iptPop_con").html("请输入正确的中文名!");
        // $(".chineseName").focus();
        $(".chineseName").val("");
    }        	
});
	
//英文名验证
$(".englishName").blur(function(){
    var re = /^([A-Za-z]+\s?)*[A-Za-z]$/;
    if(!re.test($(".englishName").val())){
        $(".bg").show();
	$(".iptPop").show();
        $(".iptPop_con").html("请输入正确的英文名!");
	// $(".englishName").focus();
        $(".englishName").val("");
    }        	
});
	
//QQ号验证
$(".qq").blur(function(){
    var re = /^[1-9][0-9]{4,10}$/;
    if(!re.test($(".qq").val())){
        $(".bg").show();
	$(".iptPop").show();
	$(".iptPop_con").html("请输入正确的QQ号!");
	// $(".qq").focus();
        $(".qq").val("");
    }        	
});
	
//微信号验证
$(".wx").blur(function(){
    var re = /^[a-zA-Z]([-_a-zA-Z0-9]{5,19})+$/;
    if(!re.test($(".wx").val())){
        $(".bg").show();
        $(".iptPop").show();
        $(".iptPop_con").html("请输入正确的微信号!");
        // $(".wx").focus();
        $(".wx").val("");
    }        	
});
	
//证件号验证(身份证/护照)
$(".certificate").blur(function(){
    var re1 = /(^\d{15}$)|(^\d{17}([0-9]|X)$)/;
    var re2 = /^1[45][0-9]{7}|G[0-9]{8}|P[0-9]{7}|S[0-9]{7,8}|D[0-9]+$/;
    if(!re1.test($(".certificate").val()) && !re2.test($(".certificate").val())){
        $(".bg").show();
	$(".iptPop").show();
	$(".iptPop_con").html("请输入正确的证件号!");
	//$(".certificate").focus();
        $(".certificate").val("");
    }        	
});
	
//URL验证
$(".url").blur(function(){
    var re = /^((https?|ftp|file):\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/;
    if(!re.test($(".url").val())){
        $(".bg").show();
	$(".iptPop").show();
	$(".iptPop_con").html("请输入正确的个人主页网址!");
	// $(".url").focus();
        $(".url").val("");
    }        	
});
	
//电子邮箱验证
$(".email").blur(function(){
    var re = /^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/;
    if(!re.test($(".email").val())){
        $(".bg").show();
	$(".iptPop").show();
	$(".iptPop_con").html("请输入正确的电子邮箱!");
	// $(".email").focus();
        $(".email").val("");
    }        	
});
	
//电话号码验证
$(".phone").blur(function(){
    var re = /^1[34578]\d{9}$/;
    //var re2 = /^(\(\d{3,4}\)|\d{3,4}-|\s)?\d{7,14}$/;
    if(!re.test($(".phone").val())){
        $(".bg").show();
	$(".iptPop").show();
	$(".iptPop_con").html("请输入正确的电话号码!");
	//$(".phone").focus();
        $(".phone").val("");
    }        	
});
	
//邮编号码验证
$(".code").blur(function(){
    var re = /^[1-9][0-9]{5}$/;
    if(!re.test($(".code").val())){
        $(".bg").show();
	$(".iptPop").show();
	$(".iptPop_con").html("请输入正确的邮编号码!");
	//$(".code").focus();
        $(".code").val("");
    }        	
});
