'use client';
import {Carousel, CarouselContent, CarouselItem} from '@/components/ui/carousel';
import Image from 'next/image';
import cat from '@/assets/cat.jpg';
import n from '@/assets/n.jpg';
import nayeon from '@/assets/nayeon.jpg';
import Autoplay from 'embla-carousel-autoplay';

export default function HomeCarousel() {
  return (
    <div className='flex items-center justify-center'>
      <Carousel
        className='grow'
        plugins={[
          Autoplay({
            delay: 1000,
            stopOnFocusIn: false,
            stopOnInteraction: false
          })
        ]}
        opts={{
          align: 'center',
          loop: true
        }}>
        <CarouselContent>
          {Array.from({length: 5}).map((_, index) => {
            let image = n;
            if (index % 2 === 0) image = cat;
            else if (index % 3 === 0) image = nayeon;
            return (
              <CarouselItem
                key={index}
                className=''>
                <Image
                  src={image}
                  alt='Picture of Cat'
                  className='h-[25rem] w-full cursor-pointer rounded-sm'
                  priority
                />
              </CarouselItem>
            );
          })}
        </CarouselContent>
      </Carousel>
    </div>
  );
}
