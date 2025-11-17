import { Box, Typography } from "@mui/material";

const Copyright = () => {
	return (
		<Box className="copyright-area">
			<Typography variant="subtitle1">
				{"Copyright © "}
				{new Date().getFullYear()}&nbsp;| Makeover by{" "}
				<span className="font-cursive">Anamika Mallick</span> | All right
				reserved.
			</Typography>
		</Box>
	);
};

export default Copyright;
