import { FormGroup, Input, Label } from "reactstrap";

export default function CheckBox({ changeFn, isChecked, fieldname, value, label, disabled }) {
  return (
    <FormGroup check>
      <Input
        type="checkbox"
        name={fieldname}
        value={value}
        checked={isChecked}
        onChange={changeFn}
        disabled={disabled}
      />
      {' '}
      <Label check>
        {label}
      </Label>
    </FormGroup>
  );
}