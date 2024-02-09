import SliderFlex from '../components/index/slider/Slider-flex';
import { Swiper, SwiperSlide } from "swiper/react";
import BoxProduct from '../components/products/box-product';
import BoxTeamSlide from '../components/index/box-teams/box-team_slide';
import SliderFlexContainer from '../components/index/slider/Slider-flex_container';
import {times_data} from '../data/times'
import { useEffect,useState } from 'react';
import { useRouter } from 'next/router'
import Image from 'next/image';
import step1 from '../public/images/teams/step-1.svg'
import step2 from '../public/images/teams/step-2.svg'
import step3 from '../public/images/teams/step-3.svg'
import Link from 'next/link';
import Button from '../components/buttons/button';

export default function Times () {

    const [currentTime,setCurrentTime] = useState(times_data.times[0])

    const getFormatTitle = (text) => {
      return text.toLowerCase().replace(' ','-')
    }

    const router = useRouter()

    useEffect(() => {
      const {selec} = router.query

      times_data.times.forEach((time) => {
        if(getFormatTitle(time.title) === selec){
          setCurrentTime(time)
        }
      })
    },[router.query])

    const slideChange = (swi) => {
      let index = swi.realIndex

      let new_time = times_data.times[index]

      setCurrentTime(new_time)
    }
    return(
        <>
        <section className="section-times_header pt-5 first-section">
            <div className="container">
                <div className='section-teams_header d-md-flex gap-5 align-items-center' style={{zIndex:1}}>
                    <p className="title-2 font-faster"><span className='title-marked title-times'>Times</span></p>
                </div>

                <section className='section-products mx-auto'>
                <SliderFlexContainer
                onSlideChange={slideChange}
                clase='section-products_slide slide'>

                    {(times_data.times.map((time) => {

                      return (
                        <SwiperSlide>
                          <BoxTeamSlide
                          title={time.title}
                          image={time.imglogo}
                          clase={(getFormatTitle(time.title) == getFormatTitle(currentTime.title)) ? 'box-team_slide_active' : 'box-team_slide'}
                          >
                          </BoxTeamSlide>
                        </SwiperSlide>
                      )
                    }))}
                    
                </SliderFlexContainer>
                </section>
            </div>
        </section>

        <section className='d-md-flex flex-column py-5 justify-content-center'>
          <div className='d-flex flex-row justify-content-center'>
            <div className='box-skew_times box-skew-responsive'>
              <div className="content-left" style={{paddingTop:'32px',paddingBottom:'32px'}}>
                <p className="title-3"><span className='title-marked2'>O que é</span></p>
                <p>{currentTime.text1}</p>
              </div>
              <div className='box-skew_left_times box-skew-responsive-left' style={{height:'180px'}}></div>
            </div>

            <div className='box-skew_times hide-responsive mt-5 times-image' style={{ background: `no-repeat url(${currentTime.img.src})`}}>
            </div>
          </div>
 
        <div className='box-steps container box-steps-responsive'>
            {currentTime.steps.map((step,i) => {

                let stepnumber = step1

                if(i+1 == 2){
                  stepnumber = step2
                }
                if(i+1 == 3){
                  stepnumber = step3
                }
              return (
                <div className='step-box'>
                  <div className='step-number'>
                    <Image src = {stepnumber} />
                  </div>
                  <div className='step-text'>
                    {step.text}
                  </div>
                </div>
              )
            })}
        </div>

        <div className='d-flex justify-content-center mt-5'>
          <div>
            <Button 
            link={'/inscricao'}
            type='button-primary text-center'
            text={currentTime.buttontext}
            secondSize={true}
            ></Button>
          </div>

        </div>
        </section>
        </>
    )
}