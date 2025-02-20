import { Columns } from "@/components/common/TableV2";

export const partnerCreativeColumns: Columns<any> = [
  // {
  //   dataIndex: "campaignName",
  //   id: "campaignName",
  //   title: "Campaign Name",
  // },
  {
    dataIndex: "campaignId",
    id: "campaignId",
    title: "Campaign Id",
  },
  {
    dataIndex: "banner",
    id: "banner",
    title: "Banner",
  },
  {
    dataIndex: "textLink",
    id: "textLink",
    title: "Text Link",
  },
  {
    dataIndex: "feed",
    id: "feed",
    title: "Feed",
  },
  {
    dataIndex: "html",
    id: "html",
    title: "HTML",
  },
  {
    dataIndex: "htmlForm",
    id: "htmlForm",
    title: "HTML Form",
  },
  {
    dataIndex: "email",
    id: "email",
    title: "Email",
  },
];

export const partnerCampaignCreativeColumns: Columns<any> = [
  {
    dataIndex: "creative_id",
    id: "creative_id",
    title: "Creative ID",
  },
  {
    dataIndex: "campaign_id",
    id: "campaign_id",
    title: "Campaign ID",
  },
  {
    dataIndex: "description",
    id: "description",
    title: "Description",
  },
  {
    dataIndex: "preview",
    id: "preview",
    title: "Preview",
    render: (preview: string) => (
      <img src={preview} alt="Creative Preview" width={100} height={100} />
    ), // Render preview image
  },
  {
    dataIndex: "height",
    id: "height",
    title: "Height",
  },
  {
    dataIndex: "width",
    id: "width",
    title: "Width",
  },
  {
    dataIndex: "active",
    id: "active",
    title: "Active",
    render: (active: string) => (active === "y" ? "Yes" : "No"), // Render "Yes" or "No" based on active status
  },
  {
    dataIndex: "start_date_time",
    id: "start_date_time",
    title: "Start Date",
    render: (start_date_time: string) =>
      start_date_time ? new Date(start_date_time).toLocaleString() : "-", // Format date
  },
  {
    dataIndex: "end_date_time",
    id: "end_date_time",
    title: "End Date",
    render: (end_date_time: string) =>
      end_date_time ? new Date(end_date_time).toLocaleString() : "-", // Format date
  },
  {
    dataIndex: "creative_tracking_link",
    id: "creative_tracking_link",
    title: "Tracking Link",
    render: (link: string) => (
      <a href={link} target="_blank" rel="noopener noreferrer">
        View Tracking Link
      </a>
    ), // Provide clickable link
  },
  {
    dataIndex: "html_tracking_link",
    id: "html_tracking_link",
    title: "HTML Tracking Link",
    render: (link: string) => (
      <a href={link} target="_blank" rel="noopener noreferrer">
        View HTML Tracking Link
      </a>
    ), // Provide clickable link
  },
  {
    dataIndex: "dynamic_tracking_link",
    id: "dynamic_tracking_link",
    title: "Dynamic Tracking Link",
    render: (link: string) => (
      <a href={link} target="_blank" rel="noopener noreferrer">
        View Dynamic Link
      </a>
    ), // Provide clickable link
  },
  {
    dataIndex: "tags",
    id: "tags",
    title: "Tags",
    render: (tags: string[]) => (tags.length > 0 ? tags.join(", ") : "-"), // Display tags if available
  },
  // {
  //   dataIndex: "creative_items",
  //   id: "creative_items",
  //   title: "Creative Items",
  //   render: (creative_items: any[]) => (
  //     // <ul>
  //     //   {creative_items.map((item) => (
  //     //     <li key={item.creative_item_id}>
  //     //       <a href={item.img_url} target="_blank" rel="noopener noreferrer">
  //     //         <img
  //     //           src={item.img_url}
  //     //           alt={item.filename}
  //     //           width={50}
  //     //           height={50}
  //     //         />{" "}
  //     //         {item.filename}
  //     //       </a>
  //     //     </li>
  //     //   ))}
  //     // </ul>
  //     <>kj</>
  //   ), // Display list of creative items with image and filename
  // },
];
