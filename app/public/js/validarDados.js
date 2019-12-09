function validarDados(){
  if(document.getElementById('ano').value === ''){
    document.getElementById('ano').name = ''
  }
  if(document.getElementById('mes').value === ''){
    document.getElementById('mes').name = ''
  }
  if(document.getElementById('dia').value === ''){
    document.getElementById('dia').name = ''
  }
  if(document.getElementById('tipo').value === ''){
    document.getElementById('tipo').name = ''
  }
  if(document.getElementById('descricao').value === ''){
    document.getElementById('descricao').name = ''
  }
  if(document.getElementById('valor').value === ''){
    document.getElementById('valor').name = ''
  }
}