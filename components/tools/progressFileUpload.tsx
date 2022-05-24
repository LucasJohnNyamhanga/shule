import * as React from 'react';
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';

type dataProgress = {
    data:number
}

export default function LinearBuffer({data}:dataProgress) {
  const [progress, setProgress] = React.useState(0);
  const [buffer, setBuffer] = React.useState(10);

    React.useEffect(() => {
        setProgress(data);
        setBuffer(data + 12);
    },[data])

  return (
    <Box sx={{ width: '100%' }}>
      <LinearProgress variant="buffer" value={progress} valueBuffer={buffer} />
    </Box>
  );
}
