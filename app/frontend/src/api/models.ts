export const enum Approaches {
    RetrieveThenRead = "rtr",
    ReadRetrieveRead = "rrr",
    ReadDecomposeAsk = "rda",
    ReadPluginsRetrieve = "rpr"
}

export const enum RetrievalMode {
    Hybrid = "hybrid",
    Vectors = "vectors",
    Text = "text"
}

export const enum ChatgptModel {
    Gpt35 = "gpt-35-turbo-16k",
    Gpt4 = "gpt-4"
}

export const enum Insurance {
    TotalAssist = "total-assist",
    ChoHoken = "cho-hoken",
    Jishin = "jishin",
    EQuick = "e-quick"
}

export type AskRequestOverrides = {
    retrievalMode?: RetrievalMode;
    semanticRanker?: boolean;
    semanticCaptions?: boolean;
    excludeCategory?: string;
    top?: number;
    temperature?: number;
    promptTemplate?: string;
    promptTemplatePrefix?: string;
    promptTemplateSuffix?: string;
    suggestFollowupQuestions?: boolean;
    chatgptModel?: ChatgptModel;
    insurance?: Insurance;
};

export type AskRequest = {
    question: string;
    // approach: Approaches;
    insurance: Insurance,
    overrides?: AskRequestOverrides;
};

export type AskResponse = {
    answer: string;
    thoughts: string | null;
    data_points: string[];
    error?: string;
};

export type ChatTurn = {
    user: string;
    bot?: string;
};

export type ChatRequest = {
    history: ChatTurn[];
    // approach: Approaches;
    insurance: Insurance,
    overrides?: AskRequestOverrides;
    shouldStream?: boolean;
};
