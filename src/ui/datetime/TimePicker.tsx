import { styled } from "@linaria/react";
import { ChangeEvent, useRef } from "react";

import Button from "../button/Button";
import { DateTime } from "luxon";

const Wrapper = styled.div`
  display: inline;
  position: relative;
`;

const Input = styled.input`
  position: absolute;
  z-index: -1;
`;

interface TimePickerProps {
  value: DateTime;
  onChange(time: DateTime): void;
}

export default function TimePicker(props: TimePickerProps) {
  const inputRef = useRef<HTMLInputElement>(null);

  function onClick() {
    if (inputRef.current) {
      inputRef.current?.showPicker();
      inputRef.current.style.visibility = "visible";
      inputRef.current.focus();
      inputRef.current.style.visibility = "hidden";
    }
  }

  function onTimeChange(evt: ChangeEvent<HTMLInputElement>) {
    const [hour, minute] = evt.target.value.split(":");
    props.onChange(
      props.value.set({ hour: parseInt(hour), minute: parseInt(minute) }),
    );
  }

  return (
    <Wrapper>
      <Button
        size="md"
        variant="secondary"
        leadingIcon="clock"
        onClick={onClick}
      >
        {props.value.toFormat("hh:mm a")}
      </Button>
      <Input type="time" ref={inputRef} onChange={onTimeChange} />
    </Wrapper>
  );
}
