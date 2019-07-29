const argv = require('./config/yargs').argv;
const toDo = require('./to-do/to-do');

console.log(argv);

let command = argv._[0];

switch (command) {
    case 'create':
        let task = toDo.create(argv.description);
        console.log(task);
        break;

    case 'list':
        let list = toDo.getList();

        for (let task of list) {
            console.log('========TO DO========='.green);
            console.log(task.description);
            console.log('status:', task.completed);
            console.log('======================'.green);
        }
        break;

    case 'update':
        let updated = toDo.update(argv.description, argv.completed)
        console.log(updated);
        break;

    case 'delete':
        let deleted = toDo.deleteD(argv.description)
        console.log(deleted);
        break;
    default:
        console.log('Command does not be recognized');
}