// const fetchCampaigns = async () => {
//     try {
//         console.log("fetching");
//         // console.log(await IMPACT_ACTION_EXPORT_CLICK_PARTNERS());
//         console.log(await IMPACT_ACTION_RETRIEVE_CLICK_PARTNERS("xHS1A6RfXxyNWt9QNFU012YBUkCxfFUVqSmPWQ0"));
//         const response = await axios.get('https://api.impact.com/Mediapartners/IRHNMc2jhm2F3293666Q4hLBJG8y2mYpy1/ClickExport', {
//             headers: {
//               'Accept': 'application/json',
//               'Content-Type': 'application/x-www-form-urlencoded'
//             },
//             auth: {
//               username: 'IRHNMc2jhm2F3293666Q4hLBJG8y2mYpy1',
//               password: '4miX_DsXvxmrupVLnkC7.ZBkGLkzgekU'
//             },
//             data: `"ProgramId=19799"&"Date=2024-07-17"`
//             // data:{
//             //     ProgramId:"19799",
//             //     Date:"2024-07-17",
//             //     ResultFormat:"JSON"
//             // }
//           });
//           console.log(response,"response")
//         //   const downloadUri=response.data.ResultUri.split("/Download")
//         //   console.log(downloadUri[0],"dwoonalod uri")
//         //   console.log(await IMPACT_ACTION_JOB_FETCH(downloadUri[0]),"Job")
//         //   const resk=await IMPACT_ACTION_JOB_DOWNLOAD(downloadUri+"/Download");
//           const resk=await IMPACT_ACTION_JOB_REPLAY(response.data.ReplayUri);
//           console.log(resk,"resk")

//         const res: TCampaigns | null = await IMPACT_ACTION_CAMPAIGNS_GET();
//         if (res === null) {
//             throw new Error("Unable to fetch programs");
//         }
//         setPrograms(res);
//         setIsLoading(false);
//         // console.log(res?.Campaigns.filter((name)=>name.CampaignName==="TeckWrapCraft Affiliate Program"), "-=-=-=-=-=-");
//     } catch (error) {
//         setIsLoading(false);
//         console.log(error);
//     }
// };
