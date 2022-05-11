function escola(){
  let options
  while(options!=1 && options!=2){
    prompt("Escolha uma das opções:\n" + 
    "1 - Média Bimestral \n" +
    "2 - Média Anual" )
  }
  return options
}

function mediaBimestral(){
  const nota1 = prompt("Informe à sua Primeira Nota:")
  const nota2 = prompt("Informe à sua Segunda Nota:")
  const media = (Number(nota1)+Number(nota2))/2;
  console.log(media)
  if(media<6){
    alert("Aluno Reprovado no bimestre!")
  } 
  else if(media<10){
    alert("Aluno Aprovado no bimestre")
  } 
  if(media==10){
    alert("Aluno aprovado com nota maxima no bimestre")
  }

  escola()
}

function mediaAnual(){
  const nota1 = prompt("Informe à sua Primeira Nota:")
  const nota2 = prompt("Informe à sua Segunda Nota:")
  const nota3 = prompt("Informe à sua Terceira Nota:")
  const nota4 = prompt("Informe à sua Quarta Nota:")
  const media = (Number(nota1)+Number(nota2)+Number(nota3)+Number(nota4))/4;
  console.log(media)
  if(media<6){
    alert("Aluno Reprovado")
  } 
  else if(media<10){
    alert("Aluno Aprovado")
  } 
  if(media==10){
    alert("Aluno aprovado com nota maxima")
  }
  escola()
}

mediaAnual()

