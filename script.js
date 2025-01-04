//elementos
var teamaInput = document.getElementById("teamA")
var teambInput = document.getElementById("teamB")
var scoreaInput = document.getElementById("goalA")
var scorebInput = document.getElementById("goalB")
var addGameButton = document.getElementById("addBtn")

//funções

function checkIsNotNull(){
     //valores
     var teamA = teamaInput.value
     var teamB = teambInput.value
     var scoreA = Number(scoreaInput.value)
     var scoreB = Number(scorebInput.value)
     
    //console.log(`${teamA} ${teamB} ${scoreA} ${scoreB}`)
    if(teamA == '' || teamB == '' || scoreA == null || scoreB == null){
        return false
    }else{
        return true
    }
}

function scoreCheck(){
    //valores
    var teamA = teamaInput.value
    var teamB = teambInput.value
    var scoreA = Number(scoreaInput.value)
    var scoreB = Number(scorebInput.value)
    var msg = ""

    if(scoreA > scoreB){
        msg = `o ${teamA} ganhou`
    }else if(scoreA < scoreB){
        msg = `o ${teamB} ganhou`
    }else{
        msg = `o jogo terminou em empate`
        
    }
    return msg
}

function addGame(){
    //valores
    var teamA = teamaInput.value
    var teamB = teambInput.value
    var scoreA = Number(scoreaInput.value)
    var scoreB = Number(scorebInput.value)

    if(checkIsNotNull()){
        window.alert(`Jogo 1: ${teamA} ${scoreA} x ${scoreB} ${teamB} (${scoreCheck()})`)
        //console.log(`Jogo 1: ${teamA} ${scoreA} x ${scoreB} ${teamB}`)
    }else{
        window.alert("Preencha todos os campos!")
    }

    
}