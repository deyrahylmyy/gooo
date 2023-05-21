import React from 'react';

import { BsArrowsAngleContract, BsCloudMinusFill, BsFillShieldLockFill, BsGearWideConnected, BsPeopleFill } from 'react-icons/bs';
import { IoIosOptions } from 'react-icons/io';
import { AiOutlineCloudUpload } from 'react-icons/ai';
import { BiSupport, BiDollar, BiNetworkChart, BiIntersect, BiMovie, BiCameraMovie, BiMicrophone } from 'react-icons/bi';
import { GrConnectivity, GrHostMaintenance, GrNetwork, GrOrganization } from 'react-icons/gr';
const iconStyle = (Icon) => <Icon size="3rem" color="#0f0f0f" />;

export const featuresData = [
	{
		name: 'SAYAGINET',
		description: '•	Provider Jaringan Internet dengan nama Sayaginet dalam payung hukum PT. Kataji Nukami Indonesia. Sudah memiliki ……….. pelanggan setia sejak…., perkembangan pelanggan tiap tahun sebesar ……… %. •	Provider Jaringan Internet dengan nama Sayaginet dalam payung hukum PT. Kataji Nukami Indonesia. Sudah memiliki ……….. pelanggan setia sejak…., perkembangan pelanggan tiap tahun sebesar ……… %',
		icon: iconStyle(BiNetworkChart),
		imgClass: 'one',
	},
	{
		name: 'RAF Media',
		description: 'dengan nama RAFMedia dalam naungan payung hukum PT. RAF369, yang menaungi berbagai Digital Media Publishing yang spesifik mengulas aneka konten yang dibutuhkan masyarakat. Karenanya RAFMedia mengusung tagline Conecting The Dot.',
		icon: iconStyle(BiIntersect),
		imgClass: 'two',
	},
	{
		name: 'RAF Digital TV',
		description: 'dengan nama RAFMediaTV mengusung tagline Conecting The Dot, berkolaborasi dengan 67 TV Digital yang bernaung dalam Asosiasi Televisi Siaran Digital Indonesia.',
		icon: iconStyle(BiCameraMovie),
		imgClass: 'three',
	},
	{
		name: 'RAF EO',
		description: 'dengan Nama RAFEvent, yang siap mengkonsep hingga menjalankan event yang dibutuhkan klien baik offair maupun on air, mulai dari event marketing, CSR, PR, campign.',
		icon: iconStyle(GrOrganization),
		imgClass: 'four',
	},
	{
		name: 'RAF Consulting',
		description: 'dengan nama RAFConsulting, siap memberikan analisis data digital hingga pembuatan konsep program digital untuk maksud dan tujuan tertentu yang diinginkan klien, juga eksekusinya',
		icon: iconStyle(BsPeopleFill),
		imgClass: 'five',
	},
	{
		name: 'RAF Agency',
		description:
			'dengan nama RAFAgency, selalu memberikan yang terbaik bagi klien, karena kami memiliki usser dan network luas juga beragam',
		icon: iconStyle(BsArrowsAngleContract),
		imgClass: 'six',
	},
	{
		name: 'RAF Influence',
		description:
			'dengan nama RAFInfluence, menaungi creator dan influncer berkreasi dalam payung hukum yang legal.',
		icon: iconStyle(BiMicrophone),
		imgClass: 'seven',
	},
];