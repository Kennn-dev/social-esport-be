import { forwardRef, Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from '../user/users.module';
import { CategoryResolver } from './category.resolver';
import { CategoryService } from './category.service';
import { Category, CategorySchema } from './models/category.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Category.name, schema: CategorySchema },
    ]),
    forwardRef(() => UserModule),
  ],
  providers: [CategoryResolver, CategoryService],
  exports: [CategoryService, MongooseModule],
})
export class CategoryModule {}
