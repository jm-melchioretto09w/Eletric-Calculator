# Eletric-Calculator
1. Calculadora de Gastos por Eletrodoméstico

Esta ferramenta calcula o consumo de energia de um equipamento elétrico e seu custo mensal aproximado, com base na potência, tempo de uso diário e preço do kWh.

Como usar:

    Passo 1: Aperte o botão de cálculo.

    Passo 2: Insira o nome do equipamento.

    Passo 3: Informe a potência do equipamento e a unidade (W ou kW).

    Caso insira W, o sistema converterá automaticamente para kW.

    Se a unidade for inválida, o processo será reiniciado.

    Passo 4: Insira quantas horas por dia o equipamento é utilizado.

    Passo 5: Informe o valor cobrado por kWh (em reais).

Resultado:

    O sistema exibirá um alerta com:

    Consumo mensal aproximado em kWh.

    Custo mensal aproximado em reais.

Exemplo:

    Entrada:

        Nome do item: Geladeira

        Potência: 200

        Unidade: W

        Horas por dia: 24

        Preço por kWh: 0.70

    Resultado Exibido:

        Seu/sua Geladeira usa 144.00 kWh, lhe custando um total de R$100.80.

2. Conversor de Unidades de Eletroeletrônica

Esta ferramenta converte valores entre unidades com prefixos métricos (G, M, K, m, μ (use "u" por questões técnicas), n).

Como usar:

    Passo 1: Aperte o botão de conversão.

    Passo 2: Insira a unidade base completa (por exemplo, "W" ou "V").

    Passo 3: Insira o valor a ser convertido.

    Passo 4: Insira a unidade atual do valor, incluindo prefixo (ex.: "KW").

    Passo 5: Insira a unidade desejada, incluindo prefixo (ex.: "MW").

Resultado:

    O sistema exibirá um alerta com o novo valor convertido.

Exemplo:

    Entrada:

        Unidade base: W

        Valor: 1500

        Unidade atual: W

        Unidade desejada: kW

    Resultado Exibido:

        O novo valor será 1.5 kW.

3. Descobrir Resistência de um Resistor (Código de Cores)

Este script permite calcular o valor da resistência de um resistor com base no código de cores. O usuário insere as cores das faixas do resistor e o sistema calcula seu valor e tolerância.

Como usar:

    Passo 2: O sistema solicitará o número de faixas (4 ou 5).

    Passo 3: Insira as cores das faixas do resistor.

    As cores devem ser digitadas em português. Caso necessário, o sistema também aceita variações como "dourado" para "ouro" e "prateado" para "prata".

    As cores possíveis e seus valores correspondentes são:

        Faixas de 1 a 3: Definem o valor da resistência (baseada em tabelas de dígitos).

        Faixa 4 (para resistores de 4 faixas): Define o multiplicador (tabela de multiplicadores).

        Faixa 5 (para resistores de 5 faixas): Define a tolerância (tabela de tolerâncias).

    Passo 4: O sistema calculará o valor total do resistor e a tolerância em percentual.

Resultado:

O sistema exibirá um alerta com a resistência do resistor e a variação da tolerância.

Exemplo:

    Entrada:

        Número de faixas: 4

        Cores das faixas: Vermelho, Vermelho, Laranja, Dourado

    Resultado Exibido:

        O resistor terá uma resistência de 22,000 Ohms com tolerância de 5%, que seriam, aproximadamente, 1,100 Ohms a mais ou a menos.

