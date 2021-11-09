import React from 'react';
import { Box } from '@creditas-ui/layout';
import { Image, Title, Description, Button } from './Spotlight.style';
import ballonImg from './assets/balloon.webp';

const Spotlight = () => {
  return (
    <Box>
      <Image src={ballonImg} alt="Status" />
      <Title
        color="neutral.90"
        variant={{
          _: 'headingMdRegular',
          '5xl': 'headingXlLight',
        }}
      >
        Empréstimo para você conquistar mais
      </Title>

      <Description color="neutral.60" variant="bodyMdRegular">
        Use seu imóvel, carro ou salário como garantia e tenha a menor taxa do
        mercado.
      </Description>

      <Button
        size="large"
        width="flexible"
        aria-label="Simular agora"
        onClick={() => null}
      >
        Simular agora
      </Button>
    </Box>
  );
};

export { Spotlight };
