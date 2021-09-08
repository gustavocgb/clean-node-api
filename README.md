# clean-node-api

TDD => 
DDD =>

git:
  adicionar atalhos no git
  configuracoes
    git config --list
    git config --system
    git config --global
    git config --local

  abrir doc
    git config --global --edit
  ou
  abrir doc no vcscode
    git config --global core.editor code

  formator log
    log --pretty=format:'%C(blue)%h%C(red)%d %C(white)%s - %C(cyan)%cn, %C(green)%cr'

  juntar novo commit com o anterior
    git add .
    git commit --amend --no-edit

  stash
    quando não quiser comitar todos os arquivos. Com isso, adiciona o arquivo que não queria no stash
      git stash push 'diretorio do arquivo'
    listar arquivos no stash
      git stash list
    retirar arquivo do stash
      git stash pop

jest:
  flags
    --silent => roda com detalhes otimizados 
    --runInBand => roda sequencial e não asincrono os testes
    --findRelatedTests => roda tests aos arquivos que foram alterados
    -c

eslint:
  lint-staged

husky:
  pra executar scripts antes de alguma ação
    pre-commit
    pre-push

fast-glob
    equivalente ao fs

sucrase
    pra rodar o node com ts
        "start": "sucrase-node src/main/server.ts"


desing patterns
    composite
    adapter
    singleton


