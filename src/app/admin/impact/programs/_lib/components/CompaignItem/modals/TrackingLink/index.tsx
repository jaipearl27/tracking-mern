"use client";
import React, { useEffect, useState } from "react";
import CompaignShortInfo from "../../ShortInfo";
import Anchor from "@/components/common/Anchor";
import { useToggleBoolean } from "@/hooks/useToggleBoolean";
import Modal from "@/components/common/Modal";
import { IMPACT_ACTION_CREATE_CLICK_POST, IMPACT_ACTION_LIST_MEDIA_PROPERTIES } from "@/utils/Providers/Impact/API";

type Props = {
  data: string[];
  programId: any;
  mediaProperties: any;
};


const TrackingLinkModal = ({ data, programId, mediaProperties }: Props) => {


  const [response, setResponse] = useState<any>(null)
  const [selectedMediaProperty, setSelectedMediaProperty] = useState<any>(null)
  // console.log('programId', programId)

  const { handleChange, isOpen } = useToggleBoolean();



  const generateTrackingLink = async () => {
    // console.log('selectedMediaProperty', selectedMediaProperty)
    const result: any = await IMPACT_ACTION_CREATE_CLICK_POST(programId, selectedMediaProperty)
    setResponse(result || 'Error generating tracking link')
  }




  return (
    <>
      <Modal
        title="Tracking Link"
        open={isOpen}
        onClose={() => handleChange(false)}>
        <ul style={{ display: "flex", flexDirection: "column", gap: 3 }}>

          <li className="no-decoration">
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
          </li>


          {data?.map((i, c) => (
            <li key={c} className="no-decoration">
              {i && i?.length > 0 ? i : (
                <div>
                  No Tracking Link Found {" "} <button onClick={() => generateTrackingLink()}>Click here to generate one</button>
                </div>
              )}

              <button onClick={() => generateTrackingLink()}>Click here to generate one</button>
            </li>
          ))}
          {response && (
            <li className="no-decoration">
              <div>
                <p>{response?.message || response?.TrackingURL}</p>
              </div>
            </li>
          )}
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
