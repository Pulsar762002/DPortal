import {CampaignDetailItem} from "./CampaignDetailItem";

export interface CampaignDetailSection {
    title: string;
    type: 'sessions' | 'links';

    items: CampaignDetailItem[];
}