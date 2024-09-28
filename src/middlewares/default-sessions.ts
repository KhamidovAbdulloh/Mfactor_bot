import type { NextFunction } from 'grammy';
import type { BotContext } from '../types';

const default_sessions = async (ctx: BotContext, next: NextFunction) => {
/*
  if (!ctx.session.routes) {
    ctx.session.routes = [];
  }
  await next();*/
};

export default default_sessions;
