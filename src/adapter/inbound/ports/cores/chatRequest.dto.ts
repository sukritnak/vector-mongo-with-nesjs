import { IsDefined, IsNotEmpty, IsString } from 'class-validator';

export class ChatRequest {
    @IsString()
    @IsNotEmpty()
    @IsDefined()
    message: string;
}
