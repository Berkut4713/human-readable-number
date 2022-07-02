module.exports = function toReadable (number) {
    let result = '';
    let numberS = String(number);
    if (numberS.length === 1) {
        result = units(numberS);
    } else if (numberS.length === 2) {
        result = dozens(numberS);
    } else  if (numberS.length === 3) {
        result = units(numberS[0]) + ' ' + 'hundred' + ' ' + dozens(numberS[1]+numberS[2]);
    } else result = 'zero';
    
    if (result[result.length-1] === ' ') {
        result = result.slice(0, -1);
      }
    return result;
}
function units(params) {
    switch (params) {
        case '0':params = '';break;
        case '1':params = 'one';break;
        case '2':params = 'two';break;
        case '3':params = 'three';break;
        case '4':params = 'four';break;
        case '5':params = 'five';break;
        case '6':params = 'six';break;
        case '7':params = 'seven';break;
        case '8':params = 'eight';break;
        case '9':params = 'nine';break;
      }
    return params;  
}
function dozens(params) {
    if (params[0] === '1') {
        switch (params) {
            case '10':params = 'ten';break;
            case '11':params = 'eleven';break;
            case '12':params = 'twelve';break;
            case '13':params = 'thirteen';break;
            case '14':params = 'fourteen';break;
            case '15':params = 'fifteen';break;
            case '16':params = 'sixteen';break;
            case '17':params = 'seventeen';break;
            case '18':params = 'eighteen';break;
            case '19':params = 'nineteen';break;
    } 
    } else {
        switch (params[0]) {
        case '2':params = 'twenty' + ' ' + units(params[1]);break;
        case '3':params = 'thirty' + ' ' + units(params[1]);break;
        case '4':params = 'forty' + ' ' + units(params[1]);break;
        case '5':params = 'fifty' + ' ' + units(params[1]);break;
        case '6':params = 'sixty' + ' ' + units(params[1]);break;
        case '7':params = 'seventy' + ' ' + units(params[1]);break;
        case '8':params = 'eighty' + ' ' + units(params[1]);break;
        case '9':params = 'ninety' + ' ' + units(params[1]);break;
        }
    }
    return params;  
}
