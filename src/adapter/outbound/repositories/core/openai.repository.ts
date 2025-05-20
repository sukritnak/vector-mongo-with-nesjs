import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { OpenAI } from 'openai';

import { ISimpleResultInput, LLMAiRepository } from '../../../../application/ports/core/llmAi.repository';
import { ConfigToken } from '../../../../configs/config.interface';

@Injectable()
export class OpenAiRepository implements LLMAiRepository {
    constructor(private readonly configService: ConfigService) {}

    /**
     * Get a simple result from OpenAI
     * @description Just only simple result (for others feature like `tools` or `function calling` read more https://platform.openai.com/docs/overview)
     */
    public async getSimpleResult(input: ISimpleResultInput): Promise<string> {
        const openaiApiKey = this.configService.get<string>(ConfigToken.openaiApiKey);
        const openai = new OpenAI({
            apiKey: openaiApiKey,
        });

        const result = await openai.chat.completions.create({
            model: input.model,
            messages: [
                {
                    role: 'system',
                    content: [
                        {
                            type: 'text',
                            text: input.systemPrompt,
                        },
                    ],
                },
                { role: 'user', content: input.userInput },
            ],
            temperature: 0.5,
            max_completion_tokens: 8192,
        });

        return result.choices[0].message.content;
    }
}
