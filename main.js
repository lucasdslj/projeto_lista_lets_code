let btn_add_tarefa = document.querySelector('#btn_add');
let input_tarefa = document.querySelector('#task_insert')
let div_painel = document.querySelector('#painel')


function get_bd(){
    let banco
    if (banco = localStorage.getItem('lista')) {
        return banco
    }else{
        return []
    }
}

// localStorage.getItem('lixeira')


let taf = {
    tarefa: 'Estudar para a prova',
    indice: 0
}

function set_db(tarefas) {
    localStorage.setItem('lista', tarefas)
}

set_db(taf)


let indice = 0;


function insere_tarefa(tarefa, index) {
    let div_tarefa =  document.createElement('div')
    div_tarefa.setAttribute('data-indice', `${index}`)
    div_tarefa.innerHTML = `<div class="card">
                <div class="container" >
                    <div class="card-body">
                        <div class="row"> 
                            <div class="col-xl-10">
                                    <div class="form-check">
                                        <h5 class="texto_tarefa">
                                            <input type="checkbox" class="form-check-input">
                                                ${tarefa}
                                        </h5>
                                    </div>
                                </div>
                            <div class="col-xl-2">
                                <button type='button' data-indice=${index} class="btn btn-dark col-12" id="btn_del">
                                    Excluir
                                </button>
                            </div>
                        </div> 
                    </div>
                </div>
            </div>`

    div_painel.appendChild(div_tarefa)

    
}

function name(params) {
    
}

btn_add_tarefa.addEventListener('click', function(event){
    let conteudo_tarefa = input_tarefa.value
    console.log(div_painel.childElementCount);


    if (conteudo_tarefa.trim()  === ''){
        alert("Digite a sua tarefa!")
    }else{
        document.querySelector('#card_checkbox_all').classList.remove('ocultar')
        insere_tarefa(conteudo_tarefa, indice++)
        console.log("não sou vazio e fui clicado");
        input_tarefa.value =  ''
    }

    

})

// adicionando lista com enter
input_tarefa.addEventListener('keyup', function(event){
    var key = event.which || event.keyCode; // captura os valores da tecla
    let conteudo_tarefa = input_tarefa.value // guarda o que foi digitado no input para uma variável auxiliar
        
    // confere se o valor é igual à 13 (enter)
        if (key == 13) {
            document.querySelector('#card_checkbox_all').classList.remove('ocultar')
            insere_tarefa(conteudo_tarefa, indice++) // insere a tarefa
            input_tarefa.value =  '' // limpa o input
        } 
})



div_painel.addEventListener('click', function(event) {

    let evt_capturado = event.target

    if(evt_capturado.type === 'checkbox' && evt_capturado.id !== 'checkbox_all'){
        evt_capturado.parentNode.classList.toggle('riscado')
        console.log("Eu sou um Checkbox e fui clicado");
    }else{
        let checkbox_marcados = document.querySelectorAll('.riscado input')
        let checkbox_nao_marcados = document.querySelectorAll('.texto_tarefa input')

        if (evt_capturado.checked == true){
            for (const tarefa of checkbox_nao_marcados) {
                tarefa.parentNode.classList.add('riscado')
                tarefa.checked = true
            }
        }else{
            for (const tarefa of checkbox_marcados) {
                tarefa.parentNode.classList.remove('riscado') 
                tarefa.checked = false
            }
        }
    }
    
    if (evt_capturado.type === 'button') {
        let sequencia = evt_capturado.dataset.indice
        div_painel.querySelector(`[data-indice="${sequencia}"]`).remove()
        if (!(div_painel.querySelector(`[data-indice]`))) { 
            document.querySelector('#card_checkbox_all').classList.add('ocultar')
        }

        console.log("Eu sou um button e fui clicado");
      
    }

    
})

    


// checkbox.addEventListener('click', function(event){
//     console.log("Aqui Estou");
//     checkbox.parentNode.classList.toggle('riscado')   
// })










// function teste_nulo(arg) {
//     if (arg === null) {
//         console.log('Aqui estou lançando um exceção');
//         throw new error('Argumento passado é nulo')
//     }
// }


// let checkbox = document.querySelector("#teste")
// try {
//     //código que pode gerar erro
//     teste_nulo(checkbox)

//     checkbox.addEventListener('click', function(event){
//         console.log("Aqui Estou");
//         checkbox.parentNode.classList.toggle('riscado')   
//     })
// } catch (error) {
//     //código que será executado caso ocorra um erro
//     console.log('O elemento html de id "teste" não foi localizado na página');
// }


