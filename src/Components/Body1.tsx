import { useState, useRef, useEffect, ChangeEvent } from "react";

import { Box, Button, Input, Text, Checkbox, Select } from "@chakra-ui/react";
import { useForm, SubmitHandler, Controller } from "react-hook-form";

type InputFormType = {
  isim: string;
  soyIsim: string;
  yas: number;
};

export const Body1 = () => {
  const [popupigosteriyormu, popupgoster] = useState(false);

  const {
    control,
    register,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm<InputFormType>();

  const onSubmit: SubmitHandler<InputFormType> = (data) => {

    const yazi = data.isim + data.soyIsim + data.yas
  
    return console.log('');
  };

  let veri1 = 0;

  const veri1degistir = () => {
    veri1 = veri1 + 5;
  };

  return (
    <>
      <Button onClick={() => popupgoster(!popupigosteriyormu)}>
        Popup Degistir
      </Button>

      <Button onClick={() => veri1degistir()}>veri1degistir fonksiyonu</Button>

      <Text>Icerik</Text>

      <form onSubmit={handleSubmit(onSubmit)}>
        <Controller
          control={control}
          name="isim"
          render={({ field: { onChange, onBlur, value } }) => (
            <Input
              onChange={onChange} // send value to hook form
              value={value}
            />
          )}
        />

        <Controller
          control={control}
          name="soyIsim"
          render={({ field: { onChange, onBlur, value } }) => (
            <Input
              onChange={onChange} // send value to hook form
              value={value}
            />
          )}
        />

        <Button type="submit">Gönder Tuşu</Button>
      </form>

      {popupigosteriyormu == true ? (
        <Box>Popupi Gösteriyor</Box>
      ) : (
        <Box>Popupi Göstermiyor</Box>
      )}
    </>
  );
};
