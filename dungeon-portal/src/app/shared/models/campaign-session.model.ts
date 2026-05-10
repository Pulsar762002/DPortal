export interface CampaignSession {
    id: number;
    title: string;
    videoId?: string;

    chapters: CampaignChapter[];
}

export interface CampaignChapter {
    id: string;
    title: string;
    videoId?: string;

    blocks: CampaignBlock[];
}

export interface CampaignBlock {
    type: string;
    variant?: string;
    text?: string;
    src?: string;
    alt?: string;
}