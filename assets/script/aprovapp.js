

console.log("js carregado");

const turma = [];

let nomeDaTurma = "";

function mudarTexto(id, texto) {
    document.getElementById(id).innerText = (texto);
    }




function cadastrarTurma(){
    nomeDaTurma = prompt("Digite o nome da turma");
    console.log("O nome da turma é: ", nomeDaTurma);

    mudarTexto("nome_turma",nomeDaTurma)
    

    let qtdAlunos = prompt("Digite a quantidade de alunos");
    console.log("A quantidade de alunos é: ", qtdAlunos);

    mudarTexto("qtd_alunos",qtdAlunos)

    for(let i = 0; i < qtdAlunos; i++){
        cadastrarAluno(i);
    }

    if(qtdAlunos == turma.length){
         alert(" Pronto! Agora clique em lançar as notas");
    }

}

function cadastrarAluno(ordemNumero){
    let nomeAluno = prompt(`Digite o nome do aluno ${ordemNumero + 1 }`);

    aluno = {
        nome: nomeAluno,
        nota: null,

    }


    turma.push(aluno);
   
    
    
}

    
    console.log("Os alunos da turma são: ", turma);
   


function lancarNotas(){
    alert("Informe as notas dos alunos");

    for(i = 0; i< turma.length;i++){
        let alunoAtual= turma[i];

        let notaDigitada = prompt("Digite a nota do aulo(a): "+ alunoAtual.nome);

        alunoAtual.nota = parseInt(notaDigitada);
    }


    
         alert(" Agora Clique em Calcular Média da Turma");
    
    
    
}

function calcularMedia(){
    let somaDasNotas = 0;

    for(let i = 0; i < turma.length; i++){
        somaDasNotas = somaDasNotas + turma[i].nota;
    }

    let mediaFinal = parseInt(somaDasNotas/turma.length);

    mudarTexto("media_turma", mediaFinal);
    console.log("A media da turma é de: "+ mediaFinal);

   function aprovacao(){

        if(mediaFinal >= 7){
        
        document.getElementById("resultado").innerText = ("Turma Aprovada com média "+ mediaFinal);
        alert("Turma Aprovada com média "+ mediaFinal);
        console.log("Turma Aprovada com média "+ mediaFinal);
    }

    else if(mediaFinal <= 6 && mediaFinal > 5){
     
           document.getElementById("resultado").innerText = ("Turma em Recuperação com média "+ mediaFinal);
           alert("Turma em recuperação com média "+ mediaFinal);
            console.log("Turma em recuperação com média "+ mediaFinal);

    }

     else{
      
          document.getElementById("resultado").innerText = ("Turma Reprovada com média "+ mediaFinal);
          alert ("Turma Reprovada com média "+ mediaFinal);
            console.log("Turma Reprovada com média "+ mediaFinal);
    }
   

    }

    aprovacao();
    
  
}





    
    
    

    

function reiniciar() {
    turma.length = 0;        
    nomeDaTurma = "";        

   
    mudarTexto("nome_turma", "");
    mudarTexto("qtd_alunos", "");
    mudarTexto("media_turma", "");
    document.getElementById("resultado").innerText = ("");

    alert("Sistema reiniciado!");
}


