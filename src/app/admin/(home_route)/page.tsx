"use client"

import Header from "./_sections/Header";
import NotificationCenter from "./_lib/containers/NotificationCenter";
import ProgramsContainer from "./_lib/containers/ProgramsContainer";
import ReportInfo from "./_lib/containers/ReportInfo";
import SuggestionsContainer from "./_lib/containers/SuggestionsContainer";
import "./_lib/styles/index.scss";
import ClicksSection from "./_lib/components/ClicksSection";
import { Toaster } from "react-hot-toast";

export default async function Home() {
  return (
    <>
      {/* <Header /> */}
      <div className="container-wrapper">
        <div className="container-grid container">
          <ReportInfo />
          <NotificationCenter />
          <ProgramsContainer />
          <SuggestionsContainer />
          <ClicksSection />
        </div>
      </div>
      <Toaster position="bottom-right" toastOptions={{ duration: 1500 }} />
    </>
  );
}
