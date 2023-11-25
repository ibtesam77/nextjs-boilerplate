interface HorizontalSeparatorProps {
  color?: string;
  thickness?: number;
}

export default function HorizontalSeparator({
  color = "#5981A0",
  thickness = 0.25,
}: HorizontalSeparatorProps) {
  return <hr style={{ borderWidth: thickness, borderColor: color }} />;
}
