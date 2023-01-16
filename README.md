Projeto X

Esse projeto tem como objetivo unirmos diversos programas que hoje temos no squad de PeS em uma única interface web

Requisitos 

# Nomes
Pharos - 
Modulare - 
Synapse - 
Solari -  
Relyse - 
Ada -
# Dúvidas

Daremos acesso livre as pessoas para adicionar e modificar elementos do sistema?


# Tela de Login

Campo de usuario
Campo de senha

Realizar autentificação com o AD

# Tela principal

Temos que ter todas as informações dos modulos presentes para intergração inicialmente

Módulo Artemis*
Módulo gerador de estrutura
Módulo automação de prints
Módulo checa pacotes

# Telas dos módulos

Cada módulo é bem diferente do outro, por isso temos que pensar as entradas que o módulo precisa

- Upload de arquivos Zip
- Download de arquivos como para o gerador de estruturas e automaçao de prints
- Input de dados para as pesquisas e informações que queremos obter 
- O Artemis deve contar configurações adicionais diferente dos outros 3 módulos 
*alinhar com Aluisio os requisitos funcionais do Sistema

# Módulo gerador de estrutura

Neste módulo teremos que selecionar de um range de "Produtos", quais tabelas e pastas queremos que o sistema Gere
podemos ter uma aba para personalizar a criação do pacote, caso não queira usar os pré configurados
e o output do módulo seria o pacote zipado com os arquivos e estruturar criadas

# Módulo Checa Pacotes

Neste módulo, teremos que entrar com o pacote para verificar os scripts
após temos que abrir um prompt ou input de texto para seguir as instruções das validações
E retornar o pacote para download ou um arquivo de texto *Falar com Bruno sobre o retorno da aplicação para entender o output

# Módulo Automação de prints

Neste módulo, temos que ter inputs sobre o número da linha
ter um scroll com todos os Labs e QA para conseguirmos usar o selenium
e o output do módulo, seria o download de um pacote com todos os prints tirados pelo módulo
- 
# Back End

- Node | para APIs e comunicação 
- Python | para o gerador de estruturas e automação de prints
- Shell Script | para o Checa pacote
- C# | Artemis

-- talvez teremos que refatorar alguns dos programas para ajustarmos para a tela web, porém será na fase 3 do projeto