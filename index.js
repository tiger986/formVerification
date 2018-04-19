//英文名验证
$(function(){
	
	//选择出生日期（因为chrome,360 禁用本地文件协议,导致控件的部分文件无法加载; 必须放到服务器才会生效，使用ie浏览器打开）
	$(".birthday").click(function(){
		WdatePicker({dateFmt:'yyyy-MM-dd',maxDate:'%y-%M-%d'}); //当前时间以后不可选
		//WdatePicker({dateFmt:'yyyy-MM-dd HH:mm',maxDate:'%y-%M-%d'}); //当前时间以后不可选（包含时分）
		//WdatePicker({dateFmt:'yyyy-MM-dd HH:mm:ss',minDate:'%y-%M-%d'}); //当前时间以前不可选（包含时分秒）
		//WdatePicker({dateFmt:'yyyy-MM-dd HH:mm:ss',minDate:'%y-%M-%d 00:00:00'}); //当前时间以前不可选（不包含时分秒）
	});
	
	
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
	
	//学琴年数验证
	$(".learnNum").blur(function(){
	    var re = /(^[1-9]\d?$)/;
	    if(!re.test($(".learnNum").val())){
	      	$(".bg").show();
	        $(".iptPop").show();
	        $(".iptPop_con").html("请输入正确的学琴年数!");
	       // $(".learnNum").focus();
            $(".learnNum").val("");
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
	
	//家长姓名验证
	$(".famName").blur(function(){
	    var re = /^(([\u4E00-\u9FA5]+\.?)*[\u4E00-\u9FA5]){2,20}$/;
	    if(!re.test($(".famName").val())){
	      	$(".bg").show();
	        $(".iptPop").show();
	        $(".iptPop_con").html("请输入正确的家长姓名!");
	        //$(".famName").focus();
            $(".famName").val("");
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
	
	//关闭提示弹窗
	$(".iptPop_close").click(function(){
		$(".bg").hide();
	    $(".iptPop").hide();
	    $("iptPop_con").html("");
	});
	
	//下一步(提价信息)
	var isClick = true;
	$(".next").click(function(){
		if (!isClick){
        	return false;
        } 
        isClick = false;
        if(checkUserInfo()){
        	$(".bg").show();
	        $(".iptPop").show();
	        $(".iptPop_con").html("恭喜您提交成功!");
        }
	});
	
	//验证所填基本信息
    function checkUserInfo(){
        if (!$(".chineseName").val()){
            alert('请填写中文名！');
            isClick = true;
            return false;
        }
        if (!$(".englishName").val()){
            alert('请填写英文名！');
            isClick = true;
            return false;
        }
        if (!$(".birthday").val()){
            alert('请选择出生日期！');
            isClick = true;
            return false;
        }
        if (!$(".qq").val()){
            alert('请填写QQ号！');
            isClick = true;
            return false;
        }
        if (!$("wx").val()){
            alert('请填写微信号！');
            isClick = true;
            return false;
        }
        if (!$("certificate").val()){
            alert('请填写证件号！');
            isClick = true;
            return false;
        }
        if (!$("learnNum").val()){
            alert('请填写学琴年数！');
            isClick = true;
            return false;
        }
        if (!$("url").val()){
            alert('请填写个人主页！');
            isClick = true;
            return false
        }
        if (!$("info").val()){
            alert('请填写艺术简历！');
            isClick = true;
            return false;
        }
        if (!$("famName").val()){
            alert('请填写家长姓名！');
            isClick = true;
            return false;
        }
        if (!$("email").val()){
            alert('请填写家长电子邮箱！');
            isClick = true;
            return false;
        }
        if (!$("phone").val()){
            alert('请填写家长电话号码！');
            isClick = true;
            return false;
        }
        if (!$("addr").val()){
            alert('请填写家庭住址！');
            isClick = true;
            return false;
        }
        if (!$("code").val()){
            alert('请填写邮编号码！');
            isClick = true;
            return false;
        }
        if (!$("teacherName").val()){
            alert('请填写专业教师姓名！');
            isClick = true;
            return false;
        }
        if (!$("teacherPhone").val()){
            alert('请填写专业教师电话号码！');
            isClick = true;
            return false;
        }
        if (!$("teacherCom").val()){
            alert('请填写专业教师所在单位！');
            isClick = true;
            return false;
        }
        if (!$("song0").val()){
            alert('请填写网络预选赛曲目！');
            isClick = true;
            return false;
        }
        if (!$("song1").val()){
            alert('请填写总决赛曲目(一)！');
            isClick = true;
            return false;
        }
        if (!$("song2").val()){
            alert('请填写总决赛曲目(二)！');
            isClick = true;
            return false;
        }
        if (!$("song3").val()){
            alert('请填写总决赛曲目(三)！');
            isClick = true;
            return false;
        }
        if (!$("song4").val()){
            alert('请填写总决赛曲目(四)！');
            isClick = true;
            return false;
        }
            
        return true;
    };
	
})