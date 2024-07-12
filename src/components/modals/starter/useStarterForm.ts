import { DateTime } from "luxon";
import { useState } from "react";

import { Starter } from "../../../state/models/Users";

function getDefaultReminder(starter?: Starter) {
  if (!starter)
    return DateTime.now().set({
      day: DateTime.now().day + 7,
      hour: 8,
      minute: 0,
      second: 0,
      millisecond: 0,
    });
  return starter.reminder;
}

// true === valid result
type StarterValidation = {
  name: boolean;
  reminder: boolean;
};

function validate(name: string, reminder: DateTime): StarterValidation {
  // TODO: Add reminder validation to ensure date is in the future
  return { name: name.trim().length > 0, reminder: Boolean(reminder) };
}

type StarterFormResult = {
  name: string;
  onChangeName(value: string): void;
  reminder: DateTime;
  onChangeReminder(value: DateTime): void;
  repeatInterval: boolean;
  onChangeRepeatInterval(value: boolean): void;
  validation: StarterValidation;
  validate(): boolean;
  clear(): void;
};

export default function useStarterForm(starter?: Starter): StarterFormResult {
  const [name, setName] = useState(starter?.name ?? "");
  const [reminder, setReminder] = useState(getDefaultReminder(starter));
  const [repeatInterval, setRepeat] = useState(true);

  const [validation, setValidation] = useState<StarterValidation>({
    name: true,
    reminder: true,
  });

  return {
    name,
    onChangeName: setName,
    reminder,
    onChangeReminder: setReminder,
    repeatInterval,
    onChangeRepeatInterval: setRepeat,
    validation,
    validate: () => {
      const result = validate(name, reminder);
      setValidation(result);
      return result.name && result.reminder;
    },
    clear: () => {
      setName("");
      setReminder(getDefaultReminder());
      setRepeat(true);
      setValidation({
        name: true,
        reminder: true,
      });
    },
  };
}
