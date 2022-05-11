import { CSSProperties, FC, LegacyRef } from "react";

import { useClampText } from "src/hooks";

interface IClampText {
  style?: CSSProperties;
}

const ClampText: FC<IClampText> = ({ style = {} }) => {
  const { ref, noClamp, clampedText, expanded, toggleExpanded, key } =
    useClampText({
      text: `生活是一首歌，吟唱着人生的节奏和旋律;生活是1条路，延伸着人生的足迹和期望;生活是一杯酒，饱含着人生的清醇与忧愁;生活是一团麻，
          交织着人生的烦恼与愉悦;生活是一幅画，描绘着人生经历的红绿蓝;生活是一团火，燃烧着人生的憧憬和梦想。`,
    });
  return (
    <>
      <div style={style} ref={ref as LegacyRef<HTMLDivElement>} key={key}>
        {clampedText}
        {!noClamp && "..."}
        <button
          style={{
            background: "none",
            border: "none",
            margin: 0,
            padding: 0,
            textDecoration: "underline",
            cursor: "pointer",
            fontSize: "inherit",
            color: "inherit",
            display: "inline",
            marginLeft: 12,
          }}
          onClick={toggleExpanded}
        >
          {!noClamp ? "查看更多" : "收起"}
        </button>
      </div>
      <div>状态: {expanded ? "展开" : "收起"}</div>
    </>
  );
};

export default ClampText;
