# Projeto typescrit

## configurando
instalar o ts com npm i typescript -D // para instalar nas dependencias de desenvolvedor
Apos instalar temos que rodar o comando npx tsc --init
Criando a pasta tsconfig, alteramos o target para 2022
Agora podemos converter um arquivo .ts para .js usando npx tsc nome_do_arquivo
temos que instalar os typos do node com npm i -D @types/node
Agora para deixaarmos o servidor rodando, e não ter que ficar convertendo ts para js usamos o tsx, como devDependece
ai so colocar no packge.json 
depois de colocar as configuraçõe confome o packge.json para criar uma migration usamos npm run knex -- migrate:make [nome da migration]
apos a migration criada usamos o comando npm run knex -- migrate:latest para criar ela kkk
e para desfazer caso criado usamos npm run knex -- migrate:rollback  