$('ul.lp-tablist li').on('click',function(){
    $(this).addClass('active');
    $(this).siblings('li').removeClass('active');
})