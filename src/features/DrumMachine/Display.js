import { Card, CardContent, Typography } from "@mui/material";

function Display({ sound }) {
  return (
    <Card>
      <CardContent>
        <Typography variant="body1" id="display">
          {sound}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default Display;
