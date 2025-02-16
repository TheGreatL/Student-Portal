import {Carousel, CarouselContent, CarouselItem} from '@/components/ui/carousel';
import Image from 'next/image';
import cat from '../public/cat.jpg';

export default function HomeCarousel() {
  return (
    <div className='flex items-center justify-center'>
      <Carousel
        className='grow'
        opts={{
          align: 'center',
          loop: true
        }}>
        <CarouselContent>
          {Array.from({length: 5}).map((_, index) => (
            <CarouselItem
              key={index}
              className=''>
              <Image
                src={cat}
                alt='Picture of Cat'
                className='h-[25rem] w-full cursor-pointer rounded-sm'
              />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
}
