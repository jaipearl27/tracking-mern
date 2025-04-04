// Components
import { CompaignListing as TCompaignListing } from "@/types/Impact/compaigns";
import CompaignItem from "../../../components/CompaignItem";

// Data
// import { compaignData } from "../../../data";

// Styles
import "./styles.scss";

const CompaignListing = ({ data, mediaProperties, users }: { data: TCompaignListing["Campaigns"], mediaProperties: any, users: any }) => {

  return (
    <div className="campaign-list-wrapper">
      {(data || [])?.map((item) => {
        return (
          <CompaignItem
            AdvertiserId={item?.AdvertiserId}
            AdvertiserName={item?.AdvertiserName}
            AdvertiserUrl={item.AdvertiserUrl}
            AllowsDeeplinking={item.AllowsDeeplinking}
            CampaignDescription={item.CampaignDescription}
            CampaignId={item.CampaignId}
            CampaignLogoUri={item.CampaignLogoUri}
            CampaignName={item.CampaignName}
            CampaignUrl={item.CampaignUrl}
            ContractStatus={item.ContractStatus}
            ContractUri={item.ContractUri}
            DeeplinkDomains={item.DeeplinkDomains}
            PublicTermsUri={item.PublicTermsUri}
            ShippingRegions={item.ShippingRegions}
            TrackingLink={item.TrackingLink}
            Uri={item.Uri}
            key={item.CampaignId}
            mediaProperties={mediaProperties}
            users={users}
          />
        );
      })}
    </div>
  );
};

export default CompaignListing;
