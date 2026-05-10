import {StoryBlock} from "../../core/models/story-block.model";

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

    blocks: StoryBlock[];
}

