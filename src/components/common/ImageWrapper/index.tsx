import Image from "next/image";

type Props = {
  src: string;
  alt: string;
  wrapperClassName?: string;
  imageClassName?: string;
  width?: "fit-content" | "100%" | "max-content" | number;
  height?: "fit-content" | "100%" | "max-content" | number;
  onClick?: (...a: any) => any;
};

const ImageWrapper = ({
  alt,
  imageClassName = "",
  src,
  wrapperClassName = "",
  height = "100%",
  width = "100%",
  onClick = () => {},
}: Props) => {
  return (
    <div
      onClick={onClick}
      style={{ position: "relative", width, height }}
      className={wrapperClassName}>
      <Image fill className={imageClassName} src={src} alt={alt} />
    </div>
  );
};

export default ImageWrapper;
