const { program } = require('commander')
const randomstring = require('randomstring')

program
    .command('rdstr')
    .description('Generate random string')
    .argument('[length]', 'length of the string', 24)
    .action((length) => {
        console.log(randomstring.generate(parseInt(length)))
    })

program
    .command('build')
    .description('Build electron app on different devices')
    .option('--node <node>', 'Node version')
    .option('--os <os_name>', 'OS name')
    .action((options) => {
        console.log(`--> Building Electron app for OS ${options.os} - Node ${options.node}`)
    })

program.parse(process.argv)