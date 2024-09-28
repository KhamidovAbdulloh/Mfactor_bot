import type { Context, SessionFlavor } from 'grammy';

export type BotContext = Context & SessionFlavor<SessionData>;

export type Route = {
    menu: any;
    params: Record<string, any>;
  };

export interface User {
    _id: string;
    chat_id: string;
    fullName: string;
    phone_number: string;
    confirmationCode: string;
    confirmed: boolean;
  }

export interface SessionData {
    data: any;
    user: User;
    registration_data?: RegistrationData;
    is_registered?: boolean;
    routes?: Route[];
}

export interface RegistrationData {
  fullName: string;
  phone_number: string;
  created_at?: string;
  updated_at?: string;
  role?: string;
}