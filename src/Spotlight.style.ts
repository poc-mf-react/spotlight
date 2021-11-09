import { ButtonPrimaryTextOnly } from '@creditas-ui/button';
import { styled } from '@creditas-ui/system';
import { Typography } from '@creditas-ui/typography';
import { media } from '@creditas-ui/utilities';

const Image = styled.img`
  margin-bottom: 64px;

  ${media.up('5xl')} {
    margin-bottom: 56px;
    max-height: 154px;
  }

  ${media.up('8xl')} {
    max-height: 100%;
  }
`;

const Title = styled(Typography)`
  margin-bottom: 16px;

  ${media.up('5xl')} {
    margin-bottom: 20px;
    white-space: pre-wrap;
  }
`;

const Description = styled(Typography)`
  margin-bottom: 32px;

  ${media.up('5xl')} {
    margin-bottom: 48px;
    white-space: pre-wrap;
  }
`;

const Button = styled(ButtonPrimaryTextOnly)`
  margin-bottom: 56px;

  ${media.up('5xl')} {
    margin-bottom: 0;
  }
`;

export { Image, Title, Description, Button };
