## Description

Initialize project for knowledge sharing session
- Use langchain only handle with document `Document`, `text_splitter` and `embedding`

## Installation

```bash
$ pnpm i
```

### Run application

```bash
$ pnpm start:dev
```

---

### Project Overview

This project demonstrates integration between NestJS, MongoDB, and vector embeddings for semantic search capabilities. It provides a foundation for building applications that require vector similarity search using MongoDB Atlas.

---

### Prerequisites

Before running this project, make sure you have:

1. Nest.js installed
2. MongoDB Atlas account with Vector Search enabled
3. OpenAI API key
4. pnpm package manager (recommended)


### Features

- MongoDB Atlas Vector Search integration
- OpenAI embeddings generation with lang chain
- Vector similarity search endpoints

### Workshop Topics
1. Converting text to vector embeddings
2. Using dynamic file loaders for embedding generation:
  - Text files (.txt)
  - PDF documents (.pdf)
  - JSON data (.json)
3. Building chat applications with and without Retrieval Augmented Generation (RAG)

---
### Environment Setup

Create a `.env` file in the root directory with the following variables:

```env
OPENAI_API_KEY=your-api-key
MONGO_DB_URL=your-mongo-connection-uri
```
---
### MongoDB with LangChain 
#### _(Note: We'll use Mongoose instead, this is just for reference from langChain)_
- MongoDB collection setup
```ts
const vectorStore = await MongoDBAtlasVectorSearch.fromDocuments(
      splitDocs,
      embeddings,
      {
        collection: mongoClient.db('rag-db').collection('vectors'),
        indexName: 'default', // name of vector index in MongoDB Atlas
      }
);

```
Read more for RAG with lang chaing using mongo db
[LangChain](https://js.langchain.com/docs/tutorials/rag/)

---
### For this session

Example read: 
* src/adpter/outbound/repositories/information/information.repository.mongo.ts

we use `create` method for create content embedding and create document to mon

But in this case we use mongoose to save the vectors by ourselves

### Main Project Structure

```
src
  ├── app.module.ts
  ├── adapter
  │   ├── adapter.module.ts
  │   ├── inbound
  │   │   ├── controllers
  │   │   └── ports
  │   │       └── **/**.dto.ts
  │   └── outbound
  │       └── repositories
  │           ├── core
  │           │  └──openAiEmbedding.repository.ts
  │           └── information
  │               ├── information.repository.mongo.ts
  │               ├── mapper
  │               └── schemas
  ├── application
  │   ├── application.module.ts
  │   ├── ports // interface for adapter
  │   └── usecases
  │       ├── loaders
  │       │    ├── dynamicFileLoader.usecase.ts
  │       │    ├── jsonLoader.usecase.ts
  │       │    ├── pdfLoader.usecase.ts
  │       │    └── txtLoader.usecase.ts
  │       └── splitters
  │            ├── documentSplitter.usecase.ts
  │            └── textSplitter.usecase.ts
  ├── common
  │   ├── enums
  │   ├── files
  │   └── utils
  │     ├── chunker.util.ts
  │     └── cleanText.util.ts
  ├── configs
  └── domain
      └── model
```

### API Endpoints For this work shop
_We will implement the API endpoints in app.controller.ts or you can add more controller ex: information.controller.ts_

```js
POST {{host}}/information/text-content
content-type: application/json

{
    "content": string
}
```

```js
POST {{host}}/information/path-file
content-type: application/json

{
    "pathFile": string
}
```

```js
POST {{host}}/chat-without-rag
content-type: application/json

{
    "message": string
}
```

```js
POST {{host}}/chat-with-rag
content-type: application/json

{
    "message": string
}
```

### Some Trap in project
- Note: `OpenAI's new text-embedding-3-small model provides embeddings with dimensions of 512 or 1536, while the text-embedding-3-large model offers dimensions of 256, 1024, or 3072.`
