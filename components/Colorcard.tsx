"use client";

import {
  Card,
  CardContent,
  Box,
  Typography,
  IconButton,
  Tooltip,
} from "@mui/material";

import ContentCopyIcon from "@mui/icons-material/ContentCopy";

interface ColorCardProps {
  color: string;
}

export default function ColorCard({ color }: ColorCardProps) {
  const handleCopy = async () => {
    await navigator.clipboard.writeText(color);
  };

  return (
    <Card
      sx={{
        width: 260,
        borderRadius: 3,
        overflow: "hidden",
        boxShadow: 3,
      }}
    >
      {/* Color Preview */}
      <Box
        sx={{
          height: 380,
          backgroundColor: color,
        }}
      />

      {/* Color Information */}
      <CardContent
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          py: 1.5,
        }}
      >
        <Box>
          <Typography
            variant="body1"
            sx={{ fontWeight: 600 }}
          >
            {color}
          </Typography>

          <Typography
            variant="caption"
            color="text.secondary"
          >
            HEX Color
          </Typography>
        </Box>

        <Tooltip title="Copy Color">
          <IconButton onClick={handleCopy}>
            <ContentCopyIcon />
          </IconButton>
        </Tooltip>
      </CardContent>
    </Card>
  );
}