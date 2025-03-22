import Anchor from "@/components/common/Anchor";
import Container from "@/components/common/Container";
import Divider from "@/components/common/Divider";
import Heading from "@/components/common/Heading";
import InfoGroup from "@/components/common/InfoGroup";
import InfoItem from "@/components/common/InfoItem";
import { IMPACT_ACTION_GET_SPECIFIC_DEAL } from "@/utils/Providers/Impact/API";
import ViewCategoryModal from "./_components/ViewCategoryModal";
import MaxWidth from "@/components/common/MaxWidth";

const SpecificDealPage = async (p: any) => {
  const data = await IMPACT_ACTION_GET_SPECIFIC_DEAL({
    campaignId: p?.params?.programId,
    dealId: p?.params?.dealId,
  });

  // console.log(data, "DEAL____DATA____");

  return (
    <MaxWidth width={1200}>
      <Heading mb={15} text="Deal Overview" />
      <Divider mb={15} />

      <InfoItem title="Name" value={data?.Name} />
      <InfoItem title="Description" value={data?.Description} />
      <InfoItem title="Is Public" value={data?.Public ? "Yes" : "No"} />
      <InfoItem
        title="Campaign Details"
        value={
          <Anchor
            text="View"
            as="link"
            href={`/impact/programs/${data?.CampaignId}`}
          />
        }
      />
      <InfoItem title="Deal State" value={data?.State} />
      <InfoItem title="Deal Type" value={data?.Type} />
      <InfoItem title="Deal Scope" value={data?.Scope} />
      {/* Products krna hai */}
      {/* category krna hai */}
      <InfoItem title="Gift" value={data?.Gift} />
      <InfoItem title="Rebate Amount" value={data?.RebateAmount} />
      <InfoItem title="Rebate Currency" value={data?.RebateCurrency} />
      <InfoItem title="Default Promo Code" value={data?.DefaultPromoCode} />
      <InfoItem
        title="Purchase Limit Quantity"
        value={data?.PurchaseLimitQuantity}
      />
      <InfoItem
        title="Start Date"
        value={
          data?.StartDate && new Date(data?.StartDate)?.toLocaleDateString()
        }
      />
      <InfoItem
        title="End Date"
        value={data?.EndDate && new Date(data?.EndDate)?.toLocaleDateString()}
      />
      <InfoItem
        title="Date Created"
        value={
          data?.DateCreated && new Date(data?.DateCreated)?.toLocaleDateString()
        }
      />
      {data?.Categories?.length && (
        <InfoItem
          title="View Categories"
          value={<ViewCategoryModal data={data?.Categories} />}
        />
      )}
      <InfoItem
        mb={40}
        title="Date Recent Updated"
        includeDivider={false}
        value={
          data?.DateLastUpdated &&
          new Date(data?.DateLastUpdated)?.toLocaleDateString()
        }
      />
      <Divider mb={15} />

      {/* PURCHASE */}
      <InfoGroup heading="Purchase">
        <InfoItem title="Minimum Amount" value={data?.MinimumPurchaseAmount} />
        <InfoItem
          title="Minimum Amount Currency"
          value={data?.MinimumPurchaseAmountCurrency}
        />
      </InfoGroup>

      {/* SAVING */}
      <InfoGroup heading="Saving">
        <InfoItem title="Max Amount" value={data?.MaximumSavingsAmount} />
        <InfoItem title="Max Currency" value={data?.MaximumSavingsCurrency} />
      </InfoGroup>

      {/* DISCOUNT */}
      <InfoGroup heading="Discount Details">
        <InfoItem title="Type" value={data?.DiscountType} />
        <InfoItem title="Amount" value={data?.DiscountAmount} />
        <InfoItem title="Currency" value={data?.DiscountCurrency} />
        <InfoItem title="Percentage" value={data?.DiscountCurrency} />
        <InfoItem title="Max Percentage" value={data?.DiscountMaximumPercent} />
        <InfoItem
          title="Percentage Range Start"
          value={data?.DiscountPercentRangeStart}
        />
        <InfoItem
          title="Percentage Range End"
          value={data?.DiscountPercentRangeEnd}
        />
      </InfoGroup>

      {/* Bogo Buy Info */}
      <InfoGroup heading="Bogo Buy Details">
        <InfoItem title="Name" value={data?.BogoBuyName} />
        <InfoItem title="Image Url" value={data?.BogoBuyImageUrl} />
        <InfoItem title="Quantity" value={data?.BogoBuyQuantity} />
        <InfoItem title="Scope" value={data?.BogoBuyScope} />
      </InfoGroup>

      {/* Bogo Get Details */}
      <InfoGroup heading="Bogo Get Details">
        <InfoItem title="Quantity" value={data?.BogoGetQuantity} />
        <InfoItem title="Scope" value={data?.BogoGetScope} />
        <InfoItem title="Discount Type" value={data?.BogoGetDiscountType} />
        <InfoItem title="Discount Amount" value={data?.BogoGetDiscountAmount} />
        <InfoItem
          title="Discount Percent"
          value={data?.BogoGetDiscountPercent}
        />
        <InfoItem
          title="Discount Currency"
          value={data?.BogoGetDiscountCurrency}
        />
        <InfoItem title="Name" value={data?.BogoGetName} />
        <InfoItem title="Image Url" value={data?.BogoGetImageUrl} />
      </InfoGroup>
    </MaxWidth>
  );
};

export default SpecificDealPage;
