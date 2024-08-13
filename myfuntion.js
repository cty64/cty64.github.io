

      function filterdata(o){
          $('.menu-item').removeClass('nav-active');
          $(o).addClass('nav-active');
          if ($(o).attr("idmenu")==0)
          {
              $('.item-pr').show();
              return;
          }
        $('.item-pr').hide();
          $('.menu' + $(o).attr("idmenu")).show();
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
     var s = $(o).val().toLowerCase();

  if(s=="")
    $('.tem-pr').show();
  else {

    $('.item-pr').hide();
    var sunc=removeunicode(s);
    $('.item-pr').each(function(){
        if($(this).attr("nameobj").search(sunc)!=-1)
          $(this).show();
    })
  }
}
function converToString(nStr) {

    try {

        var t = nStr.toString();
        var e = "";
        var s = "";
        var j = 0;

        for (var i = t.length - 1; i >= 0; i--) {
            if (j == 3) {
                e += ".";
                j = 0;
            }
            j++;
            e += t.charAt(i);

        }
        for (var i = e.length - 1; i >= 0; i--) {

            s += e.charAt(i);

        }
        return s;
    }
    catch (err) {
        return "";
    }
}
function truncateString(str, num) {
    if (str.length > num) {
        return str.slice(0, num) + "...";
    } else {
        return str;
    }
}
function opendetail(o) {
    $(".item-pr").removeClass("li-active");
    $(o).addClass("li-active");
    $("#imgdt").attr("src", $(o).find(".img-pr").attr("src"));
    $("#detail").addClass("show-detail");
    $(".pricesp").html(converToString($(o).attr("price")));
    $(".namedt").html($(o).attr("namevn"));
    $("#desc").html($(o).attr("desc"));
}
var ckcart = "cartlananh";
function getCookie(t) {
    var n = t + "="; let e = decodeURIComponent(document.cookie); var a = e.split(";");
    for (let e = 0; e < a.length; e++) {
        let t = a[e]; for (; " " == t.charAt(0);)t = t.substring(1); if (0 == t.indexOf(n))
            return t.substring(n.length, t.length)
    }
    return ""
}
function setCookie(t, e, n) { const a = new Date; a.setTime(a.getTime() + 24 * n * 60 * 60 * 1e3); n = "expires=" + a.toUTCString(); document.cookie = t + "=" + e + ";" + n + ";path=/" } function gettime(t) { t = new Date(t); return t.getHours() + ":" + t.getMinutes() }
function btnaddcard() {
    var cart = getCookie(ckcart);
    console.log(cart)
    var carts = [];
    var li = $('.li-active');
    if (cart != "") {
        carts = JSON.parse(cart);
        $.each(carts, function (i, v) {
            if (v.id == $(li).attr('idobj')) {
                carts.slice(i,1)
                return false;
            }
        })
    }
    var c = {
            id: $(li).attr('idobj'),
            price: $(li).attr('price'),
            qlt: parseFloat($(".numberqlts").html()),
            tt: parseFloat($(".numberqlts").html()) * parseFloat($(li).attr('price')),
            notemenu: $("#notemenu").val()
        };
        carts.push(c);
    setCookie(ckcart, JSON.stringify(carts),7)
    console.log(carts);
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
            var li = "<li idmenu='" + v.id + "' class='" + active +"' onclick='filterdata(this)'>" + v.name + "</li>";
            $(li).appendTo("#menu-nav");
        })
    });
    $.get("https://raw.githubusercontent.com/cty64/haisanlananh/main/jsproduct", function (data, status) {
    
        var datats = JSON.parse(data);
        $("#sumitem").html(datats.length + " sản phẩm");
        $.each(datats, function (i, v) {
            var li = "<li onclick='opendetail(this)' price='" + v.salePrice + "' desc='" + v.description+"' idobj='" + v.id + "' namevn='" + v.nameProduct +"' class='item-pr menu" + v.idcate + "' nameobj='" + removeunicode(v.nameProduct) +"'>";
            li += "<img class='img-pr' src='" + v.imgProduct + "' />";
            li += "<div class='div-infor'><p>" + v.nameProduct + "</p><p class='p-price'>" + converToString(v.salePrice) + "/" + v.unit + "</p><p>" + truncateString(v.description,40) +"</p></div><span class='span-plus'><i class='fa fa-plus' aria-hidden='true'></i></span>"
            li += "</li> ";
            $(li).appendTo("#ul-items");
        })
    });
})