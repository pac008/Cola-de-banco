

var socket = io();
var label = $('small');
var searchParams = new URLSearchParams(window.location.search);

if( !searchParams.has('escritorio') ){
    window.location = 'index.html';
    throw new Error('El escritorio es necesario');
}


let escritorio = searchParams.get('escritorio');

$('h1').text('Escritorio ' + escritorio)



$('button').on('click', function() {

    socket.emit('atenderTicket', { escritorio: escritorio }, function( resp ) {


        if( resp === 'No hay tickets'){
            label.text(resp);
            alert(resp);
            return;
        }
        audio = new Audio('audio/new-ticket.mp3');
        audio.play();
        
        console.log(resp);
        label.text(resp.numero);
    });
});