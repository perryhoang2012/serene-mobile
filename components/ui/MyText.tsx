import { Text } from "react-native";

type Props = {
  bold?: boolean;
  light?: boolean;
  medium?: boolean;
  regular?: boolean;
  thin?: boolean;
  size?: number;
  lineHeight?: number;
  weight?: number;
  children?: React.ReactNode;
};

export function MyText(props: Props) {
  const {
    bold,
    light,
    medium,
    regular,
    thin,
    size,
    lineHeight,
    weight,
    children,
  } = props;
  const classNames = ["font-regular", "text-8xl", "leading-6"];

  if (bold) classNames.push("font-bold");
  if (light) classNames.push("font-light");
  if (medium) classNames.push("font-medium");
  if (regular) classNames.push("font-regular");
  if (thin) classNames.push("font-thin");

  console.log(classNames);

  return (
    <Text className={classNames.join(" ")} {...props}>
      {children}
    </Text>
  );
}
