import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { compareSync, hash } from 'bcrypt';
import { Schema as MongooseSchema } from 'mongoose';
import { HASH } from 'src/constants/hash';

export type UserDocument = User & Document;
@Schema({ timestamps: true })
export class User {
  _id: MongooseSchema.Types.ObjectId;

  @Prop({ default: null })
  lastName: string;

  @Prop({ default: null })
  firstName: string;

  @Prop({ required: true })
  email: string;

  @Prop()
  password: string;

  @Prop({ default: null })
  avatar: string;

  @Prop({ default: null })
  backgroundImage: string;

  @Prop({ default: 0 })
  role: number;

  @Prop({ default: null })
  facebookId: string;

  @Prop({ default: null })
  googleId: string;
}

export const UserSchema = SchemaFactory.createForClass(User);

UserSchema.pre<any>('save', function (next) {
  // eslint-disable-next-line @typescript-eslint/no-this-alias
  const user = this;
  // only hash the password if it has been modified (or is new)

  if (!user.isModified('password')) return next();
  // generate a salt

  if (user.facebookId) return next();
  if (user.googleId) return next();

  // Generate Avatar by default
  if (!user.avatar) {
    user.avatar = `https://source.boringavatars.com/beam/120/${
      user.firstName + user.lastName
    }?colors=ff4e0d,2a9d8f,e9c46a,0d52ff,001feb`;
    next();
  }
  hash(user.password, HASH.SALTROUNDS, function (err, hash) {
    console.log(err);
    if (err) return next(err);
    // override the cleartext password with the hashed one
    user.password = hash;

    next();
  });
});

UserSchema.methods.comparePassword = function (
  incomingPassword: string,
): boolean {
  // eslint-disable-next-line @typescript-eslint/no-this-alias
  const user = this;
  if (!user.password && (user.facebookId || user.googleId)) return true;
  return compareSync(incomingPassword, user.password);
};
