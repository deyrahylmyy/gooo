import React from 'react';
import { Link } from 'react-router-dom';
import {Button, Container, MainHeading} from '../../globalStyle';
import { HeroVideo, HeroSection, HeroText, ButtonWrapper, HeroButton} from './HeroStyles';




const Hero = () => {
  return (
    <HeroSection>
        <HeroVideo src="./assets/hero.mp4" autoPlay muted />
        <Container>
            <MainHeading>PT. RAF TIGA ENAM SEMBILAN</MainHeading>
            <HeroText>
            - Dinamis dan penuh solusi, kami adalah perusahaan media teknologi yang berusaha untuk yang terbaik dan ingin memahami apa yang diinginkan klien. Kami menawarkan solusi TI untuk membantu Anda menghadapi masa depan dan bersiap menghadapi hal yang tidak terduga.
            </HeroText>
            <ButtonWrapper>
                <Link to='signup'>
                    <Button>Get Started</Button>
                </Link>
                <HeroButton>Find More</HeroButton>
            </ButtonWrapper>
        </Container>
    </HeroSection>
  )
}

export default Hero