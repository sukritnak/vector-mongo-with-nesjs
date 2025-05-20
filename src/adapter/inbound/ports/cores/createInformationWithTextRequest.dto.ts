import { IsDefined, IsNotEmpty, IsString } from 'class-validator';

export class CreateInformationWithTextRequest {
    @IsString()
    @IsNotEmpty()
    @IsDefined()
    content: string;
}
