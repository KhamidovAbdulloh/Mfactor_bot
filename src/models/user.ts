import * as mongoose from 'mongoose';

const userSchema = new mongoose.Schema(
  {
    chat_id: String,
    fullName: String,
    phone_number: String,
    confirmationCode: String,
    confirmed: { type: Boolean, default: false }

  },
  {
    timestamps: {
      createdAt: 'created_at',
      updatedAt: 'updated_at',
    },
  },
);

export type User = mongoose.InferSchemaType<typeof userSchema>;
export const User = mongoose.model('User', userSchema);
