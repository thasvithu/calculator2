let result = document.getElementById('result');

function appendSymbol(symbol){
    if(symbol === 'X'){
        result.value = result.value.slice(0, -1);
    }else{
        result.value += symbol;
    }
}
function clearResult(){
	result.value = '';
}

function calculate(){
	try{
		result.value = eval(result.value);
	}catch(error){
		result.value = 'Error';
	}
}
