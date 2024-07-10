import { styled } from "@linaria/react";
import {
  ChangeEventHandler,
  FocusEvent,
  FocusEventHandler,
  useState,
} from "react";

import Icons from "../icons/Icons";
import border from "../styles/border";
import focus from "../styles/focus";
import shadows from "../styles/shadows";
import spacing from "../styles/spacing";
import typography from "../styles/typography";
import { cssvar, vars } from "../theme/vars";
import Typography from "../typography/Typography";

const Container = styled.div`
  width: 100%;
`;

const Label = styled(Typography)`
  display: block;
  color: ${cssvar(vars.colors.text.secondary.main)};

  margin-bottom: ${spacing.sm.px};
`;

type InputWrapperProps = StyledProps<{ focused: boolean; error: boolean }>;

function borderColor(props: InputWrapperProps) {
  if (props.$error) return cssvar(vars.colors.border.error);
  if (props.$focused) return cssvar(vars.colors.border.brand);
  return cssvar(vars.colors.border.primary);
}

function boxShadow(props: InputWrapperProps) {
  if (props.$focused && props.$error) return focus.shadow.errorxs;
  if (props.$focused) return focus.shadow.brandxs;
  return shadows.xs;
}

const InputWrapper = styled.div<InputWrapperProps>`
  display: flex;
  align-items: center;
  gap: ${spacing.md.px};

  border: 1px solid;
  border-color: ${props => borderColor(props)};
  border-radius: ${border.md};
  box-shadow: ${props => boxShadow(props)};
  transition: box-shadow 0.1s ease-in-out;

  padding: ${spacing.md.px} ${spacing.lg.px};
`;

const Input = styled.input`
  border: none;
  border-radius: ${border.md};
  color: ${cssvar(vars.colors.text.primary.main)};
  outline: none;

  font-size: ${typography.text.md.fontsize.rem};
  font-style: normal;
  font-weight: 400;
  line-height: ${typography.text.md.lineheight.rem};

  width: 100%;

  &::placeholder {
    color: ${cssvar(vars.colors.text.placeholder.main)};
  }
`;

const ErrorText = styled(Typography)`
  color: ${cssvar(vars.colors.text.error)};

  margin-top: ${spacing.sm.rem};
`;

function getIcon(props: TextfieldProps) {
  if (props.error) return Icons["info-circle"];
  if (props.icon) return Icons[props.icon];
  return null;
}

interface TextfieldProps {
  placeholder?: string;
  icon?: keyof typeof Icons;
  label?: string;
  value: string;
  error?: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
  onFocus?: FocusEventHandler;
  onBlur?: FocusEventHandler;
}

export default function Textfield(props: TextfieldProps) {
  const [focused, setFocus] = useState(false);

  const Icon = getIcon(props);

  function onFocus(evt: FocusEvent) {
    setFocus(true);
    props.onFocus?.(evt);
  }

  function onBlur(evt: FocusEvent) {
    setFocus(false);
    props.onBlur?.(evt);
  }

  return (
    <Container>
      {props.label && (
        <Label variant="text" size="sm" weight="500">
          {props.label}
        </Label>
      )}
      <InputWrapper $focused={focused} $error={Boolean(props.error)}>
        <Input
          placeholder={props.placeholder}
          value={props.value}
          onChange={props.onChange}
          onBlur={onBlur}
          onFocus={onFocus}
        />
        {Icon && (
          <Icon
            size={16}
            style={{
              color: props.error
                ? cssvar(vars.colors.foreground.error.secondary)
                : cssvar(vars.colors.foreground.quinary.main),
            }}
          />
        )}
      </InputWrapper>
      {props.error && (
        <ErrorText variant="text" size="sm">
          {props.error}
        </ErrorText>
      )}
    </Container>
  );
}
