import { ChangeEvent } from "react";

import { Input, Container, Switch } from "@/common/ToggleSwitch/styles";

export const ToggleSwitch = ({
  checked,
  handleChange,
}: {
  checked: boolean;
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
}) => (
  <Container aria-label={checked ? "Toggle switch on" : "Toggle switch off"}>
    <Input checked={checked} type="checkbox" onChange={handleChange} />
    <Switch />
  </Container>
);
