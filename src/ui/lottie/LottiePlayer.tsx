import _Lottie, {
  type AnimationItem,
  type AnimationDirection,
  type LottiePlayer,
  type AnimationEventName,
  type AnimationEventCallback,
  type SVGRendererConfig,
} from "lottie-web/build/player/lottie_light.js";
import {
  CSSProperties,
  useRef,
  forwardRef,
  useImperativeHandle,
  useLayoutEffect,
} from "react";

type Listener = { name: AnimationEventName; handler?: AnimationEventCallback };

// something with the way it is being exported is making
// .loadAnimation not exist on lottie even though it does. It finds it through
// lottie.default.loadAnimation but that breaks in the browser as undefined
// Casting it here with the type to avoid errors down below
const lottie: LottiePlayer = _Lottie;

function getAnimation(
  animationData?: unknown,
  path?: string,
): [unknown, string | undefined] {
  if (animationData) return [animationData, undefined];
  return [undefined, path];
}

/**
 * An SVGRendererConfig that only sets the viewBox, but not any default width,
 * height, or transform properties on the root SVG element. See more info here:
 * https://github.com/airbnb/lottie-web/wiki/Renderer-Settings#viewboxonly-svg-renderer
 * Note: because width / height are no longer set with this config (which both
 * normally default to 100%), you'll likely need to set it yourself.
 */
export const viewBoxOnlyRendererConfig: SVGRendererConfig = {
  /* This is set to false to prevent translate3d(0px, 0px, 0px) from being
   * added to the rendered SVG, which is normally included by default for more
   * performant animations. Unfortunately, it can cause blurry rendering in
   * Chrome sometimes. For now, we'll disable it to avoid blurry rendering at
   * the risk of animations being less performant. We may want to consider
   * eventually making this the default for all Lottie animations across the
   * codebase, but for now we'll expose it as an optional config for use on an
   * as-needed basis.
   *
   * See more info here:
   * https://github.com/airbnb/lottie-web/issues/2718
   */
  viewBoxOnly: true,
};

export interface LottieProps {
  /** HTML Attributes */
  className?: string;
  style?: CSSProperties;

  /** Lottie Atributes */
  animationData?: unknown;
  rendererSettings?: SVGRendererConfig;
  path?: string;
  loop?: boolean | number;
  autoplay?: boolean;
  name?: string;

  /** Events */
  onComplete?(): void;
  onLoopComplete?(): void;
}

export type LottieAnimation = {
  play(): void;
  pause(): void;
  stop(): void;
  setSpeed(speed: number): void;
  setDirection(direction: AnimationDirection): void;
  setLoop(isLooping: boolean): void;
  goToAndPlay(value: number, isFrame?: boolean): void;
};

export default forwardRef<LottieAnimation, LottieProps>(
  function Lottie(props, ref) {
    const containerRef = useRef<HTMLDivElement>(null);
    const animationRef = useRef<AnimationItem>();

    useLayoutEffect(() => {
      if (!containerRef.current) return;

      const [animationData, path] = getAnimation(
        props.animationData,
        props.path,
      );

      // Destroy any lingering previous instance
      animationRef.current?.destroy();

      const animation = lottie.loadAnimation({
        container: containerRef.current,
        renderer: "svg",
        rendererSettings: props.rendererSettings,
        loop: props.loop ?? true,
        autoplay: props.autoplay ?? true,
        name: props.name,
        animationData,
        path,
      });

      animationRef.current = animation;

      return () => {
        animation.destroy();
        animationRef.current = undefined;
      };
      // eslint-disable-next-line
    }, [props.path, props.animationData]);

    useLayoutEffect(() => {
      if (props.autoplay ?? true) {
        animationRef.current?.play();
      } else {
        animationRef.current?.pause();
      }
    }, [props.autoplay]);

    useLayoutEffect(() => {
      const register: Listener[] = [
        { name: "complete", handler: () => props.onComplete?.() },
        { name: "loopComplete", handler: () => props.onLoopComplete?.() },
      ];

      const deregister = register
        .filter(l => Boolean(l.handler))
        .map(listener => {
          // We already verify that only handlers that exists are passed into the map
          // function through the filter
          animationRef.current?.addEventListener(
            listener.name,
            listener.handler!,
          );
          return () =>
            animationRef.current?.removeEventListener(
              listener.name,
              listener.handler,
            );
        });

      return () => {
        deregister.forEach(d => d());
      };
      // eslint-disable-next-line
    }, [props.onComplete, props.onLoopComplete]);

    useImperativeHandle(
      ref,
      () => {
        return {
          play: () => animationRef.current?.play(),
          pause: () => animationRef.current?.pause(),
          stop: () => animationRef.current?.stop(),
          setSpeed: speed => animationRef.current?.setSpeed(speed),
          setDirection: dir => animationRef.current?.setDirection(dir),
          setLoop: isLooping => animationRef.current?.setLoop(isLooping),
          goToAndPlay: (value, isFrame) =>
            animationRef.current?.goToAndPlay(value, isFrame),
        };
      },
      [],
    );

    return (
      <div ref={containerRef} className={props.className} style={props.style} />
    );
  },
);
