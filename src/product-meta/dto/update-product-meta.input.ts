import { CreateProductMetaInput } from './create-product-meta.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateProductMetaInput extends PartialType(CreateProductMetaInput) {
  @Field(() => Int)
  id: number;
}
