
      function searchinput(o){alert(o)}
      function filterdata(o){
        $('.btncate').removeClass('text-primary border-primary border-b-2');
        $('.btn'+o).addClass('text-primary border-primary border-b-2');
        if(o==0)
        {
          $('.itproduct').show();
          return;
        }
        $('.itproduct').hide();
        $('.cate-'+o).show();
      }
      function hideload(){ $("#loader").hide();}
      function base64(data){
        var summn=0;var sumqlt=0;
       
        $.each(data.data,function(i,v){
        
          summn=summn+(parseFloat(v.price)*parseFloat(v.order.quantity));
          sumqlt=sumqlt+parseFloat(v.order.quantity);
        })
    
        var ctm={
          "name":$("#fullname").val(),
          "phone":$("#phone").val(),
          "address":$("#address").val(),
          "notebill":$("#notebill").val(),
          "summn":summn,
          "sumqlt":sumqlt
        }
        var rs="";
        if(ctm.name==""){
          $("#fullname").focus();rs="-1";}
        else if(ctm.phone==""){
          $("#phone").focus();rs="-1";}
        else if(ctm.address==""){
          $("#address").focus();rs="-1";}
        if(rs=="-1")
          return rs;
        else{
          $("#loader").show();
        var datas={
          "ctm":ctm,
          "content":data.data
        }
       
       return window.btoa(unescape(encodeURIComponent(JSON.stringify(datas)))); 
      }
      }
      function reload(){
       location.assign('/'); 
      }
      function changefilter(o){
     
        if(o!="newest")
          sortitem(o);
        else
          sortnew(o)
      }
      function sortnew(o){
          $(".main-product .itproduct").sort(function(a, b) {
            var A = $(a).attr("index").toUpperCase();
            var B = $(b).attr("index").toUpperCase();
          return (A < B) ? -1 : (A > B) ? 1 : 0;

        }).appendTo(".main-product");
      }
      function sortitem(o){
      $(".main-product .itproduct").sort(function(a, b) {
        var A = $(a).attr("price").toUpperCase();
        var B = $(b).attr("price").toUpperCase();
        if(o=="za"){
          return (A < B) ? -1 : (A > B) ? 1 : 0;
        }
        else if(o=="az")
        {
          return (A > B) ? -1 : (A < B) ? 1 : 0;
        }
    }).appendTo(".main-product");
  }
  function removeunicode(str){
    str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, "a");
        str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, "e");
        str = str.replace(/ì|í|ị|ỉ|ĩ/g, "i");
        str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, "o");
        str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, "u");
        str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, "y");
        str = str.replace(/đ/g, "d");
        str = str.replace(/À|Á|Ạ|Ả|Ã|Â|Ầ|Ấ|Ậ|Ẩ|Ẫ|Ă|Ằ|Ắ|Ặ|Ẳ|Ẵ/g, "A");
        str = str.replace(/È|É|Ẹ|Ẻ|Ẽ|Ê|Ề|Ế|Ệ|Ể|Ễ/g, "E");
        str = str.replace(/Ì|Í|Ị|Ỉ|Ĩ/g, "I");
        str = str.replace(/Ò|Ó|Ọ|Ỏ|Õ|Ô|Ồ|Ố|Ộ|Ổ|Ỗ|Ơ|Ờ|Ớ|Ợ|Ở|Ỡ/g, "O");
        str = str.replace(/Ù|Ú|Ụ|Ủ|Ũ|Ư|Ừ|Ứ|Ự|Ử|Ữ/g, "U");
        str = str.replace(/Ỳ|Ý|Ỵ|Ỷ|Ỹ/g, "Y");
        str = str.replace(/Đ/g, "D");
        return str.replace(/ /g,"-");
}
 function searchitemip(o){
  var s=$('.serach-inp:eq(1)').val();
  if(s=="")
    $('.itproduct').show();
  else{
    $('.itproduct').hide();
    var sunc=removeunicode(s);
    $('.itproduct').each(function(){
        if($(this).attr("nameunicode").search(sunc)!=-1)
          $(this).show();
    })
  }
}
$(document).ready(function () {
    $.get("https://raw.githubusercontent.com/cty64/haisanlananh/main/jslocations", function (data, status) {
        var dshop = JSON.parse(data);
      
        $("#logoshop").attr("src", dshop.logo);
        $("#nshop").html(dshop.shopname);
        $("#pshop").html(dshop.phone);
        $("#a-phone").attr("href", "tel:" + dshop.phone)
        $("#ashop").html(dshop.address);
    })
    $.get("https://raw.githubusercontent.com/cty64/haisanlananh/main/jscategory", function (data, status) {
       
        var datats = JSON.parse(data);
        $.each(datats, function (i, v) {
            var active = "menu-item";
            if (i == 0) active = "menu-item nav-active";
            var li = "<li idmenu='" + v.id + "' class='" + active +"'><a href='#item"+v.id+"'>" + v.name + "</a></li>";
            $(li).appendTo("#menu-nav");
        })
    });
    $.get("https://raw.githubusercontent.com/cty64/haisanlananh/main/jsproduct", function (data, status) {
        console.log(data)
        var datats = JSON.parse(data);
        $.each(datats, function (i, v) {
            var li = "<li idobj='" + v.id + "' class='menu" + v.idcate + "'>";
            li += "<img class='img-pr' src='" + v.imgProduct +"' /></li>";
            $(li).appendTo("#ul-items");
        })
    });
})