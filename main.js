$(document).ready(function () {
    $('header button').click(function () {
        $('form').slideDown();
    })

    $('#botao-cancelar').click(function () {
        $('form').slideUp();
    })
})

$('form').on('submit', function (e) {
    e.preventDefault();
    const enderecoNovaTarefa = $('#endereco-nova-tarefa').val();
    const novoItem = $('<li></li>');
    $(`<li>${enderecoNovaTarefa}</li>`).appendTo(novoItem);
    $(novoItem).appendTo('ul');
    $('#endereco-nova-tarefa').val('');
})

$('ul').on('click', 'li',(function() {
    $(this).toggleClass("efeito");
}));


