import { Box, Grid, IconButton, Typography } from "@mui/material";
import "../../css/Footer.css";
import Copyright from "../../common/components/Copyright";
import Instagram from "@mui/icons-material/Instagram";
import {
	commonMarginTop,
	primaryColor,
	primaryHoverBackgroundColor,
	primaryHoverColor,
} from "../../utils/globalVariables";
// import flowerDesign from "../../assets/flower_designs/flower_design_first.svg";

const FooterLeftSection = () => {
	return (
		<Box sx={{ textAlign: "center" }}>
			<Typography
				variant="h6"
				fontWeight="bolder"
				className="footer-brand-name">
				Anamika Mallick
			</Typography>
			<Typography sx={{ mt: commonMarginTop }} className="font-cursive">
				Excited to create flawless looks for all our gorgeous clients on their
				most special days.
			</Typography>
			<Box
				sx={{
					mt: commonMarginTop,
					display: "flex",
					justifyContent: "center",
					width: "100%",
				}}>
				<IconButton
					sx={{
						background: "white",
						width: 45,
						height: 45,
						borderRadius: "50%",
						display: "flex",
						alignItems: "center",
						justifyContent: "center",
						"&:hover": {
							background: primaryHoverBackgroundColor,
						},
						"&:hover .MuiSvgIcon-root": {
							color: primaryHoverColor,
						},
					}}>
					<Instagram sx={{ color: primaryColor }} />
				</IconButton>
			</Box>
		</Box>
	);
};

const FooterRightSection = () => {
	return (
		<Box sx={{ textAlign: "center" }}>
			<Typography
				variant="h6"
				fontWeight="bolder"
				className="footer-brand-name">
				Contact
			</Typography>
			<Typography sx={{ mt: commonMarginTop }} className="font-cursive">
				makeoverByAnamika@gmail.com
			</Typography>
			<Typography sx={{ mt: commonMarginTop }}>
				Address area, gali number, blah blah blah, delhi, 110092.
			</Typography>
		</Box>
	);
};

const FooterUpperSection = () => {
	return (
		<Box
			sx={{ paddingLeft: 2, paddingRight: 2, paddingTop: 8, paddingBottom: 8 }}>
			<Grid
				container
				direction={{ xs: "column", sm: "row" }}
				spacing={4}
				alignItems="center"
				justifyContent="space-around">
				<Grid>
					<FooterLeftSection />
				</Grid>
				<Grid>
					<FooterRightSection />
				</Grid>
			</Grid>
		</Box>
	);
};

const Footer = () => {
	return (
		<Box className="footer-area">
			{/* <Box sx={{ width: "100%", display: "flex", justifyContent: "center" }}>
				<img src={flowerDesign} alt="flower design" />
			</Box> */}
			{/* Upper Section  */}
			<FooterUpperSection />
			{/* Lower Copyright Section  */}
			<Copyright />
		</Box>
	);
};

export default Footer;
