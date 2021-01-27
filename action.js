$(function(){
    $(window).scroll(function(){
        if($('html,body').scrollTop()>100){
            $('.submenu').addClass('showsubmenu');                      
            $('.buttontop').addClass('showicontop');
        }
        else{
            $('.submenu').removeClass('showsubmenu');
            $('.buttontop').removeClass('showicontop');
        }
    })

    $('.nuttop').click(function(){
        $('html,body').animate({scrollTop:0});
        return false;
    })
})

// Coffee
document.addEventListener("DOMContentLoaded",function() {
    var btnopen = document.querySelector('.btn-txt-container');
    var btnclose = document.querySelector('.btn-showinfo-close');

    var showbtn=document.querySelector('.listbtn');
    var showinfo=document.querySelector('.cf-show-infor');

    btnopen.onclick=function(){
        showbtn.classList.add('show-listbtn');
        showinfo.classList.add('show-cf-infor-2');
    }
    btnclose.onclick=function(){
        showbtn.classList.remove('show-listbtn')
        showinfo.classList.remove('show-cf-infor-2')
    }
},false)

// Espresso, Latte Macchiato, Cappuccino, Coffee Latte, Coffee Mocha, Americano, Espresso Con Panna, Cappuccino Viennese
      
clickesp = document.querySelector('.esp');
clicklat = document.querySelector('.lat');
clickcap = document.querySelector('.cap');
clickclat = document.querySelector('.clat');
clickmoc = document.querySelector('.moc');
clickame = document.querySelector('.ame');
clickecp = document.querySelector('.ecp');
clickcavi = document.querySelector('.cavi');

function espr(){
    document.getElementById('noidung-infor-cf').innerHTML='Espresso là loại cafe rất được ưa chuộng tại Ý và Tây Ban Nha, cà phê có màu vàng nâu sẫm, có vị rất đậm và trên mặt có một lớp crema thơm mà không đắng.';
    document.getElementById('cf-infor-img').innerHTML='<img class="espresso" src="image/coffee/espresso_card.jpg" alt="">';
    clickesp.classList.add('doimau');
    clicklat.classList.remove('doimau');
    clickcap.classList.remove('doimau');
    clickclat.classList.remove('doimau');
    clickmoc.classList.remove('doimau');
    clickame.classList.remove('doimau');
    clickecp.classList.remove('doimau');
    clickcavi.classList.remove('doimau');
}

function latmachi(){
    document.getElementById('noidung-infor-cf').innerHTML='Latte Macchiato là loại cafe nóng gồm cafe Espresso và sữa. Latte Macchiato có 3 lớp là sữa, Espresso và bọt sữa. thêm 1 ít topping ở trên(bột cacao, socola).';
    document.getElementById('cf-infor-img').innerHTML='<img class="macchiato" src="image/coffee/late_machiato_2.jpg" alt="">';
    clickesp.classList.remove('doimau');
    clicklat.classList.add('doimau');
    clickcap.classList.remove('doimau');
    clickclat.classList.remove('doimau');
    clickmoc.classList.remove('doimau');
    clickame.classList.remove('doimau');
    clickecp.classList.remove('doimau');
    clickcavi.classList.remove('doimau');
}

function cappu(){
    document.getElementById('noidung-infor-cf').innerHTML='Cappuccino là cafe Espresso được pha với một lượng nước gấp đôi, sữa nóng và sữa sủi bọt. có thêm lên trên ít bột cacao hay bột quế, và tạo hình trên mặt.';
    document.getElementById('cf-infor-img').innerHTML='<img class="cappuccino" src="image/coffee/capuchino2.jpg" alt="">';
    clickesp.classList.remove('doimau');
    clicklat.classList.remove('doimau');
    clickcap.classList.add('doimau');
    clickclat.classList.remove('doimau');
    clickmoc.classList.remove('doimau');
    clickame.classList.remove('doimau');
    clickecp.classList.remove('doimau');
    clickcavi.classList.remove('doimau');
}

function cflatte(){
    document.getElementById('noidung-infor-cf').innerHTML='Coffee Latte hiểu đơn giản là cà phê và sữa. giống Macchiato nhưng lượng bọt sữa bằng một nửa lượng sữa nóng. Thêm 0,5 – 1cm bột sữa lên bề mặt.';
    document.getElementById('cf-infor-img').innerHTML='<img class="cflatte" src="image/coffee/latte_2.jpg" alt="">';
    clickesp.classList.remove('doimau');
    clicklat.classList.remove('doimau');
    clickcap.classList.remove('doimau');
    clickclat.classList.add('doimau');
    clickmoc.classList.remove('doimau');
    clickame.classList.remove('doimau');
    clickecp.classList.remove('doimau');
    clickcavi.classList.remove('doimau');
}

function cfmocha(){
    document.getElementById('noidung-infor-cf').innerHTML='Coffee Mocha được tạo nên từ hỗn hợp giữa cafe Espresso được pha bằng hơi nước và chocolate nóng. Đặc trưng là vị thơm béo của kem tươi và vị ngậy của chocolate nóng.';
    document.getElementById('cf-infor-img').innerHTML='<img class="cfmocha" src="image/coffee/mocha_2.jpg" alt="">';
    clickesp.classList.remove('doimau');
    clicklat.classList.remove('doimau');
    clickcap.classList.remove('doimau');
    clickclat.classList.remove('doimau');
    clickmoc.classList.add('doimau');
    clickame.classList.remove('doimau');
    clickecp.classList.remove('doimau');
    clickcavi.classList.remove('doimau');
}

function ame(){
    document.getElementById('noidung-infor-cf').innerHTML='Americano, thực tế chính là Espresso nhưng được pha loãng với lượng nước gấp đôi.';
    document.getElementById('cf-infor-img').innerHTML='<img class="americano" src="image/coffee/Americano.png" alt="">';
    clickesp.classList.remove('doimau');
    clicklat.classList.remove('doimau');
    clickcap.classList.remove('doimau');
    clickclat.classList.remove('doimau');
    clickmoc.classList.remove('doimau');
    clickame.classList.add('doimau');
    clickecp.classList.remove('doimau');
    clickcavi.classList.remove('doimau');
}

function espcpan(){
    document.getElementById('noidung-infor-cf').innerHTML='Để tạo nên Espresso Con Panna  Cách làm tương tự Espresso nhưng được phục vụ kèm với kem sữa tươi';
    document.getElementById('cf-infor-img').innerHTML='<img class="espr-con-panna" src="image/coffee/espresso_con_panna2.jpg" alt="">';
    clickesp.classList.remove('doimau');
    clicklat.classList.remove('doimau');
    clickcap.classList.remove('doimau');
    clickclat.classList.remove('doimau');
    clickmoc.classList.remove('doimau');
    clickame.classList.remove('doimau');
    clickecp.classList.add('doimau');
    clickcavi.classList.remove('doimau');
}

function cappuvie(){
    document.getElementById('noidung-infor-cf').innerHTML='Cappuccino Viennese là một Espresso đựng trong tách Cappuccino, sau đó cho sữa nóng và bột sữa vào đến 80% tách, xịt kem sữa tươi lên trên rồi trang trí bằng bột cacao.';
    document.getElementById('cf-infor-img').innerHTML='<img class="cappu-viennese" src="image/coffee/cappuccino_viennese2.jpg" alt="">';
    clickesp.classList.remove('doimau');
    clicklat.classList.remove('doimau');
    clickcap.classList.remove('doimau');
    clickclat.classList.remove('doimau');
    clickmoc.classList.remove('doimau');
    clickame.classList.remove('doimau');
    clickecp.classList.remove('doimau');
    clickcavi.classList.add('doimau');
}





// End CF

// Nguyen lieu

var owl = $('.owl-carousel');
owl.owlCarousel({
    items:5,
    loop:true,
    margin:10,
    nav:true,
    autoplay:true,
    autoplayTimeout:1600,
    autoplayHoverPause:true
});
$('.play').on('click',function(){
    owl.trigger('play.owl.autoplay',[1000])
})
$('.stop').on('click',function(){
    owl.trigger('stop.owl.autoplay')
})

// End NL

// Dung Cu



// End DC