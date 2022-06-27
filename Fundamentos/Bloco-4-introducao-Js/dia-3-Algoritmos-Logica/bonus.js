// 1 
let n = 3;
let linha = "";


for ( let index = 1 ; index <= n; index +=1) {
    linha = linha + "*"
}



for ( let index = 1; index <= n; index += 1) {
    for (let index2 = 1; index2 < n; index2 += 1 ) {
        console.log(linha)
    }
    
};

// 2 
let s = 5 ;
let simbolo = "*";
let line = "";

for (let index = 0; index <= s; index += 1) {
    console.log (line);
    line = line + simbolo; 
};