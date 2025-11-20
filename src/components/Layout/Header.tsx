import {
	defaultPadding,
	headerBackgroundColor,
} from "../../utils/globalVariables";
import "../../css/Header.css";
import { Box, Typography } from "@mui/material";
import makeUpImage from "../../assets/images/makeup_second.png";

const Header = () => {
	return (
		<div
			style={{
				padding: defaultPadding,
				backgroundColor: headerBackgroundColor,
				display: "flex",
				alignContent: "center",
			}}>
			<Box sx={{ display: "flex", alignItems: "center" }}>
				<img
					src={makeUpImage}
					alt="logo"
					style={{
						width: "45px",
						height: "45px",
						objectFit: "contain",
					}}
				/>
				<Typography
					variant="h5"
					fontWeight="bolder"
					className="header-brand-name">
					Anamika Mallick Makeover
				</Typography>
			</Box>
		</div>
	);
};

export default Header;
