//elementos
var teamaInput = document.getElementById("teamA")
var teambInput = document.getElementById("teamB")
var scoreaInput = document.getElementById("goalA")
var scorebInput = document.getElementById("goalB")
var addGameButton = document.getElementById("addBtn")
var memberInput = document.getElementById("member")
var addListButton = document.getElementById("addListBtn")
var calcButton = document.getElementById("calcBtn")
var copyBtn = document.getElementById("copyBtn")
var contentDiv = document.querySelector(".content")
var gameInputDiv = document.querySelector(".gameInput")
var resultDiv = document.querySelector(".result")
var scoreDiv = document.querySelector(".scoreboard")
var updateDiv = document.querySelector(".update")

var count = 0
var gameCount = 0
var memberList = []
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

function scoreCheck(teamA,teamB,scoreA,scoreB){
    //valores
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
    if(memberList.indexOf(member) == -1 && member != ''){
        if(member != '' && count < 4){
            memberList.push(member)
            count++
            gameCount = 0
            resultDiv.innerHTML += `
            <div id="palpite${count}">
                <p>${member}</p>
            </div>
            `
        }else{
            window.alert("Entrada Invalida!")
        }
    }else{
        window.alert(`Ficha de ${member} já foi criada!`)
    }

}
function checkListCreated(){
    if(count == 0){
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
    var result = scoreCheck(teamA,teamB,scoreA,scoreB)
    
    if(checkIsNotNull()){
        //window.alert(`Jogo ${count}: ${teamA} ${scoreA} x ${scoreB} ${teamB} (${scoreCheck()})`)
        //console.log(`Jogo 1: ${teamA} ${scoreA} x ${scoreB} ${teamB}`)
        if(checkListCreated()){
            if(count == 1){
                if(checkGameExists(palpite1,teamA,teamB)){
                    alert("Jogo já cadastrado!")
                }else{
                    gameCount++
                    document.getElementById(`palpite${count}`).innerHTML += `<p>Jogo ${gameCount}: ${teamA} ${scoreA} x ${scoreB} ${teamB} (${result})</p>`
                    palpite1.push([teamA,scoreA,teamB,scoreB,result])
                }
            }else if(count == 2){
                if(checkGameExists(palpite2,teamA,teamB)){
                    alert("Jogo já cadastrado!")
                }else{
                    gameCount++
                    document.getElementById(`palpite${count}`).innerHTML += `<p>Jogo ${gameCount}: ${teamA} ${scoreA} x ${scoreB} ${teamB} (${result})</p>`
                    palpite2.push([teamA,scoreA,teamB,scoreB,result])
                }
            }else if(count == 3){
                if(checkGameExists(palpite3,teamA,teamB)){
                    alert("Jogo já cadastrado!")
                }else{
                    gameCount++
                    document.getElementById(`palpite${count}`).innerHTML += `<p>Jogo ${gameCount}: ${teamA} ${scoreA} x ${scoreB} ${teamB} (${scoreCheck()})</p>`
                    palpite3.push([teamA,scoreA,teamB,scoreB,result])
                }
            }else if(count == 4){
                if(checkGameExists(palpite4,teamA,teamB)){
                    alert("Jogo já cadastrado!")
                }else{
                    gameCount++
                    document.getElementById(`palpite${count}`).innerHTML += `<p>Jogo ${gameCount}: ${teamA} ${scoreA} x ${scoreB} ${teamB} (${result})</p>`
                    palpite4.push([teamA,scoreA,teamB,scoreB,result])
                }
            }
        }else{
            window.alert("Lista de palpites não criada!")
        }
    }else{
        window.alert("Entrada Invalida!")
    }
}

function checkGameExists(palpite, teamA, teamB){
    for(const game of palpite){
        if(game[0] == teamA || game[2] == teamB || game[0] == teamB || game[2] == teamA){
            return true
        }
    }
    return false
}

function calcPts(){
    var pts2 = 0
    var pts3 = 0
    var pts4 = 0
    if(memberList.length < 2){
        window.alert("Fichas insuficientes!")
    }else{
        if(gameCount < 1){
            window.alert("Jogos insuficientes!")
        }else{
            for(const game1 of palpite1){
                //console.log(game)
                for(const game2 of palpite2){
                    if(game1[0] == game2[0] && game1[2] == game2[2]){
                        if(game1[4] == game2[4]){
                            pts2+=1
                        }
                        if(game1[1] == game2[1] && game1[3] == game2[3]){
                            pts2+=2
                        }
                    }
                }
                if(memberList.length >= 3){
                    for(const game2 of palpite3){
                        if(game1[0] == game2[0] && game1[2] == game2[2]){
                            if(game1[4] == game2[4]){
                                pts3+=1
                            }
                            if(game1[1] == game2[1] && game1[3] == game2[3]){
                                pts3+=2
                            }
                        }
                    }
                    if(memberList.length == 4){
                        for(const game2 of palpite4){
                            if(game1[0] == game2[0] && game1[2] == game2[2]){
                                if(game1[4] == game2[4]){
                                    pts4+=1
                                }
                                if(game1[1] == game2[1] && game1[3] == game2[3]){
                                    pts4+=2
                                }
                            }
                        }
                    }
                }  
            }
        }
    }
    if(count == 2){
        scoreDiv.innerHTML = `
        <h2>Pontuação</h2>
        <p>${memberList[1]}: ${pts2} pontos</p>
    `
    }else if(count == 3){
        scoreDiv.innerHTML = `
        <h2>Pontuação</h2>
        <p>${memberList[1]}: ${pts2} pontos</p>
        <p>${memberList[2]}: ${pts3} pontos</p>
    `
    }else if(count == 4){
        scoreDiv.innerHTML = `
        <h2>Pontuação</h2>
        <p>${memberList[1]}: ${pts2} pontos</p>
        <p>${memberList[2]}: ${pts3} pontos</p>
        <p>${memberList[3]}: ${pts4} pontos</p>
    `
    }
    console.log(pts2,pts3,pts4)
}

function copyList(){
    var teamA
    var teamB
    var scoreA
    var scoreB
    var result
    

    if(count <= 1){
        alert("Impossivel copiar")
    }else{
        for(const game of palpite1){
            teamA = game[0]
            teamB = game[2]
            scoreA = game[1]
            scoreB = game[3]
            result = game[4]

            if(count == 2){
                if(checkGameExists(palpite2,teamA,teamB)){
                    alert("Jogo já cadastrado!")
                }else{
                    gameCount++
                    document.getElementById(`palpite${count}`).innerHTML += `
                    <p>Jogo ${gameCount}: 
                        ${teamA} <input type="number" value="${scoreA}" min="0" onkeyup="checkIsNotNull()" class="goal" id="goalA${gameCount}_2">
                        x
                        <input type="number" value="${scoreB}" min="0" onkeyup="checkIsNotNull()" class="goal" id="goalB${gameCount}_2">${teamB}
                        (${result})
                        <button type="button" id="updBtn" onclick="updateGame('${gameCount}',2,'${teamA}','${teamB}')">Atualizar</button>
                        </p>
                    `
                    palpite2.push([teamA,scoreA,teamB,scoreB,result])
                }
            }else if(count == 3){
                if(checkGameExists(palpite3,teamA,teamB)){
                    alert("Jogo já cadastrado!")
                }else{
                    gameCount++
                    document.getElementById(`palpite${count}`).innerHTML += `
                    <p>Jogo ${gameCount}: 
                        ${teamA} <input type="number" value="${scoreA}" min="0" onkeyup="checkIsNotNull()" class="goal" id="goalA${gameCount}_3">
                        x
                        <input type="number" value="${scoreB}" min="0" onkeyup="checkIsNotNull()" class="goal" id="goalB${gameCount}_3">${teamB}
                        (${result})
                        <button type="button" id="updBtn" onclick="updateGame('${gameCount}',3,'${teamA}','${teamB}')">Atualizar</button>
                        </p>
                    `
                    palpite3.push([teamA,scoreA,teamB,scoreB,result])
                }
            }else if(count == 4){
                if(checkGameExists(palpite4,teamA,teamB)){
                    alert("Jogo já cadastrado!")
                }else{
                    gameCount++
                    document.getElementById(`palpite${count}`).innerHTML += `
                    <p>Jogo ${gameCount}: 
                        ${teamA} <input type="number" value="${scoreA}" min="0" onkeyup="checkIsNotNull()" class="goal" id="goalA${gameCount}_4">
                        x
                        <input type="number" value="${scoreB}" min="0" onkeyup="checkIsNotNull()" class="goal" id="goalB${gameCount}_4">${teamB}
                        (${result})
                        <button type="button" id="updBtn" onclick="updateGame('${gameCount}',4,'${teamA}','${teamB}')">Atualizar</button>
                        </p>
                    `
                    palpite4.push([teamA,scoreA,teamB,scoreB,result])
                }
            }
        }
        updateDiv.innerHTML = `
            <button type="button" id="updAllBtn" onclick="updateAll()">Atualizar todos</button>
        `
    }
}
function updateGame(gCount,mCount,teamA,teamB){
    var scoreA
    var scoreB

    if(mCount == 2){
        scoreA = Number(document.getElementById(`goalA${gCount}_2`).value)
        scoreB = Number(document.getElementById(`goalB${gCount}_2`).value)
        for(const game of palpite2){
            if(game[0] == teamA && game[2] == teamB){
                game[1] = scoreA
                game[3] = scoreB
                game[4] = scoreCheck(teamA,teamB,scoreA,scoreB)
            }
        }
        //console.log(palpite2)
    }else if(mCount == 3){
        scoreA = Number(document.getElementById(`goalA${gCount}_3`).value)
        scoreB = Number(document.getElementById(`goalB${gCount}_3`).value)
        for(const game of palpite3){
            if(game[0] == teamA && game[2] == teamB){
                game[1] = scoreA
                game[3] = scoreB
                game[4] = scoreCheck(teamA,teamB,scoreA,scoreB)
            }
        }
        //console.log(palpite3)
    }else if(mCount == 4){
        scoreA = Number(document.getElementById(`goalA${gCount}_4`).value)
        scoreB = Number(document.getElementById(`goalB${gCount}_4`).value)
        for(const game of palpite4){
            if(game[0] == teamA && game[2] == teamB){
                game[1] = scoreA
                game[3] = scoreB
                game[4] = scoreCheck(teamA,teamB,scoreA,scoreB)
            }
        }
        //console.log(palpite4)
    }
}

function updateAll(){
    var x
    var y
    for(x=2;x<=count;x++){
        console.log('x:'+x)
        for(y=1;y<=palpite1.length;y++){
            console.log('y:'+y)
            updateGame(y,x,palpite1[y-1][0],palpite1[y-1][2])
        }
    }
    alert("Atualizado com sucesso!")
}