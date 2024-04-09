let output_value = output
const display = (num)=>{
    output_value.value += num;
}

const Calculate = ()=>{
    try{
        output_value.value = eval(output_value.value);
    }
    catch(erro){
        alert(erro)
    }
    
}


const Clear = ()=>{
    output_value.value = ''
}

const del = ()=>{
    output_value.value = output_value.value.slice(0,-1)

}

