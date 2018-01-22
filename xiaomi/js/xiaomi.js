/*
* @Author: Fujiang
* @Date:   2017-08-10 22:36:01
* @Last Modified by:   Fujiang
* @Last Modified time: 2017-12-29 10:37:33
*/

$(function(){
	
	//bannerleft
//	let bannerlef=document.getElementsByClassName('bannerlef');
//	let bannerlef1=document.getElementsByClassName('bannerlef1');
//	let xianshi=document.getElementsByClassName('xianshi');
//	for(let i=0;i<bannerlef1.length;i++){
//		bannerlef1[i].onmouseenter=function(){
//			
//			xianshi[i].style.display='block';
//		    // xianshi[i].style.borderTop="1px solid #E0E0E0";
//		    // xianshi[i].style.borderLeft="1px solid #E0E0E0";
//    //       xianshi[i].style.boxShadow="1px 1px 5px 1px #d8d8d8"; 
//		}
//		bannerlef1[i].onmouseleave=function(){
//			
//		    xianshi[i].style.display='none';
//		    // xianshi[i].style.borderTop="0px solid #E0E0E0";
//    //       xianshi[i].style.boxShadow="none"; 
//		}
//	}
   
	// let shuzi=document.getElementByClassName('shuzi');
	// let xiaomimix=document.getElementByClassName('xiaomimix');
	// let rengongzhineng=document.getElementByClassName('rengongzhineng');
	// shuzi.onclick=function(){
	// 	xiaomimix[0].style.display="none";
	// 	rengongzhineng[0].style.display="none";
	// }
	// 
	// let bannerlef=document.getElementsByClassName('bannerlef');
	// let lis=bannerlef.getElementsByTagName('li');
	// for(let i=0;i<lis.length;i++){
	// 	lis[i].onmouseenter=function(){
 //           let  xianshi=document.getElementsByClassName('xianshi')[0];
 //           xianshi[0].style.display="block";
	// 	}
	// 	lis[i].onmouseleave=function(){
 //           let  xianshi=document.getElementsByClassName('xianshi')[0];
 //           xianshi[0].style.display="block";
	// 	}
	// }   X
	// 
//	let bannnerbootom=document.getElementsByClassName('banner2')[0];
//	let bannerlis=bannnerbootom.getElementsByTagName('li');
//	let lunbo=document.getElementsByClassName('luobo')[0];
//	let lunbolis=lunbo.getElementsByTagName('li');
//	let moren=document.getElementById("moren");
	
//	let nume=0;
//	let t;
	//banner
//  for(let i=0;i<bannerlis.length;i++){
//	   lunbolis[i].onclick=function(){
//	       lunbolis[nume].classList.remove("moren");
//	       lunbolis[i].classList.add("moren");
//		   bannerlis[nume].style.display="none";
//		   bannerlis[i].style.display="block";
//		  nume=i;	
//		}
//		
//	}
  
	// t = setInterval(fn,5000);
	// function fn () {
	// 	num++;
	// 	if (num == lis.length) {
	// 		num = 0;
	// 	}
	// 	for (let i = 0; i < lis1.length; i++) {
	// 		bannnerbootom[i].style.display = 'none';
	// 		// bottombanli[i].classList.remove('hot');
	// 	}
	// 	bottombanli[num].classList.add('hot');
	// 	imgboxli[num].style.display = 'block';
	// }
	

//  	for(let i=0;i<bannerlis.length;i++){
//  		bannerlis[i].style.display="none";
//  		lunbolis[i].classList.remove("moren");
//  	}
//  	bannerlis[nume].style.display="block";
//  	lunbolis[nume].classList.add('moren');
//
//  }
    
//  let jiantouleft=document.getElementsByClassName("bannerjiantou1");
//
//	
//
//	jiantouleft[0].onclick=fn1;
//	
//	function fn1(){
//    nume--;
//    if(nume==-1){
//    	nume=bannerlis.length-1;
//    }
//    for(let i=0;i<bannerlis.length;i++){
//    	bannerlis[i].style.display="none";
//    	lunbolis[i].classList.remove("moren");
//
//    }
//    	bannerlis[nume].style.display="block";
//    	lunbolis[nume].classList.add("moren");
//	}
	//右箭头
	
//  let jiantouright=document.getElementsByClassName("bannerjiantou2");
//
//	bannnerbootom.onmouseenter=function(){
//		clearTimeout(t);
//	}
//	bannnerbootom.onmouseleave=function(){
//		t=setInterval(fn, 4000);
//	}
//  jiantouright[0].onclick=fn;
//
//
     var lunbolist=document.querySelectorAll(".luobo li");
     var bannerli=document.querySelectorAll(".banner2 li");
     var banner=document.querySelector(".banner");
     let num=0;
     lunbolist.forEach(function(el,index){
         el.onclick=function(){
             for(let i=0;i<lunbolist.length;i++){
                 lunbolist[i].classList.remove("moren");
                 bannerli[i].classList.remove("onfirst");

             }
             el.classList.add("moren");
             bannerli[index].classList.add("onfirst");
             num=index;
         }
     })



     function st(dc="right"){
         if(dc=="right"){
             num++;
             if(num==lunbolist.length){
                 num=0;
             }
         }
         if(dc=="left"){
             num--;
             if(num==-1){
                 num=lunbolist.length-1;
             }
         }
         for(let i=0;i<lunbolist.length;i++){
             lunbolist[i].classList.remove("moren");
             bannerli[i].classList.remove("onfirst");
         }
         lunbolist[num].classList.add("moren");
         bannerli[num].classList.add("onfirst");
     };

     let sts=setInterval(st,5000);
     banner.onmouseover=function(){
         clearInterval(sts);
     }
     banner.onmouseout=function(){
         sts=setInterval(st,5000);
     }
     var flag=true;
     var prebtn=document.querySelector(".jiantoubanner11");
     var nextbtn=document.querySelector(".jiantoubanner12");
     nextbtn.onclick=function(){
         if(flag){
             flag=false;
             st();
         }
     }
     prebtn.onclick=function(){
         if(flag){
             flag=false;
             st(dc="left");
         }
     }
     bannerli.forEach(function(el,index){
        el.addEventListener("transitionend",function(){
             flag=true;
        })
    })

	//搜索框
	//
//	let souskuang=document.getElementsByClassName("shuzi");
//	let xiaomimix=document.getElementsByClassName("xiaomimix");
//	let rengongzhineng=document.getElementsByClassName("rengongzhineng");
//	souskuang[0].onclick=function(){
//      xiaomimix[0].style.display="none";
//      rengongzhineng[0].style.display="none";
//	}
//      souskuang[0].onblur=function(){
//      xiaomimix[0].style.display="block";
//      rengongzhineng[0].style.display="block";
//	}

	//给箭头添加停止， disabled='true'禁用表单
	//
	// 小米明星单品
	// 


 //内容
        let list=$(".tltletotal1");

        list.each(function(){
            let inner=$(this).children(".titlenierongmost");
            let prev=$(this).children(".lefttt").children(" .lefticon");
            let next=$(this).children(".righttt").children(" .icon-goleft");
            let items=inner.children(".titlenierong");
            let pagers=$(this).children(".titlelunbo").children(".titlelunbof").children("li");
            let max=items.length;
            let n=0;
            next.click(function () {
                n++;
                if (n >= max) {
                    n=max - 1;
                    return;
                }
                changePagers(n);
            });
            prev.click(function () {
                n--;
                if (n < 0) {
                    n=0;
                    return;
                }
                changePagers(n);
            });
            pagers.each(function(index,ele){
                $(this).click(function(){
                    changePagers(index);
                    n=index;
                })
            })
            function changePagers(n) {
                pagers.filter(".moren3").removeClass("moren3").end().eq(n).addClass("moren3");
                inner.css("marginLeft",`${-n*292}px`);
            }

        })
  
   // let titlelunbof=document.querySelector(".titlelunbof");
   //  // console.log(titlelunbof);
   // let titlelunbofli=titlelunbof.getElementsByTagName("li");
   //   // console.log(titlelunbofli);
   // let titlenierongmost=document.getElementsByClassName("titlenierongmost")[0];
   //  // console.log(titlenierong);
   // let nume4=0;
   // for(let i=0;i<titlelunbofli.length;i++){
   //
   // 	 titlelunbofli[i].onclick=function(){
   // 	 	titlelunbofli[nume4].classList.remove("moren3");
   //
   // 	 	titlelunbofli[i].classList.add("moren3");
   // 	 	titlenierongmost.style.left=`${-296*i}px`;
   // 	 	nume4=i;
   // 	 }
   //
   //
   // }
   //内容 右箭头
  // 	let righttt=document.querySelector(".righttt");
  //   let lefttt=document.querySelector(".lefttt");
  //
  //
  //
  // 	  righttt.onclick=function(){
  //       if(nume4<0){
  //           nume4++;
  //       }
  //      titlelunbofli[nume4-1].classList.remove("moren3");
  //      titlelunbofli[nume4].classList.add("moren3");
  //  	   titlenierongmost.style.left=`${-296*nume4}px`;
  //
  //
  //
  //     }
  //
  //     lefttt.onclick=function(){
  //         if(nume4<titlelunbofli.length){
  //             nume4--;
  //         }
  //      titlelunbofli[nume4+1].classList.remove("moren3");
  //      titlelunbofli[nume4].classList.add("moren3");
  //  	   titlenierongmost.style.left=`${-296*nume4}px`;
  //
  //
  //
  // }
  //内容 左箭头
  	 
   
  
     
 //jquery     
   //侧边栏

    {
        $(".bannerlef>li").each(function(index,obj){
            $(this).hover(function(){
                $(".xianshi").eq(index).css({display:"block"});
                $(".xianshi").eq(index).parent().siblings().children(".xianshi").css({display:"none"})
            },function(){
                $(".xianshi").css({display:"none"});
            })

        })
    }

   //$(".xianshi").eq(index).parent().siblings().children(".xianshi").css("display","none")
   //轮播点
//    $(".luobo li").each(function(index,obj){
// 		$(this).on("click",function(){
// 			$(this).addClass("moren").siblings().removeClass("moren");
// 			$(".banner2 li").eq(index).css({display:"block"}).siblings().css({display:"none"})
		
// 	})
		
// 	})
   
//    	// 自动轮播
// 	let t;
// 	let nume=0;
//     t=setInterval(fn,4000);
//     function fn(){
//     	nume++;
//     	if(nume==$(".banner2 li").length){
//     		nume=0;
//     	}
// 		$(".luobo li").eq(nume).addClass("moren").siblings().removeClass("moren");
// 		$(".banner2 li").eq(nume).css({display:"block"}).siblings().css({display:"none"})
		
	
		
// }
    
//     //鼠标悬停
//     $(".banner").hover(function(){
//     	clearInterval(t);
//     },function(){
//     	t=setInterval(fn,4000);
//     })
//      //右箭头
//      $(".bannerjiant a:last-child").click(fn);
//     //左箭头
// //  console.log($(".banner2 li"))
//      let num=0;
//     $(".bannerjiant a:first-child").click(function(){
//     	num--;
//     	if(num==-1){
    		
//     		num=$(".banner2 li").length-1;
//     	}
//     	$(".luobo li").eq(num).addClass("moren").siblings().removeClass("moren");
//     	$(".banner2 li").eq(num).css({display:"block"}).siblings().css({display:"none"});
//     })
    
    //购物车
    $(".gouwuche").hover(function(){
    	$(".gouwuchetan").css({display:"block"});
    },function(){
    	$(".gouwuchetan").css({display:"none"});
    })
    //搜索框
    $(".shuzi").click(function(){
    	$(".xiaomimix").css({display:"none"});
    	$(".rengongzhineng").css({display:"none"});
    })
    $(".shuzi").blur(function(){
    	$(".xiaomimix").css({display:"block"});
    	$(".rengongzhineng").css({display:"block"});
    })
    
   
   //navi

    $(".navileft").queue(function(){
        $(".navileft").hover(function(){
            $(".navlefttan1").css({height:"289px",borderTop:"1px solid #E0E0E0",
                      boxShadow:" 0 1px 5px 1px #d8d8d8"});
        },function(){
            $(".navlefttan1").css({height:"0px",borderTop:"0px solid #E0E0E0",
                      boxShadow:"none"});
        })
        $(".navileft").dequeue();
    })
    $(".item-childs").hover(function(){
        $(this).children(".navlefttan").removeClass("none");
        $(this).children(".navlefttan").addClass("block");
    },function(){
        $(this).children(".navlefttan").addClass("none");
        $(this).children(".navlefttan").removeClass("block");
    })




    
    //小米明星单品

  $(".jiantou11").click(function(){

        $(".shanpinjj3").css({marginLeft:"0px"});
        $(".jiantou12").addClass("moren1");
        $(".jiantou11").removeClass("moren1");


    })
    $(".jiantou12").click(function(){
        $(".shanpinjj3").css({marginLeft:"-1226px"});
        $(".jiantou11").addClass("moren1");
        $(".jiantou12").removeClass("moren1");


    })
    // $(".shanpinjj3").animate({marginLeft:"-1226px"},500);
    // $(".shanpinjj3").animate({marginLeft:"0px"},500);

    var t2=setInterval(fn2,3000);
    var nume1=0;
    var flag=true;
    function fn2(){
        if(flag){
            $(".shanpinjj3").css({marginLeft:"-1226px"});
        }else{
            $(".shanpinjj3").css({marginLeft:"0px"});
        }
        flag=!flag;

    }

    //家电

        let btns = $(".jiadianm2 ul li a");
        btns.hover(function() {
            let index = $(this).parent().index();
            $(this).addClass("active").parent().siblings().children().removeClass("active");
            $(this).parent().parent().parent().parent().next().children(".jiadianmore").eq(index).addClass("active").siblings().removeClass("active");
        })
    

})
