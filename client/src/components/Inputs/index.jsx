import { TextField } from "@material-ui/core";

export const Inputs = ({ label, color, variant, type }) => {

  return (
    <>
      <TextField
        id="outlined"
        label={label}
        color={color}
        variant={variant}
        type={type}
      />
    </>
  );
};
