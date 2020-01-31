function filtroDados(){

  const query = ['ano', 'mes', 'dia', 'tipo', 'descricao', 'valor']

  for(let i in query){
    if(document.getElementById(query[i]).value === '')
      document.getElementById(query[i]).name = ''
  }
}