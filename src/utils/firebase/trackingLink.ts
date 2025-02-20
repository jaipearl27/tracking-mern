import { db } from "@/config/firebase";
import {
  addDoc,
  collection,
  doc,
  getDocs,
  query,
  updateDoc,
  where,
} from "firebase/firestore";
import { FirestoreCollections } from "./type";

export const getTrackingLink = async ({
  campaignId,
}: {
  campaignId: string | number;
}) => {
  try {
    const q = query(
      collection(db, FirestoreCollections.TRACKING_LINK_REFERENCE),
      where("campaignId", "==", `${campaignId}`),
    );

    const querySnapshot = await getDocs(q);

    return querySnapshot.docs?.map((i) => ({ id: i?.id, ...i?.data() }));
  } catch (error) {
    console.log(error);
  }
};

export const createTrackingLinkReference = async ({
  campaignId,
  trackingLinkUrl,
}: {
  campaignId: string;
  trackingLinkUrl: string;
}) => {
  try {
    const data: any[] | undefined = await getTrackingLink({ campaignId });

    if (data?.length) {
      const payload = await updateDoc(
        doc(db, FirestoreCollections.TRACKING_LINK_REFERENCE, data?.[0]?.id),
        {
          trackingLinkUrl,
        },
      );

      return payload;
    }

    const docRef = await addDoc(
      collection(db, FirestoreCollections.TRACKING_LINK_REFERENCE),
      {
        campaignId,
        trackingLinkUrl,
      },
    );
    console.log(docRef, "CREATED_DOC");

    return docRef;
  } catch (e) {
    console.error("Error adding document: ", e);
  }
};
