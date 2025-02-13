import Table from "@/components/common/Table";
import ProgramsIcon from "@/components/icons/ProgramsIcon";

// Styles
import "./styles.scss";

// Data
import { programsTableData, programTableColumns } from "./data";
import SectionWrapper from "../../components/SectionWrapper";
import SectionCardHeading from "../../components/SectionCardHeading";

const ProgramsContainer = () => {
  return (
    <SectionWrapper className="section-wrapper">
      <SectionCardHeading icon={<ProgramsIcon />} text="Programs for you" />
      <Table columns={programTableColumns} data={programsTableData} />
    </SectionWrapper>
  );
};

export default ProgramsContainer;
