import Typography from '@mui/material/Typography';

const TypoButtons = () => {
    return (
        <div>
            <Typography variant="h3" color="turquoise" align='center'>try try header try</Typography>

            <Typography variant="body1" color="violet" align='center'>this is a p element</Typography>

            <Typography variant="body2" color="#dc909c" align='center'>this is a p element</Typography>

            <Typography 
                variant="subtitle1" 
                align='center'
                sx={{ color: "blue", backgroundColor: "tomato", p: 2, m: 3 }}
            >
                this is a p element
            </Typography>

            {/* h6 */}
            <Typography variant="subtitle2" align='center'>this is a p element</Typography>

            {/* span */}
            <Typography variant="button" align='center'>this is a button element</Typography>

            <div>
            {/* span */}
            <Typography variant="caption" align='center'>this is a caption element</Typography>
            </div>
        </div>
    )
};

export default TypoButtons;