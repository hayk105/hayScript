const scripts = document.querySelectorAll('script[language="hayScript"]');
scripts.forEach((el) => {
    console.log(convert(el.innerHTML))
    return eval(convert(el.innerHTML));
})

function convert(text){
    if(text.indexOf('ստեղծելՏ') != -1){
        text = text.replaceAll('ստեղծելՏ', 'let')
    }
    if(text.indexOf('ստեղծելԳ') != -1){
        text = text.replaceAll('ստեղծելԳ', 'var')
    }
    if(text.indexOf('բացել') != -1){
        text = text.replaceAll('բացել', '{')
    }
    if(text.indexOf('փակել') != -1){
        text = text.replaceAll('փակել', '}')
    }
    if(text.indexOf('վերջ') != -1){
        text = text.replaceAll('վերջ', ';')
    }
    if(text.indexOf('եթե') != -1){
        text = text.replaceAll('եթե', 'if')
    }
    if(text.indexOf('չէ') != -1){
        text = text.replaceAll('չէ', '!')
    }
    if(text.indexOf('հավասարՍ') != -1){
        text = text.replaceAll('հավասարՍ', '==')
    }
    if(text.indexOf('հավասար') != -1){
        text = text.replaceAll('հավասար', '=')
    }
    if(text.indexOf('հուշել') != -1){
        text = text.replaceAll('հուշել', 'console')
    }
    if(text.indexOf('գրել') != -1){
        text = text.replaceAll('գրել', 'log')
    }
    if(text.indexOf('սխալ') != -1){
        text = text.replaceAll('սխալ', 'error')
    }
    if(text.indexOf('զգուշացում') != -1){
        text = text.replaceAll('զգուշացում', 'warn')
    }
    if(text.indexOf('տեղեկատվություն') != -1){
        text = text.replaceAll('տեղեկատվություն', 'info')
    }
    if(text.indexOf('մաքրել') != -1){
        text = text.replaceAll('մաքրել', 'clear')
    }
    return text;
}