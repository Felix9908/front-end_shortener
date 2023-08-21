import React from "react";
import {Switch} from "@nextui-org/react";
import {MoonIcon} from "../common/MoonIcon";
import {SunIcon} from "../common/SunIcon";

export default function ChangeTheme() {
  return (
    <Switch
      defaultSelected
      size="lg"
      color="secondary"
      thumbIcon={({ isSelected, className }) =>
        isSelected ? (
          <SunIcon className={className} />
        ) : (
          <MoonIcon className={className} />
        )
      }
    >
      Dark mode
    </Switch>
  );
}
