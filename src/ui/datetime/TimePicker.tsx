import { Button } from "@dedees/ui-kit/button";
import { Dropdown, DropdownItem } from "@dedees/ui-kit/dropdown";
import { Typography } from "@dedees/ui-kit/typography";
import { DateTime } from "luxon";
import { useRef, useState } from "react";
import { styled } from "styled-components";

const Wrapper = styled.div`
  display: inline;
  position: relative;
`;

interface TimePickerProps {
  value: DateTime;
  onChange(time: DateTime): void;
}

const HOURS = Array.from(Array(12));
const MINUTES = Array.from(Array(59));

const Row = styled.div`
  display: flex;
  gap: 4px;
`;

const Column = styled.div`
  overflow-y: auto;
  max-height: 240px;
`;

const Values = styled(Typography)`
  display: block;
  text-align: center;
`;

export default function TimePicker(props: TimePickerProps) {
  const anchor = useRef<HTMLButtonElement>(null);
  const [isOpen, setIsOpen] = useState(false);

  // function onTimeChange(evt: ChangeEvent<HTMLInputElement>) {
  //   const [hour, minute] = evt.target.value.split(":");
  //   props.onChange(
  //     props.value.set({ hour: parseInt(hour), minute: parseInt(minute) }),
  //   );
  // }

  return (
    <Wrapper>
      <Button
        ref={anchor}
        size="md"
        variant="secondary"
        leadingIcon="clock"
        onClick={() => setIsOpen(!isOpen)}
      >
        {props.value.toFormat("hh:mm a")}
      </Button>
      <Dropdown isOpen={isOpen} anchor={anchor.current}>
        <Row>
          <Column>
            {HOURS.map((_, i) => (
              <DropdownItem>
                <Values variant="text" size="sm">
                  {i + 1}
                </Values>
              </DropdownItem>
            ))}
          </Column>
          <Column>
            {MINUTES.map((_, i) => (
              <DropdownItem>
                <Values variant="text" size="sm">
                  {i + 1}
                </Values>
              </DropdownItem>
            ))}
          </Column>
          <Column>
            <DropdownItem>
              <Values variant="text" size="sm">
                AM
              </Values>
            </DropdownItem>
            <DropdownItem>
              <Values variant="text" size="sm">
                PM
              </Values>
            </DropdownItem>
          </Column>
        </Row>
      </Dropdown>
    </Wrapper>
  );
}
