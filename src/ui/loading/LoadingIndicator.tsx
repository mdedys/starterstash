import LottieJSON from "../../assets/loading-toast.json";
import LottiePlayer from "../lottie/LottiePlayer";

type SizeVariant = "sm" | "md" | "lg";

interface LoadingIndicatorProps {
  size?: SizeVariant;
}

function size(value: SizeVariant) {
  if (value === "lg") return 242;
  if (value === "md") return 182;
  return 108;
}

export default function LoadingIndicator(props: LoadingIndicatorProps) {
  const _size = size(props.size ?? "md");
  return (
    <LottiePlayer
      animationData={LottieJSON}
      style={{ height: _size, width: _size }}
    />
  );
}
