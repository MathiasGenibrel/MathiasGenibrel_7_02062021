import React from "react";

import { Icon } from "@iconify/react";
import sunIcon from "@iconify-icons/heroicons-solid/sun";
import moonSolid from "@iconify-icons/clarity/moon-solid";

const SwitchLightMode = ({ theme }) => {
  const UserChoice =
    theme === "light" ? (
      <Icon icon={sunIcon} height="2rem" />
    ) : (
      <Icon icon={moonSolid} height="1.8rem" />
    );

  return UserChoice;
};

export default SwitchLightMode;
