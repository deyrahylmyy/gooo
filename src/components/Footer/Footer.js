import React from 'react';
import {
	FooterLinkItems,
	FooterLinkTitle,
	FooterLink,
	FooterLogo,
	SocialIcon,
	FooterRights,
	FooterSocialIcon,
	FooterWrapper,
	FooterAddress,
	FooterColumn,
<<<<<<< HEAD
<<<<<<< HEAD
	FooterGrid
=======
	FooterGrid,
>>>>>>> 60c466b (Add files via upload)
=======
	FooterGrid
>>>>>>> d2b498f (materi update-1)
} from './FooterStyles';
import { footerData, footerSocialData } from '../../data/FooterData';
import { Row, Section } from '../../globalStyle';

function Footer() {
	return (
		<Section padding="4rem 0 2rem 0">
			<FooterWrapper>
				<FooterGrid justify="space-between">
					<FooterColumn id="footerLogo">
						<FooterLogo to="/">
							<SocialIcon src="./assets/svg/logo1.svg" />
							RAF369
						</FooterLogo>
						<FooterAddress>
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> d2b498f (materi update-1)
						Jl. Sukamenak  No. 16, Bandung 40228.
						</FooterAddress>
						<FooterAddress>
						+62-8112-1223-69	
<<<<<<< HEAD
=======
						Jl. Sukamenak No. 16 
>>>>>>> 60c466b (Add files via upload)
=======
>>>>>>> d2b498f (materi update-1)
						</FooterAddress>

						<Row align="center" margin="auto  0 0 0" gap="1rem">
							{footerSocialData.map((social, index) => (
								<FooterSocialIcon
									key={index}
									href="/"
									target="_blank"
									aria-label={social.name}
								>
									{social.icon}
								</FooterSocialIcon>
							))}
						</Row>
					</FooterColumn>
					{footerData.map((footerItem, index) => (
						<FooterLinkItems key={index}>
							<FooterLinkTitle>{footerItem.title}</FooterLinkTitle>
							{footerItem.links.map((link, linkIndex) => (
								<FooterLink key={linkIndex} to="/">
									{link}
								</FooterLink>
							))}
						</FooterLinkItems>
					))}
				</FooterGrid>
				<FooterRights>by RAF369 © 2023</FooterRights>
			</FooterWrapper>
		</Section>
	);
}

export default Footer;
