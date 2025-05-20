import { ChatUsecase } from './chat.usecase';
import { CreateInformationFromPathFileUsecase } from './createInformationFromPathFile.usecase';
import { CreateInformationFromTextUsecase } from './createInformationFromText.usecase';

export const AllCoresUsecases = [ChatUsecase, CreateInformationFromTextUsecase, CreateInformationFromPathFileUsecase];
