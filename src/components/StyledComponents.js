import React from "react"
import styled from "styled-components"
import Tabs from "@material-ui/core/Tabs"
import Tab from "@material-ui/core/Tab"
import { withStyles } from "@material-ui/core/styles"
import { Title } from "@gnosis.pm/safe-react-components"

export const AssetInfo = styled.div`
	display: flex;
	flex-direction: column;
	align-items: left;
	width: 100%;
	> * {
		display: flex;
		width: 100%;
		justify-content: space-between;
	}
`

export const ButtonContainer = styled.div`
	display: flex;
	justify-content: space-around;
	margin-top: 15px;
`

export const JustifyLeft = styled.div`
	display: flex;
	justify-content: left;
`

export const JustifyCenter = styled.div`
	display: flex;
	justify-content: center;
`

export const SelectContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: left;
	justify-content: left;
	margin-bottom: 15px;
	*:first-child {
		margin-right: 5px;
	}
`

export const StyledTabs = withStyles({
	root: {
		paddingBottom: 20,
	},
	indicator: {
		backgroundColor: "#008C73",
	},
})(Tabs)

export const StyledTab = withStyles((theme) => ({
	root: {
		textTransform: "none",
		minWidth: 72,
		fontWeight: theme.typography.fontWeightRegular,
		fontSize: 16,
		marginRight: theme.spacing(4),
		fontFamily: "Averta",
		"&:hover": {
			color: "#005546",
			opacity: 1,
		},
		"&$selected": {
			color: "#008C73",
			fontWeight: theme.typography.fontWeightMedium,
		},
		"&:focus": {
			color: "#008C73",
		},
	},
}))((props) => <Tab disableRipple {...props} />)

export const StyledTitle = styled(Title)`
	margin-top: 0px;
`

export const WrapperLeft = ({ children }) => (
	<JustifyLeft>
		<div>{children}</div>
	</JustifyLeft>
)

export const WrapperCenter = ({ children }) => (
	<JustifyCenter>
		<div>{children}</div>
	</JustifyCenter>
)
