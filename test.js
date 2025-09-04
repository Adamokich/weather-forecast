const people = [
    {
        name: 'Adam',
        city: 'Grozny'
    },
    {
        name: 'Ibra',
        city: 'Grozny'
    },
    {
        name: 'Ivan',
        city: 'Moscow'
    },
    {
        name: 'Anya',
        city: 'Moscow'
    },
    {
        name: 'Valera',
        city: 'Orel'
    },
]

function groupByCity(arr) {
    let result = {};

    for (let item of arr) {
        const {name, city} = item;

        if (!result[city]) {
            result[city] = name;
        } else if (Array.isArray(result[city])) {
            result[city].push(name)
        } else {
            result[city] = [result[city], name]
        }
    }

    return result
}

console.log(groupByCity(people));