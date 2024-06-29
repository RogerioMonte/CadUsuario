document.addEventListener('DOMContentLoaded', function() {
    var form = document.getElementById('enderecoForm');
    if (form) {
        form.addEventListener('submit', function(event) {
            event.preventDefault();
            var cep = document.getElementById('cep').value;
            
            // Validando o CEP
            if (!cep || cep.length !== 8 || isNaN(cep)) {
                alert('Por favor, insira um CEP válido com 8 dígitos.');
                return;
            }
            
            // Validando o e-mail
            var email = document.getElementById('email').value;
            if (!isValidEmailAddress(email)) {
                alert('Por favor, insira um e-mail válido.');
                return;
            }
            
            fetch('https://viacep.com.br/ws/' + cep + '/json/')
                .then(response => response.json())
                .then(data => {
                    document.getElementById('rua').value = data.logradouro;
                    document.getElementById('bairro').value = data.bairro;
                    document.getElementById('cidade').value = data.localidade;
                    document.getElementById('estado').value = data.uf;     
            })
                .catch(error => console.error('Erro:', error));
        });

        // Preenchemento automaticamente do CEP
        var cepField = document.getElementById('cep');
        if (cepField) {
            cepField.addEventListener('blur', function() {
                var cep = this.value.replace(/\D/g, '');
                if (cep != "" && cep.length === 8) {
                    fetch('https://viacep.com.br/ws/' + cep + '/json/')
                        .then(response => response.json())
                        .then(data => {
                            if (!("erro" in data)) {
                                document.getElementById('rua').value = data.logradouro;
                                document.getElementById('bairro').value = data.bairro;
                                document.getElementById('cidade').value = data.localidade;
                                document.getElementById('estado').value = data.uf;
                            } else {
                                alert('CEP não encontrado.');
                            }
                        })
                        .catch(error => console.error('Erro:', error));
                }
            });
        }
    }
});

function isValidEmailAddress(email) {
    const expression = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    const pattern = new RegExp(expression);
    return pattern.test(email);
}



