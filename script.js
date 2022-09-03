var popa = ["А", "Б", "В","Г","Д","Е","Ё","Ж","З","И","Й","К","Л","М","Н","О","П","Р","С","Т","У","Ф","Х","Ц","Ч","Ш","Щ","Ъ","Ы","Ь","Э","Ю", "Я"]
var popasmall = ["а", "б", "в", "г", "д", "е", "ё", "ж","з","и","й","к","л","м","н","о","п","р","с","т","у","ф","х","ц","ч","ш","щ","ъ","ы","ь","э","ю","я"]
let index = "";
let text1 = "";
function myFunction(arg, arg2, arg3) {
    let string = document.getElementById(arg).value
    console.log(string)

    let result = document.getElementById(arg2).innerHTML
    console.log(result)
    
    let sdvig = document.getElementById(arg3).value
    console.log(sdvig)

    for (let i = 0, l = string.length; i < l; i++) {
        let isUpperCase = string[i].toUpperCase()==string[i];
        if(!!isUpperCase == true)
        {
            index = popa.findIndex(x => x === string[i]);
            var proverka = popa.find(x => x === string[i])
            
            if(!proverka)
            {
               text1 += string[i] 
            }
            else {
                if(index + Number(sdvig) > popa.length - 1)
                {
                    text1 += popa[(index + Number(sdvig)) - popa.length];
                }
                else
                {
                    text1 += popa[index + Number(sdvig)];
                }
            }
        }
        else
        {
            index = popasmall.findIndex(x => x === string[i]);
            var proverka = popasmall.find(x => x === string[i])
            if(!proverka)
            {
                text1 += string[i]
            }
            else {
                if(index + Number(sdvig) > popasmall.length - 1)
                {
                    text1 += popasmall[(index + Number(sdvig)) - popasmall.length];
                }
                else
                {
                    text1 += popasmall[index + Number(sdvig)];
                }
            }
        }
    }
    document.getElementById('result').innerHTML = `${text1}`
    text1 = ""
}

function xuy() {
    document.getElementById('result').innerHTML = "Пизда"
}