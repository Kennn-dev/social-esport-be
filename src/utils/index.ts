import mongoose from 'mongoose';
export function toObjectId(id: string | number): mongoose.Types.ObjectId {
  return new mongoose.Types.ObjectId(id);
}
