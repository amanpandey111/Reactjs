// import * as React from 'react';
// import FormatAlignLeftIcon from '@mui/icons-material/FormatAlignLeft';
// import FormatAlignCenterIcon from '@mui/icons-material/FormatAlignCenter';
// import FormatAlignRightIcon from '@mui/icons-material/FormatAlignRight';
// import FormatAlignJustifyIcon from '@mui/icons-material/FormatAlignJustify';
// import ToggleButton from '@mui/material/ToggleButton';
// import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
 
// export default function ToggleButtons() {
//   const [alignment, setAlignment] = React.useState('left');
 
//   const handleAlignment = (event, newAlignment) => {
//     setAlignment(newAlignment);
//   };

//   console.log(alignment);
 
//   return (
//     <ToggleButtonGroup
//       value={alignment}
//       exclusive
//       onChange={handleAlignment}
      
//     >
//       <ToggleButton value="left">
//         <FormatAlignLeftIcon />
//       </ToggleButton>
//       <ToggleButton value="center">
//         <FormatAlignCenterIcon />
//       </ToggleButton>
//       <ToggleButton value="right">
//         <FormatAlignRightIcon />
//       </ToggleButton>
//       <ToggleButton value="justify" disabled>
//         <FormatAlignJustifyIcon />
//       </ToggleButton>
//     </ToggleButtonGroup>
//   );
// }

import * as React from 'react';
import FormatAlignLeftIcon from '@mui/icons-material/FormatAlignLeft';
import FormatAlignCenterIcon from '@mui/icons-material/FormatAlignCenter';
import FormatAlignRightIcon from '@mui/icons-material/FormatAlignRight';
import FormatAlignJustifyIcon from '@mui/icons-material/FormatAlignJustify';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
 
export default function ToggleButtons() {
  const [alignment, setAlignment] = React.useState('left');
 
  const handleAlignment = (event, newAlignment) => {
    setAlignment(newAlignment);
  };

  console.log(alignment);
 
  return (
    <ToggleButtonGroup
      value={alignment}
      exclusive
      onChange={handleAlignment}
      
    >
      <ToggleButton value="left">
        <FormatAlignLeftIcon />
      </ToggleButton>
      <ToggleButton value="center">
        <FormatAlignCenterIcon />
      </ToggleButton>
      <ToggleButton value="right">
        <FormatAlignRightIcon />
      </ToggleButton>
      <ToggleButton value="justify" disabled>
        <FormatAlignJustifyIcon />
      </ToggleButton>
    </ToggleButtonGroup>
  );
}