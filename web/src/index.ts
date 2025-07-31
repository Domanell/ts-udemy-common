import { User } from './models/User';

const user = new User({ name: "John", age: 20 });

user.set({ age: 55 });
console.log(user.get('age'));

user.on('change', () => { console.log('change'); })
user.on('change', () => { console.log('change 2'); })

user.trigger('change')

console.log(user);