import { TextField } from "@material-ui/core";

export const Inputs = ({label, color, variant}) => {
  return (
          <TextField id="outlined" label={label}  color={color} variant={variant} />
  );
}
