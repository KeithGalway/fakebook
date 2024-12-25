import { Box, useMediaQuery } from '@mui/material'
import { useSelector } from 'react-redux'
import Navbar from '../navbar/index'
import UserWidget from 'scenes/widgets/UserWidget'


const HomePage = () => {
    const isNonMobileScreens = useMediaQuery('(min-width:1000px')
    // const { _id, picturePath } = useSelector((state) => state.user) 

    return (
        <Box>
            <Navbar />
            <Box>
                <UserWidget />
            </Box>
        </Box>
    )
}

export default HomePage