interface IframeProps {
  itemId: number | undefined;
  canvasIndex: number;
}

export default function Iframe(props: IframeProps) {
  const { itemId, canvasIndex } = props;

  return (
    <iframe
      src={`https://www.blavatnikarchive.org/m3viewersiege/?id=${itemId}&segmented=0&method=getItemMVJSON&hideAll=true&canvasIndex=${canvasIndex}`}
      title="Postcard"
      style={{ width: "100%", height: "80vh", backgroundColor: "#5981A0" }}
    ></iframe>
  );
}
