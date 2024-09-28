/*import axios from 'axios';
import { RegistrationData, User } from '../types';

export const getUser = async (id: number) => {
  const { data } = await axios.get(`${API_BASE_URL}/users/${id}`);

  return data;
};

export const createUser = async (chat_id: string, body: Partial<User>) => {
  const { data } = await axios.post(`${API_BASE_URL}/users`, {
    ...body,
    chat_id,
  });

  return data.data;
};

export const updateUser = async (chat_id: string, body: Partial<User>) => {
  const { data } = await axios.patch<{ data: User }>(
    `${API_BASE_URL}/users/${chat_id}`,
    body,
  );

  return data.data;
};

export const saveUser = async (
  user: User,
  chat_id: string,
  data: RegistrationData,
) => {
  const body = {
    fullName: data.fio,
    phone_number: data.phone,
    };

  return user
    ? await updateUser(chat_id, body)
    : await createUser(chat_id, body);
};
};*/