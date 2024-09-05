"use client";

import Image from "next/image";

const Dashboard = () => {
    return (
        <div className="bg-blue-50 w-full h-full flex justify-center items-start space-x-4 p-4">
            <Image src="/me3.jpg" alt="me" width={400} height={200} className="rounded-sm"/>
            <p className="p-8">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione nemo sed sint hic cum optio consequuntur voluptates sequi rerum! Laudantium molestias voluptas quibusdam maiores. Quia accusantium dolore corrupti architecto assumenda?</p>
            
            
        </div>
    )
}

export default Dashboard;