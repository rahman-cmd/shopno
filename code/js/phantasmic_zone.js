var nbrCircle=4;
var cmpt=0;
while(cmpt<nbrCircle) {
  document.getElementById('r1').innerHTML=document.getElementById('r1').innerHTML+'<div class="circle"></div>';
  document.getElementById('r1').getElementsByClassName('circle')[cmpt].style.margin='0 0 0 0';
  setTimeout(function(){document.getElementById('r1').getElementsByClassName('circle')[cmpt].style.opacity='0.5';},500);
  document.getElementById('r2').innerHTML=document.getElementById('r2').innerHTML+'<div class="circle"></div>';
  document.getElementById('r2').getElementsByClassName('circle')[cmpt].style.margin='0 0 0 0';
  setTimeout(function(){document.getElementById('r2').getElementsByClassName('circle')[cmpt].style.opacity='0.5';},500);
  document.getElementById('r3').innerHTML=document.getElementById('r3').innerHTML+'<div class="circle"></div>';
  document.getElementById('r3').getElementsByClassName('circle')[cmpt].style.margin='0 0 0 0';
  setTimeout(function(){document.getElementById('r3').getElementsByClassName('circle')[cmpt].style.opacity='0.5';},500);
  document.getElementById('r4').innerHTML=document.getElementById('r4').innerHTML+'<div class="circle"></div>';
  document.getElementById('r4').getElementsByClassName('circle')[cmpt].style.margin='0 0 0 0';
  setTimeout(function(){document.getElementById('r4').getElementsByClassName('circle')[cmpt].style.opacity='0.5';},500);
  cmpt++;
}
setTimeout(function() {
  var cmpt=0;
  while(cmpt<nbrCircle) {
    document.getElementById('r1').getElementsByClassName('circle')[cmpt].style.opacity='0.5';
    document.getElementById('r2').getElementsByClassName('circle')[cmpt].style.opacity='0.5';
    document.getElementById('r3').getElementsByClassName('circle')[cmpt].style.opacity='0.5';
    document.getElementById('r4').getElementsByClassName('circle')[cmpt].style.opacity='0.5';
    cmpt++;
  }
},1000);
setInterval(function(){
  linearMargin=false;
  var cmpt=0;
  while(document.getElementById('r1').getElementsByClassName('circle')[cmpt]) {
    if(cmpt%2==0) {
      linearMargin=false;
    }
    else {
      linearMargin=true;
    }
    var circle=document.getElementById('r1').getElementsByClassName('circle')[cmpt];
    var value1_1=Math.floor((Math.random()*255)+0);
    var value1_2=Math.floor((Math.random()*255)+0);
    var value1_3=Math.floor((Math.random()*255)+0);
    var marginInterval=100;
    var contentSize=500;
    if(parseInt(circle.style.marginTop)+marginInterval<contentSize && parseInt(circle.style.marginTop)+-marginInterval>=0)
      var value2_1=parseInt(circle.style.marginTop)+Math.floor((Math.random()*marginInterval)+-marginInterval);
    else if(parseInt(circle.style.marginTop)+marginInterval<document.body.offsetHeight)
      var value2_1=parseInt(circle.style.marginTop)+Math.floor((Math.random()*marginInterval)+0);
    else
      var value2_1=parseInt(circle.style.marginTop)+-Math.floor((Math.random()*marginInterval)+0);
    if(linearMargin==true)
      value2_2=value2_1;
    else if(parseInt(circle.style.marginLeft)+marginInterval<contentSize && parseInt(circle.style.marginWidth)+-marginInterval>=0)
      var value2_2=parseInt(circle.style.marginLeft)+Math.floor((Math.random()*marginInterval)+-marginInterval);
    else if(parseInt(circle.style.marginLeft)+marginInterval<document.body.offsetHeight)
      var value2_2=parseInt(circle.style.marginLeft)+Math.floor((Math.random()*marginInterval)+0);
    else
      var value2_2=parseInt(circle.style.marginLeft)+-Math.floor((Math.random()*marginInterval)+0);
    var value3_1=Math.floor((Math.random()*100)+10);
    var value3_2=value3_1;
    var value4_1=Math.floor((Math.random()*100)+0);
    circle.style.background='rgb('+value1_1+','+value1_2+','+value1_3+')';
    circle.style.margin=value2_1+'px 0 0 '+value2_2+'px';
    circle.style.width=value3_1+'px';
    circle.style.height=value3_2+'px';
    circle.style.borderRadius=value4_1+'px';
    var circle=document.getElementById('r2').getElementsByClassName('circle')[cmpt];
    circle.style.background='rgb('+value1_1+','+value1_2+','+value1_3+')';
    circle.style.margin=value2_1+'px 0 0 '+value2_2+'px';
    circle.style.width=value3_1+'px';
    circle.style.height=value3_2+'px';
    circle.style.borderRadius=value4_1+'px';
    var circle=document.getElementById('r3').getElementsByClassName('circle')[cmpt];
    circle.style.background='rgb('+value1_1+','+value1_2+','+value1_3+')';
    circle.style.margin=value2_1+'px 0 0 '+value2_2+'px';
    circle.style.width=value3_1+'px';
    circle.style.height=value3_2+'px';
    circle.style.borderRadius=value4_1+'px';
    var circle=document.getElementById('r4').getElementsByClassName('circle')[cmpt];
    circle.style.background='rgb('+value1_1+','+value1_2+','+value1_3+')';
    circle.style.margin=value2_1+'px 0 0 '+value2_2+'px';
    circle.style.width=value3_1+'px';
    circle.style.height=value3_2+'px';
    circle.style.borderRadius=value4_1+'px';
    cmpt++;
  }
},500);
setInterval(function() {
  var value1=Math.floor((Math.random()*255)+0);
  var value2=Math.floor((Math.random()*255)+0);
  var value3=Math.floor((Math.random()*255)+0);
  document.body.style.background='rgb('+value1+','+value2+','+value3+')';
},2000);