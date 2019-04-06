$(document).ready(function(){
    $('.js-ajax').on('submit', function(){
        $.ajax({
            type: "POST",
            url: "php/send.php",
            data: $("#form").serialize(),
            success: function(){
                alert('Спсибо с вами свяжуться');
            }
            
        });
        $("#form")[0].reset();
        return false;
    });
});
$(document).ready(function(){
    $('.js-ajax2').on('submit', function(){
        $.ajax({
            type: "POST",
            url: "php/send.php",
            data: $("#form2").serialize(),
            success: function(){
                alert('Спсибо с вами свяжуться');
            }
            
        });
        $("#form2")[0].reset();
        return false;
    });
});
