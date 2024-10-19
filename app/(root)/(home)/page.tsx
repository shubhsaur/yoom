'use client';

import MeetingTypeList from '@/components/MeetingTypeList';
import { useGetCalls } from '@/hooks/useGetCalls';

const Home = () => {

  const { upcomingCalls } = useGetCalls();

  const upcomingCallTime = upcomingCalls.map((call) => call?.state?.startsAt).sort((a, b) => (a as any) - (b as any))[0];

  const now = new Date();
  const time = now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });
  const date = (new Intl.DateTimeFormat('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }).format(now));
  return (
    <section className='flex size-full flex-col gap-10 text-white'>
        <div className='h-[300px] w-full rounded-[20px] bg-hero bg-cover'>
          <div className='flex h-full flex-col justify-between max-md:px-5 max-md:py-8 lg:p-11'>
            <h2 className='glassmorphism max-w-[420px] rounded py-2 text-center text-base font-normal'>
              {upcomingCallTime ? `Upcoming Meeting at: ${upcomingCallTime?.toLocaleString([], {year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute:'2-digit'})}` : 'No Upcoming Meetings'}
            </h2>
            <div className="flex flex-col gap-2">
              <h1 className='text-4xl font-extrabold lg:text-7xl'>
                {time}
              </h1>
              <p className='text-lg font-medium text-sky-1 lg:text-2xl'>{date}</p>
            </div>
          </div>
        </div>

        <MeetingTypeList />

    </section>
  )
}

export default Home