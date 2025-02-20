import React from "react";
import "./styles.scss";

type Props = {
  children: React.ReactNode;
  allowYPadding?: boolean;
  allowXpadding?: boolean;
  yPaddingVal?: string;
  xPaddingVal?: string;
  className?: string;
  border?: boolean;
  borderRadius?: string;
};

const SectionWrapper = ({
  children,
  allowXpadding = true,
  allowYPadding = true,
  xPaddingVal = "20px",
  yPaddingVal = "20px",
  className = "",
  border = true,
  borderRadius = "20px",
}: Props) => {
  const computedStyles: React.CSSProperties = {
    ...(allowXpadding
      ? {
          paddingLeft: xPaddingVal,
          paddingRight: xPaddingVal,
        }
      : {}),
    ...(allowYPadding
      ? {
          paddingTop: yPaddingVal,
          paddingBottom: yPaddingVal,
        }
      : {}),
    borderRadius,
  };

  const computedClassName = `${className} ${border && "with-border"}`;

  return (
    <section className={computedClassName} style={computedStyles}>
      {children}
    </section>
  );
};

export default SectionWrapper;
