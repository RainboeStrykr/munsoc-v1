/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import Heading from '../Typography/heading';
import Paragraph from '../Typography/paragraph';
import Button from '../Buttons/button';
import Image from 'next/image';
function About() {
    return (
		<div className='p-24 container flex items-center justify-center w-full' data-test="about-section">
			<div className='w-[1120px] lg:w-full flex lg:flex-col-reverse items-center justify-between'>
				<div style={{'--image-url': `url('/img/about.jpg')`}} className='lg:mt-16 bg-[image:var(--image-url)] bg-center bg-cover w-[450px] h-[550px] sm:w-[100%] sm:h-[500px] rounded-[30px]' >
			</div>
				<div className='w-[600px] ml-10 lg:ml-0 lg:w-full lg:text-center'>
				<div className='flex items-center lg:justify-center'>
						<div className='text-lg sm:text-sm text-white font-semi-bold border-b-2 border-blue-400 mb-1'>About us</div>
					</div>
					<Heading typeStyle='heading-md' className='text-gradient lg:mt-10'>
					SRM MUN Society
					</Heading>
					<Paragraph typeStyle='body-lg' className="mt-6" textColor='text-gray-200' >
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam egestas cursus fringilla. Nulla facilisi. Nunc in metus et tellus dictum dictum. Proin et lectus nec purus porttitor ultricies. Morbi porttitor justo diam, vitae rhoncus libero hendrerit at. Duis molestie eros vel quam ultrices, quis efficitur diam pellentesque. Nunc faucibus orci quam, vitae laoreet nibh consectetur eget. Phasellus id viverra arcu.
					</Paragraph>
					<Paragraph  typeStyle='body-lg' className="mt-6" textColor='text-gray-200'>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus fringilla.					
					</Paragraph>
					<div className='mt-10 flex gap-4 sm:flex-col lg:justify-center' data-test="prospectus-download">
						<a
							className='flex justify-center'
							href='https://www.instagram.com/srm_munsoc/'
							target='_blank'
							rel='noreferrer'
						>
							<Button className='w-[200px]'>Follow us on Instagram</Button>
						</a>
						<a className='flex justify-center ' href='' download={`conf ${new Date().getFullYear()}.pdf`} >
							<Button overlay={true} className='w-[240px] border'>
								<div className='flex gap-2 justify-center items-center'>
									<Image src="/img/Download_icon.png" height={20} width={20} alt='Download-icon' objectFit='contain'  />
									<div>
										Conference Brochure
									</div>
								</div>
							</Button>
						</a>
					</div>
				</div>
			</div>
		</div>
		);
}

export default About