import { IsDefined, IsNotEmpty, IsString } from 'class-validator';

export class CreateInformationWithPathFileRequest {
    @IsString()
    @IsNotEmpty()
    @IsDefined()
    pathFile: string;
}
