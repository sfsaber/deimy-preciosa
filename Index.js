var respuestasC = [0, 0, 0, 0, 1, 1, 0, 0, 1]
var RespuestasUser = new Array(9)
var color = new Array(3)
var count = 0


$(document).ready(function () {

      
    console.log('jala')
});

function revisar(){
      console.log('jala')
    for (let index = 0; index < respuestasC.length; index++) {
        RespuestasUser[index] = $('input[name="' + (index + 1) + '"]:checked').attr("value");
    }
    const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
          confirmButton: 'btn btn-success',
          cancelButton: 'btn btn-danger'
        },
        buttonsStyling: false
      })
      
      swalWithBootstrapButtons.fire({
        title: 'Quieres ser la novia de Carlitos? 👰',
        text: "Si aceptas, pasaremos el mejor año de nuestras vidas juntos y viviremos experiencias muy bonitas que recordaremos por siempre",
        type: 'warning',
        showCancelButton: true,
        cancelButtonText: 'No, quiero solo setso 💔',
        confirmButtonText: 'Sí, quiero pasar el mejor año de mi vida con Carlitos como su novia! 💖',
        reverseButtons: true
      }).then((result) => {
        if (result.value) {
          swalWithBootstrapButtons.fire(
            'Gracias por aceptar ser mi novia preciosa',
            'Te quiero muchisimo. Me haces muy feliz flaquita 💕',
            'success'
          )
        } else if (
     
          result.dismiss === Swal.DismissReason.cancel
        ) {
          swalWithBootstrapButtons.fire(
            'Pos bueno',
            'Al menos no intenté 💔',
            'error'
          )
        }
      })
}
