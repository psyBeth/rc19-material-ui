import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
// import { Button, Stack } from '@mui/material'; //? seperate for better performance
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

const TypoButtons = () => {
    return (
        <>
            <Box
                component={"section"}
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-end",
                    border: "1px solid red",
                    p: 2,
                    m: 6
                }}
            >
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
            </Box>

            <Stack 
                direction={"row"} 
                mt={4} 
                rowGap={2} 
                columnGap={1}
                justifyContent={"center"} 
                flexWrap={"wrap"}
            >
                <Button variant='text'>Text</Button>
                <Button variant='contained' color='secondary'>Contained</Button>
                <Button variant='outlined' color='error'>Outlined</Button>
                <Button variant='outlined' color='success'>Outlined</Button>
                <Button variant='outlined' color='warning'>Outlined</Button>
                <Button variant='contained' sx={{backgroundColor: "#bede", color: "black"}} >Contained</Button>
                {/* previous one can be done with theme settings */}

                <Button variant='contained' sx={{backgroundColor: "error.main"}} >Contained</Button>
            </Stack>
        </>
    )
};

export default TypoButtons;