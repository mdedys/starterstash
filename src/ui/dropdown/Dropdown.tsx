import { styled } from "@linaria/react";
import { PropsWithChildren, useLayoutEffect, useRef, useState } from "react";

import border from "../styles/border";
import shadows from "../styles/shadows";
import spacing from "../styles/spacing";
import { cssvar, vars } from "../theme/vars";

const Container = styled.div`
  background-color: ${cssvar(vars.colors.background.primary.main)};
  border: 1px solid ${cssvar(vars.colors.border.secondary)};
  border-radius: ${border.md};
  box-shadow: ${shadows.lg};
  overflow: clip;

  position: fixed;
  padding: ${spacing.xs.px} 0;
`;

interface DropdownProps {
  isOpen?: boolean;
  anchor?: HTMLElement | null;
}

export default function Dropdown(props: PropsWithChildren<DropdownProps>) {
  const [top, setTop] = useState(-1000);
  const [left, setLeft] = useState(-1000);
  const ref = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (!props.isOpen || !props.anchor || !ref.current) return;

    const anchor = props.anchor.getBoundingClientRect();
    const cur = ref.current.getBoundingClientRect();

    setTop(anchor.top + anchor.height + 12);
    setLeft(anchor.left + anchor.width - cur.width);
  }, [props.isOpen, props.anchor]);

  return (
    <Container
      ref={ref}
      style={{
        display: props.isOpen ? "block" : "none",
        left: `${left}px`,
        top: `${top}px`,
      }}
    >
      {props.children}
    </Container>
  );
}
