// Components
import NotificationPrimary from "@/components/icons/NotificationPrimary";
import NotificationItem from "./NotificationItem";

// Styles
import "./styles.scss";
import SectionWrapper from "../../components/SectionWrapper";
import SectionCardHeading from "../../components/SectionCardHeading";

const NotificationCenter = () => {
  return (
    <SectionWrapper
      xPaddingVal="10px"
      yPaddingVal="10px"
      className="notification-center-wrapper">
      <SectionCardHeading
        headingStyles={{ color: "#ffffff" }}
        icon={<NotificationPrimary />}
        text="Notification Center"
      />
      <div className="content-wrapper">
        <NotificationItem />
        <NotificationItem />
        <NotificationItem />
        <NotificationItem />
        <NotificationItem />
      </div>
    </SectionWrapper>
  );
};

export default NotificationCenter;
