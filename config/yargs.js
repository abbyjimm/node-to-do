const description = {
    demand: true,
    alias: 'd',
    desc: 'Description task to do'
}

const completed = {
    demand: true,
    alias: 'c',
    desc: 'mark the task as completed or pending'
}

const argv = require('yargs')
    .command('create', 'Create element to do', {
        description
    })
    .command('update', 'Update status completed of a task to do', {
        description,
        completed
    })
    .command('delete', 'Delete a task by desription', {
        description
    })
    .help()
    .argv;

module.exports = {
    argv
}