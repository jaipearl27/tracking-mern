import { TCampaigns } from "../../types";
import CampaignLogo from "./CampaignLogo";
import "./styles.scss";

function CampaignsGrid( programs: TCampaigns) {
    
    return (
        <div className="campaign-grid-wrapper">
            {programs.Campaigns.map((campaign,key) => {
                return (
                    <div key={campaign.CampaignId} className="grid-item">
                        {/* <CampaignLogo CampaignLogoUri={campaign.CampaignLogoUri} showLogo={campaign.AdvertiserName==="Shoebacca"} /> */}
                        <div className="title">{campaign.CampaignName}</div>
                        <div className="advertizer">{campaign.AdvertiserName}</div>
                        <div className="desc">{campaign.CampaignDescription}</div>
                    </div>
                );
            })}
        </div>
    );
}

export default CampaignsGrid;
