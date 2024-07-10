import { styled } from "@linaria/react";
import { DateTime } from "luxon";
import { ChangeEvent, useRef } from "react";

import Button from "../button/Button";

const Wrapper = styled.div`
  display: inline;
  position: relative;
`;

const Input = styled.input`
  position: absolute;
  z-index: -1;
`;

interface DatePickerProps {
  value: DateTime;
  onChange(time: DateTime): void;
}

export default function DatePicker(props: DatePickerProps) {
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
    // eslint-disable-next-line
    const [_, month, day] = evt.target.value.split("-");
    props.onChange(
      props.value.set({ month: parseInt(month), day: parseInt(day) }),
    );
  }

  return (
    <Wrapper>
      <Button
        size="md"
        variant="secondary"
        leadingIcon="calendar"
        onClick={onClick}
      >
        {props.value.toFormat("DD")}
      </Button>
      <Input type="date" ref={inputRef} onChange={onTimeChange} />
    </Wrapper>
  );
}
