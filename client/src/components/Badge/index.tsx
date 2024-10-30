import { Badge, BadgeProps } from "@mui/material";
import styled, { css } from "styled-components";

export const StyledBadge = styled(Badge)<BadgeProps>(() => {
  return css`
  .MuiBadge-badge {
    right: -10px;
    top: 11px;
    background-color: rgba(255, 255, 255, 0.3);
    color: var(--text-color);
    padding: 0;
    z-index: 0;
  },
  `;
});
