function mostrarOpcoes() {
    let opcoes = parseInt(prompt(`Bem vindo, o sistema de CRUD de veículos:
No momento, o sistema tem ${carros.length} carros cadastrados
Escolha uma das opções para interagir com o sistema:
1 - Cadastrar Veículos.
2 - Listar todos os Veículos.
3 - Filtrar Veículos por marca.
4 - Atualizar veículo.
5 - Remover veículo.
6 - Sair do sistema. 
`))

    switch (opcoes) {
        case 1:
            cadastrarVeiculo();
            break;
        case 2:
            listarVeiculos(carros);
            break;
        case 3:
            filtrarVeiculos(carros);
            break;
        case 4:
            atualizarVeiculos(carros);
            break;
        case 5:
            removerVeiculo(carros);
            break;
        case 6:
            break;
        default:
            alert('Opção inválida!');
            break;
    }
}

function cadastrarVeiculo() {
    let id = 1;
    let continuar;
    do {
        let carro = {
            id: id++,
            modelo: '',
            marca: '',
            ano: 0,
            cor: '',
            preco: 0,
        }

        carro.modelo = prompt('Informe o modelo do veículo: ');
        carro.marca = prompt('Informe a marca do veículo: ').toUpperCase();
        carro.ano = parseInt(prompt('Informe o ano do veículo: '));
        carro.cor = prompt('Informe a cor do veículo: ');
        carro.preco = parseFloat(prompt('Informe o valor do veículo: '));

        continuar = confirm('Deseja cadastrar outro veículo?');

        carros.push(carro);
    } while (continuar);

    if (continuar === false) {
        mostrarOpcoes();
    }

}

function listarVeiculos(carros) {
    if (carros.length > 0) {
        console.log('Lista de todos os carros: ')
        carros.map(carro => console.log(`ID: ${carro.id} | Modelo: ${carro.modelo} | Ano: ${carro.ano} | Cor: ${carro.cor} | Preço: ${carro.preco}
        `));
    } else {
        alert('No momento não à carros cadastrados.');
    }
    mostrarOpcoes();
}

function filtrarVeiculos(carros) {
    let marca = prompt('Informe a marca que deseja filtrar: ').toUpperCase();
    let marcaFiltrada = carros.filter(carro => carro.marca === marca);

    if (marcaFiltrada.length > 0) {
        console.log(`Carros da Marca ${marca}:`)
        marcaFiltrada.forEach(carro => console.log(`ID: ${carro.id} | Modelo: ${carro.modelo} | Ano: ${carro.ano} | Cor: ${carro.cor} | Preço: ${carro.preco}`));
    } else {
        alert('Marca não encontrada ou não cadastrada.');
    }

    mostrarOpcoes();
}

function atualizarVeiculos(carros) {
    let idVeiculo = parseInt(prompt('Informe o identificador do veículo: '));
    let idFiltrado = carros.filter(carro => carro.id === idVeiculo);

    if (idFiltrado.length > 0) {
        idFiltrado.forEach(carro => {
            carro.cor = prompt('Informa outra cor ao Veículo: ');
            carro.preco = parseFloat(prompt('Informe outro valor para p veículo: '));
        });
    } else {
        alert('Veículo, não encontrado.');
    }

    mostrarOpcoes();
}

function removerVeiculo(carros) {
    let idVeiculo = parseInt(prompt('Informe o indentificador do veiculo: '));
    let removerId = carros.findIndex(carro => carro.id === idVeiculo);

    if(removerId !== -1) {
        carros.splice(removerId, 1);
    } else {
        alert('Veículo, não encontrado.');
    }

    mostrarOpcoes();
}

let carros = [];

mostrarOpcoes();

