
import { 
  Box,
  Heading,
  Input,
  Button,
  Divider,
  Select,
  Text
} from '@chakra-ui/react'
import Ilustration from './components/Ilustration'
import { useState } from 'react'


function App() {
  const [nominal, setNominal] = useState("");
  const [from, setFrom] = useState("USD");
  const [to, setTo] = useState("IDR");
  const [result, setResult] = useState<string | null>(null);

  const handleNominal = (e : React.ChangeEvent<HTMLInputElement>) => {
    const valueNominal = e.target.value
    setNominal(valueNominal);
  }

  const handleFrom = (e: React.ChangeEvent<HTMLSelectElement>) =>{
    const valueFrom = e.target.value
    setFrom(valueFrom)
  }

  const handleTo = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const valueTo = e.target.value
    setTo(valueTo)
  }

  const handleConvert = () => {
    if (from === "USD") {
      if (to === "USD") {
        const calculateResult = Number(nominal);
        setResult(`$ ${calculateResult.toLocaleString('US')}`);
      } else if (to === "IDR") {
        const calculateResult = Number(nominal) * 15000;
        setResult(`Rp. ${calculateResult.toLocaleString('id-ID')}`);
      } else if (to === "EUR") {
        const calculateResult = Number(nominal) * 0.85; // Ubah nilai konversi sesuai dengan nilai tukar aktual
        setResult(`€ ${calculateResult.toLocaleString('de-DE')}`);
      } else if (to === "GBP") {
        const calculateResult = Number(nominal) * 0.73; // Ubah nilai konversi sesuai dengan nilai tukar aktual
        setResult(`£ ${calculateResult.toLocaleString('en-GB')}`);
      }
    }
  
    if (from === "IDR") {
      if (to === "USD") {
        const calculateResult = Number(nominal) / 15000;
        setResult(`$ ${calculateResult.toLocaleString('US')}`);
      } else if (to === "IDR") {
        const calculateResult = Number(nominal);
        setResult(`Rp. ${calculateResult.toLocaleString('id-ID')}`);
      } else if (to === "EUR") {
        const calculateResult = Number(nominal) / 17800; // Ubah nilai konversi sesuai dengan nilai tukar aktual
        setResult(`€ ${calculateResult.toLocaleString('de-DE')}`);
      } else if (to === "GBP") {
        const calculateResult = Number(nominal) / 22000; // Ubah nilai konversi sesuai dengan nilai tukar aktual
        setResult(`£ ${calculateResult.toLocaleString('en-GB')}`);
      }
    }
  
    if (from === "EUR") {
      if (to === "USD") {
        const calculateResult = Number(nominal) / 0.85; // Ubah nilai konversi sesuai dengan nilai tukar aktual
        setResult(`$ ${calculateResult.toLocaleString('US')}`);
      } else if (to === "IDR") {
        const calculateResult = Number(nominal) * 17800; // Ubah nilai konversi sesuai dengan nilai tukar aktual
        setResult(`Rp. ${calculateResult.toLocaleString('id-ID')}`);
      } else if (to === "EUR") {
        const calculateResult = Number(nominal);
        setResult(`€ ${calculateResult.toLocaleString('de-DE')}`);
      } else if (to === "GBP") {
        const calculateResult = Number(nominal) * 0.86; // Ubah nilai konversi sesuai dengan nilai tukar aktual
        setResult(`£ ${calculateResult.toLocaleString('en-GB')}`);
      }
    }
  
    if (from === "GBP") {
      if (to === "USD") {
        const calculateResult = Number(nominal) / 0.73; // Ubah nilai konversi sesuai dengan nilai tukar aktual
        setResult(`$ ${calculateResult.toLocaleString('US')}`);
      } else if (to === "IDR") {
        const calculateResult = Number(nominal) * 22000; // Ubah nilai konversi sesuai dengan nilai tukar aktual
        setResult(`Rp. ${calculateResult.toLocaleString('id-ID')}`);
      } else if (to === "EUR") {
        const calculateResult = Number(nominal) / 0.86; // Ubah nilai konversi sesuai dengan nilai tukar aktual
        setResult(`€ ${calculateResult.toLocaleString('de-DE')}`);
      } else if (to === "GBP") {
        const calculateResult = Number(nominal);
        setResult(`£ ${calculateResult.toLocaleString('en-GB')}`);
      }
    }
  }
  

  return (
    <Box background={'indigo'} padding={'20px'} display={'flex'} justifyContent={'center'} w={'full'} height={'full'} color={'white'}>
      <Box>
        <Heading textAlign={'center'} my={'30px'}>Currency Converter</Heading>
        <Ilustration/>
        <Box display={'flex'} gap={'10px'} flexWrap={'wrap'}>
          <Input
            type='number'
            variant='nostyle'
            placeholder='Nominals'
            value={nominal}
            color={'green'}
            fontWeight={'bold'}
            onChange={handleNominal}
          />
          <Select 
            background={'white'} 
            color={'black'} 
            textAlign={'center'}
            value={from}
            onChange={handleFrom}
            >
            <option>USD</option>
            <option>EUR</option>
            <option>GBP</option>
            <option>IDR</option>
          </Select>
          <Select 
            background={'white'} 
            color={'black'} 
            textAlign={'center'}
            value={to}
            onChange={handleTo}
            >
            <option>USD</option>
            <option>EUR</option>
            <option>GBP</option>
            <option>IDR</option>
          </Select>
          <Box display={'flex'}>
            <Box>
              <Button 
              colorScheme='green'
              onClick={handleConvert}
              >Convert</Button>
            </Box>
          </Box>
        </Box>
        <Box my={'20px'}>
           <Box my={'10px'}>
              <Text>Hasil</Text>
              <Box bg={'purple.500'} padding={'20px'} borderRadius={'md'}>
                <Heading>{result}</Heading>
              </Box>
           </Box>
        </Box>
        <Divider/>
        <Box my={'80px'} textAlign={'center'}>Powered By Marihots</Box>
      </Box>
    </Box>
  )
}

export default App
