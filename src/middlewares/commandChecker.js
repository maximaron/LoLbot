"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.commandChecker = void 0;
const commandChecker = (ctx) => {
    const command = ctx.message.text;
    console.log(command);
    if (command === '/start') {
        ctx.telegram.sendMessage(ctx.message.chat.id, 'Welcome loser');
    }
    else if (command === '/help') {
        console.log("Ici");
        ctx.telegram.sendMessage(ctx.message.chat.id, 'Bolosse');
    }
};
exports.commandChecker = commandChecker;
