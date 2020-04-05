$(document).ready(function(){
    $('.pads > div').on('click',function(){
        var index = $( ".pads > div" ).index( this ) + 1;       
        $('.pads > div:nth-of-type('+index+')',function(){  
            let a = new Audio();
            let strSource = $('.pads > div:nth-of-type('+index+') > audio').attr('src')
            a.src = strSource
            a.play();
        })
    })
    
})