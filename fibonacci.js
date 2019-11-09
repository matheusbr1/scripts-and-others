let sum,data = [0,1]

function fibonacci(data,end) {
    for(i=1; i <= end; i++){
        sum = data[i] + data[i-1]
        data.push(sum)
        console.log("current number: ",data[i]," previus number: ",data[i-1]," fibonacci number: ",sum," execution: ",i)
    }
    console.log(data)
}

fibonacci(data,10)