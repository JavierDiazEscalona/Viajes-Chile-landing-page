$(document).ready(function(){
        $("a").on('click', function(event) { 
            if (this.hash !== "") {
                event.preventDefault(); 
                var hash = this.hash;

            $('html, body').animate({ scrollTop: $(hash).offset().top
            }, 500, function(){

            window.location.hash = hash;
            }); 
        }
    }); 
});

$(document).ready(function() {
    $("#boton-enviar").click(function() {
        alert("¡Tu mensaje ha sido enviado con éxito!");
    });
});