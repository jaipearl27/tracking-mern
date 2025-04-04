"use client";
import React, { useEffect, useState } from "react";
import CompaignShortInfo from "../../ShortInfo";
import Anchor from "@/components/common/Anchor";
import { useToggleBoolean } from "@/hooks/useToggleBoolean";
import Modal from "@/components/common/Modal";
import { IMPACT_ACTION_CREATE_CLICK_POST } from "@/utils/Providers/Impact/API";
import { createTrackingLink, getAssignmentsByTrackingLinkID, getTrackingLinkByProgramId } from "@/utils/Providers/API_V1/API";
import useSWR from "swr";
import Link from "next/link";

type Props = {
  data: string[];
  programId: any;
  mediaProperties: any;
  // users: any;
};


const TrackingLinkModal = ({ data, programId, mediaProperties }: Props) => {


  const [response, setResponse] = useState<any>(null)
  const [selectedMediaProperty, setSelectedMediaProperty] = useState<any>(null)
  const [selectedUser, setSelectedUser] = useState<any>(null)

  // console.log('programId', programId)

  const [trackingLinkData, setTrackingLinkData] = useState<any>(null)
  const [assignments, setAssignments] = useState<any>(null)
  // const [showAssignTo, setShowAssignTo] = useState<boolean>(false)

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

              <button onClick={() => generateTrackingLink()}>Click here to generate & save to your DB</button>
            </li>
          ))}

          {trackingLinkData && trackingLinkData?.length > 0 ? trackingLinkData?.map((item: any, idx: number) => (
            <li key={idx} className="no-decoration">
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "10px" }}>
                {item?.TrackingLink?.length > 0 && <Link href={item?.TrackingLink} target="_blank">{item?.TrackingLink}</Link>}
                {/* <button onClick={() => {
                  setShowAssignTo(true)
                }
                } className="btn-primary">
                  {assignments && assignments?.length > 0 ? "Reassign" : "Create Assignment"}
                </button> */}
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
              {/* <li className="no-decoration" style={{ marginTop: "10px", fontWeight: "bold" }}>
                Assignments:
              </li> */}
              <table style={{ width: "100%", textAlign: "left" }}>
                <thead>
                  <tr>
                    {/* <th>Tracking Link</th> */}
                    <th>Assigned To</th>
                    <th>Total Clicks</th>
                  </tr>
                </thead>
                <tbody>
                  {assignments?.map((item: any) => (
                    <tr >
                      {/* <td style={{ paddingTop: "5px" }}><Link href={item?.trackingLinkId?.TrackingLink} target="_blank">{item?.trackingLinkId?.TrackingLink}</Link></td> */}
                      <td style={{ paddingTop: "5px" }}>{item?.userId?.email}</td>
                      <td style={{ paddingTop: "5px"}}>{item?.totalClicks}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </>
          )}


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
