const urlinfo=window.location.href; //获取当前页面的url
const len=urlinfo.length;//获取url的长度
const offset=urlinfo.indexOf("?");//设置参数字符串开始的位置
const newsidinfo=urlinfo.substr(offset,len)//取出参数字符串 这里会获得类似“id=1”这样的字符串
const newsids=newsidinfo.split("=");//对获得的参数字符串按照“=”进行分割
const newsid=newsids[1];//得到参数值
const newsname=newsids[0];//得到参数名字

const first = document.getElementById("first");
first.innerHTML=newsid;