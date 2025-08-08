import * as React from 'react';
import FormatBoldIcon from '@mui/icons-material/FormatBold';
import FormatItalicIcon from '@mui/icons-material/FormatItalic';
import FormatUnderlinedIcon from '@mui/icons-material/FormatUnderlined';
import FormatColorFillIcon from '@mui/icons-material/FormatColorFill';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

export default function ToggleButtonsMultiple() {
  const [formats, setFormats] = React.useState(() => ['bold']);

  const handleFormat = (event, newFormats) => {
    setFormats(newFormats);
  };

  console.log(formats);
  

  return (
    <ToggleButtonGroup
    value={formats}
    onChange={handleFormat}
    orientation='vertical'
    >
        <ToggleButton value="bold" >
            <FormatBoldIcon/>
        </ToggleButton>
        <ToggleButton value="italic" >
            <FormatItalicIcon/>
        </ToggleButton>
        <ToggleButton value="underlined" >
            <FormatUnderlinedIcon/>
        </ToggleButton>
        <ToggleButton value="color" disabled >
            <FormatColorFillIcon/>
            <ArrowDropDownIcon/>
        </ToggleButton>
    </ToggleButtonGroup>
  );
}