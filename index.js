function escola(){
  let options;
  while(options!=1 && options!=2 && options!=3){
  options = prompt("Escolha uma das opções:\n" + 
    "1 - Média Bimestral \n" +
    "2 - Média Anual \n" + 
    "3 - Finalizar Programa" )
  }
  return options
}

function mediaBimestral(){
  const nota1 = prompt("Informe à sua Primeira Nota:")
  const nota2 = prompt("Informe à sua Segunda Nota:")
  const media = (Number(nota1)+Number(nota2))/2;
  console.log(media)
  if(media<6){
    alert(`Aluno Reprovado no bimestre com média de ${media}!`)
  } 
  else if(media<10){
  alert(`Aluno Aprovado no bimestre com média de ${media}`)
  } 
  if(media==10){
    alert(`Aluno aprovado com nota maxima no bimestre com média de ${media}`)
  }

}

function mediaAnual(){
  const nota1 = prompt("Informe à sua Primeira Nota:")
  const nota2 = prompt("Informe à sua Segunda Nota:")
  const nota3 = prompt("Informe à sua Terceira Nota:")
  const nota4 = prompt("Informe à sua Quarta Nota:")
  const media = (Number(nota1)+Number(nota2)+Number(nota3)+Number(nota4))/4;
  console.log(media)
  if(media<6){
    alert(`Aluno Reprovado com média de ${media}`)
  } 
  else if(media<10){
    alert(`Aluno Aprovado com média de ${media}`)
  } 
  if(media==10){
    alert(`Aluno aprovado com nota maxima - ${media}`)
  }
}

let optionEscola =Number(escola())

switch(optionEscola){
  case 1:
    mediaBimestral()
    break
  case 2:
    mediaAnual()
    break
  default:
    alert("Programa Finalizado")
    break
}


