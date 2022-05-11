import { FC, LegacyRef, useState } from "react";
import { useClampText } from "use-clamp-text";

interface ClampProps {
  text: string;
  lines?: number;
  ellipsis?: number;
}

const useClamp = ({ text, lines = 3, ellipsis = 11.5 }: ClampProps) => {
  const [expanded, setExpanded] = useState<boolean>(false);

  const toggleExpanded = () => setExpanded((state) => !state);

  const [ref, { noClamp, clampedText, key }] = useClampText({
    text,
    lines,
    ellipsis,
    expanded,
  });

  return {
    ref,
    noClamp,
    key,
    clampedText,
    expanded,
    toggleExpanded,
  };
};

export default useClamp;
