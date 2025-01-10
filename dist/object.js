import * as fs from 'fs';
const readData = (filePath) => {
    const data = fs.readFileSync(filePath, 'utf-8');
    return JSON.parse(data);
};
const filterUsers = (users, filters) => {
    const queryParts = [];
    for (const key in filters) {
        if (filters.hasOwnProperty(key)) {
            const value = filters[key];
            queryParts.push(key, "=" ,value);
        }
    }
    const queryString = queryParts.length > 0 ? `WHERE ${queryParts.join(' AND ')}` : '';
    console.log(`Filter: ${queryString}`);
    return users.filter(user => {
        for (const i in filters) {
            if (filters.hasOwnProperty(i)) {
                const value = filters[i];
                if (i === 'name') {
                    if (!user[i].toString().toLowerCase().includes(value.toLowerCase())) {
                        return false;
                    }
                }
                else {
                    if (user[i] !== value) {
                        return false;
                    }
                }
            }
        }
        return true;
    });
};
// exemples
const usersRam = [
    {
        name: "pop",
        age: 29
    },
    {
        name: "John",
        age: 36
    }
];
const usersFromJson = readData('src/data.json');
const result = filterUsers(usersFromJson, { name: "John", age: 36 });
const result1 = filterUsers(usersRam, { name: "John" });
console.log("Ram user(s):", result1);
console.log("Json user(s):", result);
