"use client";
import Anchor from "@/components/common/Anchor";
import Divider from "@/components/common/Divider";
import { Store } from "@/types/Impact/store";
import Image from "next/image";
import { useRouter } from "next/navigation";
import StoreShortInfo from "./ShortInfo";
import "./styles.scss";
import { getFormattedDate } from "@/utils/DateUtils";

type Props = Store & {};

const StoreItem = ({
  DateLastUpdated,
  Id,
  Name,
  NumberOfGroups,
  StoreAvatar,
  StoreBanner,
  StoreUri,
}: Props) => {
  const router = useRouter();

  const handleNavigate = () => {
    router?.push(`/stores/${Id}`);
  };

  return (
    <div key={Id} onClick={handleNavigate} className="store-item-wrapper">
      {/* IMAGE AND INFO */}
      <div className="header">
        <Image src={StoreAvatar} alt="Store Item" width={100} height={50} />

        <div>
          <Divider orientation="vertical" />
        </div>

        {/* COMPAIGN INFO */}
        <div className="info-wrapper">
          {/* COMPAIGN NAME */}
          <h4
            className="subheading truncate"
            style={{ fontSize: 16, width: 150 }}>
            {Name}
          </h4>
          <p className="description">
            Last Updated: {getFormattedDate(DateLastUpdated)}
          </p>

          <Anchor text="Visit Store" fontSize={12} as="link" href={StoreUri} />
        </div>
      </div>

      <Divider />

      {/* ANOTHER */}
      <div className="row">
        <StoreShortInfo content={NumberOfGroups} title="No of Groups" />
        <StoreShortInfo
          content={
            StoreBanner ? (
              <Anchor
                text="View Banner"
                as="link"
                target="_blank"
                fontSize={12}
                href={StoreBanner}
              />
            ) : (
              "-"
            )
          }
          title="Store Banner"
        />
      </div>
    </div>
  );
};

export default StoreItem;
