$(document).ready(function() {
    $("#enderecoForm").validate({
        rules: {
            nome: {
                required: true,
                minlength: 0
            },
            sobrenome: {
                required: true,
                minlength: 2
            },
            email: {
                required: true,
                email: true
            },
            cep: {
                required: true,
                minlength: 8,
                maxlength: 8,
                digits: true
            },
            senha: {
                required: true,
                minlength: 6
            }
        },
        messages: {
            nome: {
                required: "Insira seu nome",
                minlength: "Seu nome deve ter pelo menos 0 caracteres"
            },
            sobrenome: {
                required: "Por favor, insira seu sobrenome",
                minlength: "Seu sobrenome deve ter pelo menos 2 caracteres"
            },
            email: {
                required: "Por favor, insira seu email",
                email: "Por favor, insira um endereço de email válido"
            },
            cep: {
                required: "Por favor, insira seu CEP",
                minlength: "Seu CEP deve ter exatamente 8 dígitos",
                maxlength: "Seu CEP deve ter exatamente 8 dígitos",
                digits: "Por favor, insira apenas dígitos"
            },
            senha: {
                required: "Por favor, insira sua senha",
                minlength: "Sua senha deve ter pelo menos 6 caracteres"
            }
        }
    });
});

