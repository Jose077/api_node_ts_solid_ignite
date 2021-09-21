
# Cadastro de carro

**RF** 
Deve ser possivel cadastrar um novo carro.

**RN** 
Não deve ser possível cadasrtar um carro com uma placa já existente.
Não deve ser possível alterar a placa de um carro já cadastrado.
O carro deve ser cadastrado, por padrão, com disponibilidade.
Apenas adminstradores cadastram carro.


# Listagem de carro

**RF**
Deve ser possível listar todos os carros disponiveis.
Deve ser possível listar todos os carros disponiveis pelo nome da categoria. 
Deve ser possível listar todos os carros disponiveis pelo nome da marca. 
Deve ser possível listar todos os carros disponiveis pelo nome da carro. 


**RN** 
Não é necessario estar logado no sistema.


# Cadastro de Especificações no carro

**RF** 
Deve ser possível cadastrar uma especificação para um carro
Deve ser possivel listar todas as especificações

**RN** 
Não deve ser possivel cadastrar uma especificação para um carro inexistente;
Não deve ser possivel cadastrar especificação já existente.
Apenas adminstradores cadastram especificacoes.

# Cadastro de imagens do carro.

**RF** 
Deve ser possível cadastrar a imagem do carro
Deve ser possível listar todos os carros

**RNF** 
Utilizar o multer para upload dos arquivos

**RN** 
O úsuario deve poder cadastrar mais de uma imagem para o mesmo carro.
Apenas administrador.


# Aluguel de carro

**RF** 
Deve ser possivel cadastrar um Aluguel

**RNF** 

**RN** 
O aluguel deve ter duracao minima de 24 horas.
Não deve ser possivel cadastrar um novo aluguel caso já exista um aberto para o mesmo usuario
Não deve ser possivel cadastrar um novo aluguel caso já exista um aberto para o mesmo Carro




