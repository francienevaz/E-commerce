import {Button} from '@mui/material';
import { styled } from '@mui/material/styles';
import { orange } from '@mui/material/colors';

const ColorButton = styled(Button)(({ theme }) => ({
    color: theme.palette.getContrastText(orange[300]),
    backgroundColor: orange[300],
    '&:hover': {
      backgroundColor: orange[900],
    },
  }));

export default ColorButton;