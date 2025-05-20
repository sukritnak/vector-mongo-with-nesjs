import { OpenAiModelType } from '../../../common/enums/openaiModel';

export interface ISimpleResultInput {
    model: OpenAiModelType;
    systemPrompt: string;
    userInput: string;
}

export interface LLMAiRepository {
    getSimpleResult(input: ISimpleResultInput): Promise<string>;
}
