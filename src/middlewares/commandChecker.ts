export const commandChecker = (ctx: any) => {
    const command: string = ctx.message.text;
    console.log(command)
    if (command === '/start') {
        ctx.telegram.sendMessage(ctx.message.chat.id, 'Welcome loser');
    } else if (command === '/help') {
        console.log("Ici")
        ctx.telegram.sendMessage(ctx.message.chat.id, 'Bolosse');
    }
}