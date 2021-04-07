import React, {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import {makeStyles} from "@material-ui/core/styles";
import {postUrl} from "../../store/actions/shortenLinkActions";

const useStyle = makeStyles({
	root: {
		textAlign: 'center'
	},
	marginBottom: {
		marginBottom: '30px'
	},
	link: {
		textDecoration: "underline",
		cursor: 'pointer'
	}
});

const Home = () => {
	const dispatch = useDispatch();
	const state = useSelector(state => state.data);
	const [originalValue, setOriginalValue] = useState('');
	const classes = useStyle();

	const changeHandler = e => {
		setOriginalValue(e.target.value);
	};

	const submitLink = (e) => {
		e.preventDefault();
		const link = {originalLink: originalValue};

		dispatch(postUrl(link));
	};

	return (
		<Container maxWidth="md" className={classes.root}>
			<Grid container direction="column">
				<Typography variant="h2" className={classes.marginBottom}>
					Shorten your link!
				</Typography>
				<Grid item className={classes.marginBottom}>
					<form onSubmit={submitLink}>
						<TextField
							variant="outlined"
							label="Enter URL here"
							value={originalValue}
							onChange={changeHandler}
							fullWidth
							className={classes.marginBottom}
						/>
						<Button
							type="submit"
							variant="outlined"
							color="primary"
						>
							Shorten!
						</Button>
					</form>
				</Grid>
				<Grid item>
					<Typography className={classes.marginBottom}>
						Your link now looks like this:
					</Typography>
					<a
						target="_blank"
						href={`http://localhost:8000/${state.shortLink}`}
					>{state.shortLink}</a>
				</Grid>
			</Grid>
		</Container>
	);
};

export default Home;