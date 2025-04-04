"use client";
import React, { useEffect, useState } from "react";
import CompaignShortInfo from "../../ShortInfo";
import Anchor from "@/components/common/Anchor";
import { useToggleBoolean } from "@/hooks/useToggleBoolean";
import Modal from "@/components/common/Modal";
import { IMPACT_ACTION_CREATE_CLICK_POST, IMPACT_ACTION_LIST_MEDIA_PROPERTIES } from "@/utils/Providers/Impact/API";
import { createImpactAssignment, createTrackingLink, getAssignmentsByTrackingLinkID, getTotalClicksAsPerProgramId, getTrackingLinkByProgramId } from "@/utils/Providers/API_V1/API";
import useSWR from "swr";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { GrReturn } from "react-icons/gr";

type Props = {
  data: string[];
  programId: any;
  mediaProperties: any;
  users: any;
};


const TrackingLinkModal = ({ data, programId, mediaProperties, users }: Props) => {


  const [response, setResponse] = useState<any>(null)
  const [totalClicks, setTotalClicks] = useState<any>(0)
  const [selectedMediaProperty, setSelectedMediaProperty] = useState<any>(null)
  const [selectedUser, setSelectedUser] = useState<any>(null)

  // console.log('programId', programId)

  const [trackingLinkData, setTrackingLinkData] = useState<any>(null)
  const [assignments, setAssignments] = useState<any>(null)
  const [showAssignTo, setShowAssignTo] = useState<boolean>(false)

  const { handleChange, isOpen } = useToggleBoolean();



  const generateTrackingLink = async () => {
    // console.log('selectedMediaProperty', selectedMediaProperty)
    const result: any = await IMPACT_ACTION_CREATE_CLICK_POST(programId, selectedMediaProperty)
    setResponse(result || 'Error generating tracking link')
    if (result?.TrackingURL) {
      const createTrackingLinkResult: any = await createTrackingLink({ TrackingLink: result?.TrackingURL, ProgramId: programId })
      // console.log(createTrackingLinkResult, "createTrackingLinkResult")
      fetchTrackingLink()
    }

  }

  const fetchTrackingLink = async () => {
    const result: any = await getTrackingLinkByProgramId(programId)
    setTrackingLinkData(result?.data?.trackingLinks)
    // console.log(result?.data?.trackingLinks, "trackingLinkData")
  }

  const fetchAssignmentsAsPerTrackingLink = async () => {
    // console.log(trackingLinkData[0]?._id, "trackingLinkData[0]?._id")
    const result: any = await getAssignmentsByTrackingLinkID(trackingLinkData[0]?._id)
    // console.log(result, "fetchAssignmentsAsPerTrackingLink")

    setAssignments(result?.data)


  }


  useEffect(() => {
    if (programId) {
      fetchTrackingLink()
    }
  }, [programId])


  useEffect(() => {
    if (trackingLinkData && trackingLinkData?.length > 0) {

      fetchAssignmentsAsPerTrackingLink()
    }
  }, [trackingLinkData])

  useEffect(() => {
    console.log(assignments, "assignments")
  }, [assignments])


  useEffect(() => {

    const fetchTotalClicks = async (ProgramId: string) => {
      const result: any = await getTotalClicksAsPerProgramId(ProgramId)

      setTotalClicks(result?.data?.totalClicks || 0)
    }


    if (programId) {
      fetchTotalClicks(programId)
    }
  })
    , [programId]



  const { register, handleSubmit, formState: { errors }, reset } = useForm<any>();

  const onSubmit = async (data: any) => {
    console.log(data, "data");
    // return
    if (!data.userId) return alert("Please select a user");
    const result: any = await createImpactAssignment({
      trackingLinkId: trackingLinkData[0]?._id,
      userId: data.userId,
      commissionPercentage: data.commissionPercentage
    });
    console.log(result);
    alert(result?.response?.data?.message);

    await fetchAssignmentsAsPerTrackingLink();
    setShowAssignTo(false);
    setSelectedUser(null);
    reset();
  };


  return (
    <>
      <Modal
        title="Tracking Link"
        open={isOpen}
        onClose={() => handleChange(false)}>
        <ul style={{ display: "flex", flexDirection: "column", gap: 3 }}>

          {/* <li className="no-decoration">
            <select
              onChange={(e) => {
                const selectedId = e.target.value;
                console.log("Selected Media Property ID:", selectedId);
                setSelectedMediaProperty(selectedId);
              }}
            >
              <option value="" disabled selected>
                Select a Media Property
              </option>
              {mediaProperties?.MediaProperties?.map((i: any, index: number) => (
                <option key={index} value={i?.Id}>
                  {i?.Name}
                </option>
              ))}
            </select>
          </li> */}





          {!trackingLinkData && data?.map((i, c) => (
            <li key={c} className="no-decoration">
              {i && i?.length > 0 ? <Link href={i} target="_blank">{i}</Link> : (
                <div>
                  No Tracking Link Found {" "} <button onClick={() => generateTrackingLink()}>Click here to generate one</button>
                </div>
              )}
              <div>
                {`Total Clicks: ${totalClicks}`}
              </div>
              <button onClick={() => generateTrackingLink()}>Click here to generate & save to your DB</button>
            </li>
          ))}

          {trackingLinkData && trackingLinkData?.length > 0 ? trackingLinkData?.map((item: any, idx: number) => (
            <li key={idx} className="no-decoration">
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "10px" }}>
                {item?.TrackingLink?.length > 0 && <Link href={item?.TrackingLink} target="_blank">{item?.TrackingLink}</Link>}
                <div>
                  {`Total Clicks: ${totalClicks}`}
                </div>
                <button onClick={() => {
                  setShowAssignTo(true)
                }
                } className="btn-primary">
                  {assignments && assignments?.length > 0 ? "Reassign" : "Create Assignment"}
                </button>
              </div>
            </li>
          )) : (
            <li className="no-decoration">
              <div>
                No Tracking Link Found {" "} <button onClick={() => generateTrackingLink()}>Click here to generate one</button>
              </div>
            </li>
          )}


          {/* Assigned to: */}


          {assignments && assignments?.length > 0 && (
            <>
              <li className="no-decoration" style={{ marginTop: "10px", fontWeight: "bold" }}>
                Assignments:
              </li>
              <table style={{ width: "100%", textAlign: "left" }}>
                <thead>
                  <tr>
                    <th>Tracking Link</th>
                    <th>Assigned To</th>
                    <th>Clicks</th>
                  </tr>
                </thead>
                <tbody>
                  {assignments?.map((item: any) => (
                    <tr >
                      <td style={{ paddingTop: "5px" }}><Link href={item?.trackingLinkId?.TrackingLink} target="_blank">{item?.trackingLinkId?.TrackingLink}</Link></td>
                      <td style={{ paddingTop: "5px" }}>{item?.userId?.email}</td>
                      <td style={{ paddingTop: "5px", textAlign: "center" }}>{item?.totalClicks}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </>
          )}



          {
            showAssignTo && (
              <>
                <li className="no-decoration" style={{ marginTop: "5px" }}>
                  Assign to:
                </li>

                <li className="no-decoration">
                  <form onSubmit={handleSubmit(onSubmit)} style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                      <select
                        {...register("userId", { required: "Please select a user" })}
                        defaultValue=""
                      >
                        <option value="" disabled>
                          Select a User
                        </option>
                        {users?.map((i: any, index: number) => (
                          <option key={index} value={i?._id}>
                            {i?.email}
                          </option>
                        ))}
                      </select>
                      {errors.userId && <span style={{ color: 'red', fontSize: '0.8rem' }}>{errors?.userId?.message as string}</span>}
                    </div>

                    <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                      <input
                        type="number"
                        placeholder="Commission Percentage"
                        {...register("commissionPercentage", {
                          required: "Commission percentage is required",
                          min: { value: 0, message: "Cannot be negative" },
                          max: { value: 100, message: "Cannot exceed 100%" }
                        })}
                        style={{ padding: "5px", width: "150px" }}
                      />
                      {errors.commissionPercentage &&
                        <span style={{ color: 'red', fontSize: '0.8rem' }}>{errors?.commissionPercentage?.message as string}</span>
                      }
                    </div>

                    <button
                      type="submit"
                      className="btn-primary"
                    >
                      {assignments && assignments?.length > 0 ? "Reassign" : "Assign"}
                    </button>
                  </form>
                </li>
              </>
            )
          }

          {/* 
          {response && (
            <li className="no-decoration">
              <div>
                <p>{response?.message || response?.TrackingURL}</p>
              </div>
            </li>
          )} */}
        </ul>
      </Modal>
      <CompaignShortInfo
        content={
          <Anchor
            text="Tracking Link"
            target="_blank"
            onClick={() => handleChange(true)}
          />
        }
        title="Tracking Link"
      />
    </>
  );
};

export default TrackingLinkModal;



