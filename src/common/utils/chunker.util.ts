import { RecursiveCharacterTextSplitter } from 'langchain/text_splitter';

export const CHUNKER = new RecursiveCharacterTextSplitter({
    chunkSize: 1800, // Max characters per chunk
    chunkOverlap: 200, // Overlapping characters between chunks for context
    separators: ['\n\n'], // Prefer splitting at double newlines (paragraphs)
});
