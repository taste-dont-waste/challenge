import { Box, CircularProgress } from "@mui/material";
import { Newspaper } from "@mui/icons-material";

export const ChallengeLoadingIndicator = () => {
  return (
    <Box display="flex" flexDirection="column" alignItems="center">
      <Box position="relative" display="inline-flex">
        <CircularProgress size={200} />
        <Box
          top={0}
          left={0}
          bottom={0}
          right={0}
          position="absolute"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <Newspaper color="primary" style={{ fontSize: 140 }} />
        </Box>
      </Box>
    </Box>
  );
};
