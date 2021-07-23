$(document).ready(function(){
        $('.featheader').click(function(){
            if($(this).siblings().css('display')=='none'){
            $('.featheader').children('h4').css('font-weight','400');
            $('p').css('display','none');
            $(this).siblings().show(300);
            $(this).children('h4').css('font-weight','700');
            }else{
                $(this).siblings().hide(300);
                $(this).children('h4').css('font-weight','400');
            }
        
        })
        
        
        
        
        
});