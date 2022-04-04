let data = [
  {
    id: "b48646de-d142-4106-951b-beaee3281ed4",
    subItems: [
      { 
        id: "b48646de-d142-4106-951b-beaee3281ed4.b8d99d74-0540-4402-9aad-2afcca9d6546", 
        subItems: []
      },
      {
        id: "b48646de-d142-4106-951b-beaee3281ed4.fa2e92fa-4540-43d9-9c52-1fa20db92b8f",
        subItems: [
          {
            id: "b48646de-d142-4106-951b-beaee3281ed4.fa2e92fa-4540-43d9-9c52-1fa20db92b8f.fa2e92fa-4540-43d9-9c52-1fa20db92b8f1",
            subItems: []
          },
          {
            id: "b48646de-d142-4106-951b-beaee3281ed4.fa2e92fa-4540-43d9-9c52-1fa20db92b8f.321312321321",
            subItems: []
          }
        ]
      }
    ]
  }
]

const targetId = 'b48646de-d142-4106-951b-beaee3281ed4.fa2e92fa-4540-43d9-9c52-1fa20db92b8f.fa2e92fa-4540-43d9-9c52-1fa20db92b8f1'

function getIds(id) {
  const separator = '.'
  const eachId = id.split(separator)
  const ids = []

  eachId.reduce((acc, item) => {
    const id = !acc ? item : `${acc}${separator}${item}`
    ids.push(id)
    return id
  }, '')

  return ids
}

let path = 'data'

function removeRecursively(data, id, level = 0) {
  const filtered = data.filter(d => d.id !== id)

  if (filtered.length === data.length) {
    const ids = getIds(id)
    const index = data.findIndex(item => item.id === ids[level])
    const subItem = data[index]

    if (Array.isArray(subItem.subItems)) {
      return removeRecursively(subItem.subItems, id, level + 1)
    }
  } else {
    return filtered
  }
}

console.log(removeRecursively(data, targetId))
