class ImcService {

    calculaImc(data) {
        let peso = data.peso;
        let altura = data.altura;

    //A equação é o valor do peso em quilogramas dividido pela 
    //altura em centímetros. Em seguida, é preciso dividir o 
    //resultado novamente pela altura em centímetros e multiplicar o resultado por 10.000.
        let valor_imc = (peso / altura) / altura * 10000;

        if(valor_imc < 17) return "Muito abaixo do peso"
        else if(valor_imc < 18.49) return "Abaixo do peso"
        else if(valor_imc < 24.99) return "Peso normal"
        else if(valor_imc < 29.99) return "Acima do peso"
        else if(valor_imc < 34.99) return "Obesidade I"
        else if(valor_imc < 39.99) return "Obesidade II (severa)"
        else if(valor_imc > 40) return "Obesidade III (mórbida)"
        else return 'Valor indefinido';
    }
}

export default new ImcService();