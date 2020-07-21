Array.prototype.remove = function() {
    var what, a = arguments, L = a.length, ax
    while (L && this.length) {
        what = a[--L]
        while ((ax = this.indexOf(what)) !== -1) {
            this.splice(ax, 1)
        }
    }
    return this;
}

const roots = {
    rootNewList : [1,2,3,5,6,7,8,10,11], // Adicione aqui a lista de root
    Incorrects : [2,3,7,10] // Adicione aqui os roots que serão removidos
}

const verify = () => {
    for (i=0; i<roots.Incorrects.length; i++){
        e = roots.Incorrects[i]
        if (roots.rootNewList.find(found => found == e)){
            roots.rootNewList.remove(e)
        }
    }
}

verify()
console.log(roots.rootNewList)