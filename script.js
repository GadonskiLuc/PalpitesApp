//elementos
var teamaInput = document.getElementById("teamA")
var teambInput = document.getElementById("teamB")
var scoreaInput = document.getElementById("goalA")
var scorebInput = document.getElementById("goalB")
var addGameButton = document.getElementById("addBtn")
var memberInput = document.getElementById("member")
var addListButton = document.getElementById("addListBtn")
var contentDiv = document.querySelector(".content")
var gameInputDiv = document.querySelector(".gameInput")
var resultDiv = document.querySelector(".result")

var count = 0
var gameCount = 0
var palpite1 = []
var palpite2 = []
var palpite3 = []
var palpite4 = []

//funções

function checkIsNotNull(){
     //valores
     var teamA = teamaInput.value
     var teamB = teambInput.value
     var scoreA = Number(scoreaInput.value)
     var scoreB = Number(scorebInput.value)
     
    //console.log(`${teamA} ${teamB} ${scoreA} ${scoreB}`)
    if(teamA == '' || teamB == '' || scoreA == null || scoreB == null || scoreA < 0 || scoreB < 0 || teamA=== teamB){
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

function addList(){
    var member = memberInput.value
    if(member != '' && count < 4){
        count++
        resultDiv.innerHTML += `
        <div id="palpite${count}">
            <p>${member}</p>
        </div>
        `
    }else{
        window.alert("Entrada Invalida!")
    }

}
function checkListCreated(){
    if(count == 0){
        window.alert("Lista de palpites não criada!")
        return false
    }else{
        return true
    }
}

function addGame(){
    //valores
    var teamA = teamaInput.value
    var teamB = teambInput.value
    var scoreA = Number(scoreaInput.value)
    var scoreB = Number(scorebInput.value)

    if(checkIsNotNull()){
        //window.alert(`Jogo ${count}: ${teamA} ${scoreA} x ${scoreB} ${teamB} (${scoreCheck()})`)
        //console.log(`Jogo 1: ${teamA} ${scoreA} x ${scoreB} ${teamB}`)
        if(checkListCreated()){
            gameCount++
            resultDiv.innerHTML += `<p>Jogo ${gameCount}: ${teamA} ${scoreA} x ${scoreB} ${teamB} (${scoreCheck()})</p>`
            if(count == 1){
                palpite1.push(teamA,scoreA,teamB,scoreB)
                console.log(palpite1)
            }else if(count == 2){
                palpite2.push(teamA,scoreA,teamB,scoreB)
                console.log(palpite2)
            }else if(count == 3){
                palpite3.push(teamA,scoreA,teamB,scoreB)
                console.log(palpite3)
            }else if(count == 4){
                palpite4.push(teamA,scoreA,teamB,scoreB)
                console.log(palpite4)
            }
        }else{
            window.alert("Lista de palpites não criada!")
        }
    }else{
        window.alert("Entrada Invalida!")
    }

    
}