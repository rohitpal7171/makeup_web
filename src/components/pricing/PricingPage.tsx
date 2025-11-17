import { Box, Typography } from "@mui/material";
import Footer from "../Layout/Footer";
import Header from "../Layout/Header";
import {
	commonMarginTop,
	primaryColor,
	primaryGreyColor,
} from "../../utils/globalVariables";
import makeUpImage from "../../assets/images/makeup_first.png";

const PricingCenterArea = () => {
	return (
		<Box
			sx={{
				m: 15,
				display: "flex",
				flexDirection: "column",
				alignItems: "center",
				justifyContent: "center",
				textAlign: "center",
				gap: 4,
				border: `1px solid ${primaryColor}`,
				p: 10,
				maxWidth: 400,
				borderRadius: 20,
				backgroundImage: `
    linear-gradient(rgba(255,255,255,0.9), rgba(255,255,255,0.8)),
    url(${makeUpImage})
`,
				backgroundSize: "cover",
				backgroundRepeat: "no-repeat",
				backgroundPosition: "center",
			}}>
			{/* Box for heading  */}
			<Box sx={{ width: "100%" }}>
				<Typography variant="h4" className="font-cursive" color={primaryColor}>
					Our Charges
				</Typography>
			</Box>
			{/* Box for Studio Charges  */}
			<Box sx={{ width: "100%" }}>
				<Typography variant="h6" className="font-sans-serif">
					Studio Charges
				</Typography>
				<Typography
					variant="body2"
					fontWeight={"bolder"}
					color={primaryGreyColor}
					sx={{ mt: commonMarginTop, mb: 1 }}>
					Main Event: <span style={{ color: "black" }}>40,000</span>
				</Typography>
				<Typography
					variant="body2"
					fontWeight={"bolder"}
					color={primaryGreyColor}
					sx={{ mb: 1 }}>
					Sec. Event: <span style={{ color: "black" }}>30,000</span>
				</Typography>
				<Typography
					variant="body2"
					fontWeight={"bolder"}
					color={primaryGreyColor}
					sx={{ mb: 1 }}>
					Non-Bridal: <span style={{ color: "black" }}>20,000</span>
				</Typography>
			</Box>
			{/* Box for Inclusion and Exclusion  */}
			<Box sx={{ width: "100%", mt: 4 }}>
				<Typography variant="h4" className="font-cursive" color={primaryColor}>
					Inclusions & Exclusions
				</Typography>
				<Typography variant="h6" className="font-sans-serif" sx={{ mt: 4 }}>
					Inclusions by Anamika Mallick
				</Typography>
				<Typography
					variant="body2"
					fontWeight={"bolder"}
					color={primaryGreyColor}
					sx={{ mt: commonMarginTop, mb: 1 }}>
					Makeup, Hair Styling, Draping, Mink/Silk False Eyelashes, Coloured
					Non-powered lenses, Nail Paint Change
				</Typography>
				<Typography variant="h6" className="font-sans-serif" sx={{ mt: 4 }}>
					Exlcusions for all Makeups
				</Typography>
				<Typography
					variant="body2"
					fontWeight={"bolder"}
					color={primaryGreyColor}
					sx={{ mt: commonMarginTop, mb: 1 }}>
					Hair Extensions, Hair Accessories, Flowers/ Gajra.
				</Typography>
				<Typography
					variant="body2"
					fontWeight={"bolder"}
					color={primaryGreyColor}
					sx={{ mt: commonMarginTop, mb: 1 }}>
					We do not have any provision for Nail Extensions and Nail Art at the
					studio.
				</Typography>

				<Typography
					variant="body2"
					fontWeight={"bolder"}
					color={primaryGreyColor}
					sx={{ mt: commonMarginTop, mb: 1 }}>
					Travel & Accommodation Extra for any Venue Makeup.
				</Typography>
			</Box>
		</Box>
	);
};

const PricingPage = () => {
	return (
		<div
			style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
			<Header />
			<Box sx={{ width: "100%", display: "flex", justifyContent: "center" }}>
				<PricingCenterArea />
			</Box>
			<Footer />
		</div>
	);
};

export default PricingPage;
