import * as fs from 'fs';

type User = {
  name: string;
  age: number;
};

type Filters = Partial<User>;

const readData = (filePath: string): User[] => {
  const data = fs.readFileSync(filePath, 'utf-8');
  return JSON.parse(data) as User[];
};

const filterUsers = (users: User[], filters: Filters): User[] => {
    const queryParts: string[] = [];
    for (const key in filters) {
        if (filters.hasOwnProperty(key)) {
        const value = filters[key as keyof Filters];
        queryParts.push(`"${key}" = "${value}"`);
        }
    }
    const queryString = queryParts.length > 0 ? `WHERE ${queryParts.join(' AND ')}` : '';
    console.log(`Filter: ${queryString}`);
  return users.filter(user => {
    for (const i in filters) {
        
      if (filters.hasOwnProperty(i)) {
        const value = filters[i as keyof Filters];
        if (i === 'name') {
          if (!user[i as keyof User].toString().toLowerCase().includes((value as string).toLowerCase())) {
            return false;
          }
        } else {
          if (user[i as keyof User] !== value) {
            return false;
          }
        }
      }
    }
    return true;
  });
};

// exemples
const usersRam: User[] = [
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
