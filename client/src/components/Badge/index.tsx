import { Badge, BadgeProps } from "@mui/material";
import styled, { css } from "styled-components";
import { getTheme } from "../../theme";

export const StyledBadge = styled(Badge)<BadgeProps>(() => {
  const theme = getTheme();

  return css`
  .MuiBadge-badge {
    right: -10px;
    top: 11px;
    background-color: rgba(255, 255, 255, 0.3);
    color: ${theme.TEXT_COLOR};
    padding: 0;
    z-index: 0;
  },
  `;
});
