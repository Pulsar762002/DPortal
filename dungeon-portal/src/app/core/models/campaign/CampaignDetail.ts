import {CampaignDetailSection} from "./CampaignDetailSection";

export interface CampaignDetail {
    title: string;
    description: string;

    sections: CampaignDetailSection[];
}