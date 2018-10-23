//第一屏 
$(()=>{
    $('#fullpage').fullpage({
        navigation: true,
        navigationColor: '#fff',
        afterLoad: function (index) {
            var index = $(this).attr('data-index');        
            if(index == 2) {
                $('.skill').fadeIn();
            }
        }
    });
    $('#infoBtn').click(()=>{
       $('.infoBox').slideDown();
    })
    $('.closeBtn').click(()=>{
        $('.infoBox').fadeOut(1000);
    })
    $('.wechat').mouseover(()=>{
        console.log(123)
        $('.erweima').show();
    }).mouseout(()=>{
        $('.erweima').hide();
    })
})
   


