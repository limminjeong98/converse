const category = [
    {
        "_id": 1,
        "name": "Outer"
    },
    {
        "_id": 2,
        "name": "Top"
    },
    {
        "_id": 3,
        "name": "Bottom"
    },
   

]

const price = [
    {
        "_id": 0,
        "name": "All",
        "array": []
    },
    {
        "_id": 1,
        "name": "10000 ~ 20000",
        "array": [10000, 19999]
    },
    {
        "_id": 2,
        "name": "20000 ~ 50000",
        "array": [20000, 49999]
    },
    {
        "_id": 3,
        "name": "50000 ~ 100000",
        "array": [50000, 99999]
    },
    {
        "_id": 4,
        "name": "More than 100000",
        "array": [100000, 150000000]
    },
]




export {
    category,
    price
}
