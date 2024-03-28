/* Smooth Scroll */
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

/* Alert de aviso al presionar botón "Enviar" */
$(document).ready(function() {
    $("#boton-enviar").click(function() {
        alert("¡Tu mensaje ha sido enviado con éxito!");
    });
});