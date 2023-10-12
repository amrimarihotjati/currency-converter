import { Player } from "@lottiefiles/react-lottie-player"
import { Box } from '@chakra-ui/react'
 
export default function Ilustration() {
  return (
    <Box my={'30px'}>
        <Player
        autoplay
        loop
        src="https://assets-v2.lottiefiles.com/a/a4e49d1a-1168-11ee-8edc-27b92a8d27e5/PJ8RoxSwG7.json"
        style={{ height: '300px', width: '300px' }}>
        </Player>
    </Box>
  )
}
