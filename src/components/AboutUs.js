import React from 'react';
import vishnu from '../images/vishnu.jpg'
import naresh from '../images/naresh.jpg'
import arif from '../images/arif.jpg'
import varun from '../images/varun.jpg'
import shivam from '../images/shivam.jpg'

const people = [
  {
    name: 'Shivam Kumar',
    role: 'Director',
    imageUrl:  shivam
},
  {
    name: 'Vishnu R',
    role: 'Director',
    imageUrl:vishnu
  },
  {
    name: 'Tirumarredi Naresh',
    role: 'Director',
    imageUrl:naresh
  },
  {
    name: 'Varun ',
    role: 'Director',
    imageUrl:varun
  },
  {
    name: 'Arif',
    role: 'Director',
    imageUrl:arif
  },
];

const AboutUs = () => {
  return (
    <div className="bg-white py-24 sm:py-32" id="AboutUs">
      <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-[#05d79f]">Meet our Team</h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Meet the members of our exceptional and talented team. 
          </p>
        </div>
        <ul role="list" className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2">
          {people.map((person) => (
            <li key={person.name}>
              <div className="flex items-center gap-x-6">
                <img alt="" src={person.imageUrl} className="h-16 w-16 rounded-full" />
                <div>
                  <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">{person.name}</h3>
                  <p className="text-sm font-semibold leading-6 text-[#05d79f]">{person.role}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AboutUs;
