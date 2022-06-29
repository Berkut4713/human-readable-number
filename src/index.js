module.exports = function toReadable (number) {
    let result = '';

    return units(number);
}
function units(params) {
    switch (params) {
        case 1:params = 'one';break;
        case 2:params = 'two';break;
        case 3:params = 'three';break;
        case 4:params = 'four';break;
        case 5:params = 'five';break;
        case 6:params = 'six';break;
        case 7:params = 'seven';break;
        case 8:params = 'eight';break;
        case 9:params = 'nine';break;
        default:params = "Нет таких значений";
      }
    return params;  
}
