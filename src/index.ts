import {Telegraf} from "telegraf";
import {message} from "telegraf/filters";
import {InlineQueryResult} from "telegraf/typings/core/types/typegram";
import {commandChecker} from "./middlewares/commandChecker";
import tokenJson from '../token.json';

const token = tokenJson.token;

export const bot: Telegraf = new Telegraf(token);

bot.command('quit', async (ctx) => {
    // Explicit usage
    await ctx.telegram.leaveChat(ctx.message.chat.id);
});

bot.on(message('text'), async (ctx) => {

    // await ctx.telegram.sendMessage(ctx.message.chat.id, 'Hello World');
    console.log(ctx.message.text)
    commandChecker(ctx);
});

bot.on('callback_query', async (ctx) => {
    // Explicit usage
    await ctx.telegram.answerCbQuery(ctx.callbackQuery.id);
});

bot.on('inline_query', async (ctx) => {
    const result: readonly InlineQueryResult[] = [];
    // Explicit usage
    await ctx.telegram.answerInlineQuery(ctx.inlineQuery.id, result);
});

bot.launch();

// Enable graceful stop
process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM'));
