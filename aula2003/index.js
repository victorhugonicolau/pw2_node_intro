const inquirer = require('inquirer')
const chalk = require('chalk')
const fs = require('fs')

operation();

function operation() {
    inquirer.prompt([
    {
        type: 'list',
        name: 'action',
        message: 'O que vocÃª deseja fazer?!',
        choices:[
            'Criar a conta',
            'Consultar o saldo',
            'Depositar',
            'Sacar',
            'Sair'
        ]
    }

    ]).then((answer) => {
        const action = answer['action']

        if (action === 'Criar a conta') {
            createAccount()
        } else if (action === 'Consultar o saldo') {
            getAccountBalance()
        } else if (action === 'Depositar') {
            deposit()
        } else if (action === 'Sacar') {
            withdraw()
        }else if (action === 'Sair') {
            console.log(chalk.bgBlue.black('Obrigado por usar o Accounts Node'))
            process.exit()
        }
    })
}

const inquirer = require('inquirer')
const chalk = require('chalk')
const fs = require('fs')

const inquirer = require('inquirer')
const chalk = require('chalk')
const fs = require('fs')

operation();

function operation() {
    inquirer.prompt([
    {
        type: 'list',
        name: 'action',
        message: 'O que vocÃª deseja fazer?!',
        choices:[
            'Criar a conta',
            'Consultar o saldo',
            'Depositar',
            'Sacar',
            'Sair'
        ]
    }

    ]).then((answer) => {
        const action = answer['action']

        if (action === 'Criar a conta') {
            createAccount()
        } else if (action === 'Consultar o saldo') {
            getAccountBalance()
        } else if (action === 'Depositar') {
            deposit()
        } else if (action === 'Sacar') {
            withdraw()
        }else if (action === 'Sair') {
            console.log(chalk.bgBlue.black('Obrigado por usar o Accounts Node'))
            process.exit()
        }
    })
}

function createAccount() {
    console.log(chalk.bgGreen.white('Obrigado pro utilizar o Account Node Bank!'))
    console.log(chalk.green('Vamos criar sua conta agora...'))

    buildAccount()
}

function buildAccount(){
    inquirer.prompt([
        {
            name:'accountName',
            message: 'Entre com o nome da sua conta: ',
        }
    ]).then((answer) => {
        const accountName = answer ['accountName']
        // aqui estamos fazendo tipo um try cath só que a mão, devolvendo repostas dependendo do erro que ocorrer
        // 1 - não colocar o nome, 2 - para criar uma conta se não tiver, 3 - conta já existente
        // por ultimo finalmento a criação da conta no fs write
        //  no final tem parabenização com mensagens por ter criado a conta 
        if(accountName === ""){
            console.error('Não é permitido contas com nome vazio')
            operation()
        }

        if(!fs.existsSync('accounts')) {
            fs.mkdirSync('accounts')
        }

        if(fs.existsSync(`account/${accountName}.json`)) {
            console.error(chalk.bgRed.black(`A conta ${accountName} Já existe!`))
            console.error(chalk.red('Escolha outro nome: '))

            buildAccount(accountName)
        }

        fs.writeFileSync(
            `acounts/${accountName}.json`,
            `{"balance":0}`,
            function(err){
                console.error(err)
            }
        )
        console.info(chalk.bgGreen.write(`Sua conta ${accountName} foi criada, parabéns!!!`))
        console.log(chalk.green('Pode começar a opera-lá'))

        operation()
    })
}
