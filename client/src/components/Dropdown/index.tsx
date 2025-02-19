import styled from "styled-components";

const StyledDropdown = styled.select`
  display: block;
  padding: 4px 8px;
  width: calc(100%);
  border: 2px solid #ccc;
  border-radius: 5px;
  outline: none;
  background: white;
  color: black;
  border: 2px solid #00ff00;

  &.needs-selection {
    border: 2px solid #ff0000;
  }

  &:disabled {
    opacity: 0.25;
  }
`;

interface _props {
  onChange: (value: string) => void;
  options: string[];
  selectedOption?: string;
  disabled: boolean;
}

export default function Dropdown({
  options,
  selectedOption,
  onChange,
  disabled,
}: _props) {
  const isValidSelection = selectedOption && selectedOption !== "";
  const selectClassName = isValidSelection ? "" : "needs-selection";

  return (
    <StyledDropdown
      value={selectedOption}
      onChange={(e) => onChange(e.target.value)}
      className={selectClassName}
      disabled={disabled}
    >
      <option value="" disabled>
        Select an option...
      </option>
      {options.map((option, index) => (
        <option key={index} value={option}>
          {option}
        </option>
      ))}
    </StyledDropdown>
  );
}
