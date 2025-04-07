"use client"
import React, { useEffect, useState } from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import BookingHistoryList from './_components/BookingHistoryList'
import GlobalApi from '@/app/_services/GlobalApi'
import { useSession } from 'next-auth/react'
import moment from 'moment'


function MyBooking() {

  const {data}=useSession();
  const [bookingHistory,setBookingHistory] = useState([]);

  useEffect(()=>{
    data&&GetUserBookingHistory();
  },[data])

  const GetUserBookingHistory=()=>{
    GlobalApi.GetUserBookingHistory(data.user.email).then(resp=>{
      // console.log(resp);
      setBookingHistory(resp.bookings);
    })
  }

  const filterData=(type)=>{
    const result =bookingHistory.filter(item=>
      type=='booked'?
      new Date(item.date)>=new Date()
    :new Date(item.date)<=new Date());

    return result;
  }

  return (
    <div className='my-10 mx-3 md:mx-36'>
      <h2 className='font-bold text-[20px] my-4'>My Bookings</h2>
      <Tabs defaultValue="booked" className="w-full">
        <TabsList className="flex gap-2">
          <TabsTrigger value="booked" className="text-gray-500 bg-gray-200  data-[state=active]:bg-[#087cfb] data-[state=active]:text-white rounded-md">Booked</TabsTrigger>
          <TabsTrigger value="completed" className="text-gray-500 bg-gray-200 data-[state=active]:bg-[#087cfb] data-[state=active]:text-white rounded-md">Completed</TabsTrigger>
        </TabsList>
        <TabsContent value="booked">
          <BookingHistoryList bookingHistory={filterData('booked')}/>
          </TabsContent>
        <TabsContent value="completed">
          <BookingHistoryList bookingHistory={filterData('completed')}/>
          </TabsContent>
      </Tabs>

    </div>
  )
}

export default MyBooking
