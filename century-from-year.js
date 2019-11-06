year = 45, century = year/100, resto = century % 1;
if (resto > 0){
    century = Math.ceil(century)
}
console.log("Ano:", year, "século:", century)