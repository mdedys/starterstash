import { styled } from "@linaria/react";

import focus from "../styles/focus";
import spacing from "../styles/spacing";
import { cssvar, vars } from "../theme/vars";
import Typography from "../typography/Typography";

const Container = styled.div`
  display: flex;
  align-items: center;
  gap: ${spacing.md.px};
`;

const Box = styled.div<StyledProps<{ checked: boolean }>>`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 0 0 16px;

  background-color: ${props =>
    props.$checked
      ? cssvar(vars.colors.background.brand.solid)
      : "transparent"};
  border: 1px solid
    ${props =>
      props.$checked ? "transparent" : cssvar(vars.colors.border.primary)};
  border-radius: ${spacing.xs.px};

  height: 16px;
  width: 16px;

  &:focus:not([data-checked="true"]) {
    background-color: ${cssvar(vars.colors.background.primary.main)};
    box-shadow: ${focus.ring.gray};
  }

  &:focus:not([data-checked="false"]) {
    box-shadow: ${focus.ring.brand};
  }
`;

interface CheckboxProps {
  checked: boolean;
  label?: string;
  onChange(checked: boolean): void;
}

export default function Checkbox(props: CheckboxProps) {
  return (
    <Container>
      <Box
        tabIndex={0}
        $checked={props.checked}
        onClick={() => props.onChange(!props.checked)}
        data-checked={props.checked}
      >
        {props.checked && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
          >
            <path
              d="M10 3L4.5 8.5L2 6"
              stroke={cssvar(vars.colors.foreground.white)}
              strokeWidth="1.6666"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        )}
      </Box>
      {props.label && (
        <Typography variant="text" size="md" weight="500">
          {props.label}
        </Typography>
      )}
    </Container>
  );
}
