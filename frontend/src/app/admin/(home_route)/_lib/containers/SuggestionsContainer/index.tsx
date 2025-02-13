// Components

import SuggestionsIcon from "@/components/icons/SuggestionsIcon";
import SuggestionItem from "./SuggestionItem";

// Styles
import "./styles.scss";
import SectionWrapper from "../../components/SectionWrapper";
import SectionCardHeading from "../../components/SectionCardHeading";

const SuggestionsContainer = () => {
  return (
    <SectionWrapper
      xPaddingVal="10px"
      yPaddingVal="10px"
      className="suggestion-wrapper">
      <SectionCardHeading
        icon={<SuggestionsIcon />}
        headingStyles={{ color: "white" }}
        text="Suggestions"
      />
      <div className="content-wrapper">
        <SuggestionItem />
        <SuggestionItem />
        <SuggestionItem />
        <SuggestionItem />
      </div>
    </SectionWrapper>
  );
};

export default SuggestionsContainer;
