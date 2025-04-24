import React from "react";
import { Box, Typography, Stack, IconButton } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const Footer: React.FC = () => {
  return (
    <Box
      component="footer"
      className="profile"
      sx={{
        color: "white", // text-white
        fontSize: "clamp(14px, 3vw, 20px)", // Text font size stays the same (dynamic)
        px: 4,
        pl: { sm: "220px" },
        pt: "60px",
        pb: "40px",
        mt: "20px",
        display: "flex", 
        justifyContent: "space-between", 
        alignItems: "center", // Vertically center the items
      }}
    >
      <Typography sx={{ mb: 2, mt:2, opacity: "60%"}}>
        © Isiah Jordan Dimaunahan, 2025 — Built with React and Tailwind.
      </Typography>

      <Stack
        direction="row"
        spacing={1} // This spacing matches the spacing for the text
        sx={{
          marginLeft: "auto",
          paddingRight: "20rem",
        }}
      >
        <IconButton
          aria-label="Facebook"
          href="https://facebook.com"
          target="_blank"
          fontSize="10000"
          sx={{
            color: "#a3a3a3",
            "&:hover": { color: "#8b5cf6" },
          }}
        >
        <FacebookIcon 
          sx={{
            fontSize: "3rem", 
          }} 
        />
        </IconButton>
        <IconButton
          aria-label="GitHub"
          href="https://github.com"
          target="_blank"
          sx={{
            color: "#a3a3a3",
            "&:hover": { color: "#8b5cf6" },
            fontSize: 100, 
          }}
        >
        <GitHubIcon
          sx={{
            fontSize: "3rem", 
          }}
        />
        </IconButton>
        <IconButton
          aria-label="LinkedIn"
          href="https://linkedin.com"
          target="_blank"
          sx={{
            color: "#a3a3a3",
            "&:hover": { color: "#8b5cf6" },
            fontSize: "2rem", // Proper icon size
          }}
        >
        <LinkedInIcon 
          sx={{
            fontSize: "3.5rem", 
          }} 
        />
        </IconButton>
      </Stack>
    </Box>
  );
};

export default Footer;

