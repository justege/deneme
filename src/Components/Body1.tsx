import { useState, useRef, useEffect } from "react";

import { Box, Button, Text } from "@chakra-ui/react";



export const Body1 = () => {

  const [popupigosteriyormu, popupgoster] = useState(false);
  const [sayi, sayidegistir] = useState(0);
  const icerik = useRef(0)
  let veri1 = 0;

  useEffect(() => {
    icerik.current = icerik.current + 5  
  })



  const veri1degistir = () => {
    veri1 = veri1 + 5;

    icerik.current = icerik.current + 5    
  };

  // Degişmediği haline = initialState

  return (
    <>
      <Button onClick={() => popupgoster(!popupigosteriyormu)}>
        Popup Degistir
      </Button>

      <Button onClick={() => veri1degistir()} >

        veri1degistir fonksiyonu
      </Button>

      <Text>
        Icerik
      </Text>

      <Box mt={4}>{icerik.current}</Box>

      {popupigosteriyormu == true ? (
        <Box>Popupi Gösteriyor</Box>
      ) : (
        <Box>Popupi Göstermiyor</Box>
      )}
    </>
  );
};
