const data = {
    component: [],
    add : (value) => {
        data.component.push({value:value})
        console.log(value+' inserido.')
        console.log(data.component)
    },
    del : (value) => {
        data.component.splice(data.component.indexOf(value), 1);
        console.log(data.component)
    }
}

data.add('teste')
data.del('teste')