
type TypographyProps = {
  typoTag?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p";
  label?: string;
  caption?: string;
  helperText?: string;
  fontSize?: string;
  fontWeight?: string;
  lineHeight?: string;
  letterSpacing?: string;
  mode?: "light" | "dark";
};

const Typography = (props: TypographyProps) => {
  const Tag = props.typoTag || "span";

  return (
    <Tag
      style={{
        fontSize: props?.fontSize,
        fontWeight: props?.fontWeight,
        lineHeight: props?.lineHeight,
        letterSpacing: props?.letterSpacing,
        color: props.mode == "dark" ? "black" : "white"
      }}
      className={`sm:text-base md:text-lg lg:text-xl transition-colors duration-300`}
    >
      {props.label || props.caption || props.helperText || "Default Text"}
    </Tag>
  );
};

export default Typography;
