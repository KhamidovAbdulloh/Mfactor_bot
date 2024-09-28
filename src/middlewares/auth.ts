import type { NextFunction } from 'grammy';
import type { BotContext } from '../types';
// import { getUser } from '../services/api';

const auth = async (ctx: BotContext, next: NextFunction) => {
  /*if (!ctx.session.user && ctx.from) {
    try {
    //   const query = await getUser(ctx.from.id);

    //   if (query && query.data) {
    //     const user = query.data;

    //     ctx.session.user = user;
    //     ctx.session.is_registered = true;
    //   }
    } catch (error) {}
  }

  await next();*/
};

export default auth;
