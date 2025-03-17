const config = require("../config/config.json");
const vers = require("../config/version.json");
const figlet = require('figlet');
const lolcatjs = require('lolcatjs');

module.exports = async (client) => {
    console.clear();

    const chalk = (await import('chalk')).default;

    // Создание баннера
    const banner = figlet.textSync('Southern Department of Justice', {
        font: 'Small',
        horizontalLayout: 'default',
        width: 1000,
        whitespaceBreak: true
    });
    lolcatjs.fromString(banner);

    // Логирование информации о запуске
    console.log(chalk.bold.green('Launched Successfully...'));
    console.log(chalk.magenta('Version:'), chalk.cyan(`${vers.ver}`));
    console.log(chalk.magenta('Made by:'), chalk.cyan('Exzotus'));
    console.log(chalk.magenta('Prefix:'), chalk.cyan(`${config.prefix}\n`));

    // Проверка, что клиент и user определены
    if (client.user) {
        console.log(chalk.green(chalk.bold(`${client.user.username}`), `is online!`));
    } else {
        console.error(chalk.red('Error: Client user is undefined.'));
    }

    console.log(chalk.green(chalk.bold(`Dashboard:`), `http://localhost:` + config.port));
}
