import React from "react"

type Props = {
  title: string
  image: string
  date: string
  location: string
  link?: string
  externalLink?: boolean
}

const TerminCard = ({
  title,
  image,
  date,
  location,
  link,
  externalLink,
}: Props) => {
  return link ? (
    <a
      href={link}
      className="grid grid-cols-[auto_1fr] items-center bg-white border rounded-lg shadow-md w-full hover:bg-gray-100"
      rel={externalLink ? "noopener nofollow" : ""}
      target={externalLink ? "_blank" : "_self"}
    >
      <img
        className="object-cover pl-4 pb-4 sm:pb-0 sm:pl-0 w-20 h-20 sm:w-40 sm:h-40 lg:w-32 lg:h-32 row-start-2 sm:row-span-2 sm:rounded-l-lg"
        src={image}
        alt=""
      />
      <h3 className="col-span-2 sm:col-span-1 px-4 pt-4 mb-1 text-lg md:text-2xl font-bold tracking-tight text-gray-900">
        {title}
      </h3>
      <div className="grid px-4 pb-4 col-start-2 grid-cols-[auto_1fr] gap-3 leading-normal font-normal text-gray-700">
        <div className="font-bold">Datum:</div>
        <div className="grow">{date}</div>
        <div className="font-bold">Ort:</div>
        <div className="grow">{location}</div>
      </div>
    </a>
  ) : (
    <div className="grid grid-cols-[auto_1fr] items-center bg-white border rounded-lg shadow-md w-full">
      <img
        className="object-cover pl-4 pb-4 sm:pb-0 sm:pl-0 w-20 h-20 sm:w-40 sm:h-40 lg:w-32 lg:h-32 row-start-2 sm:row-span-2 sm:rounded-l-lg"
        src={image}
        alt=""
      />
      <h3 className="col-span-2 sm:col-span-1 px-4 pt-4 mb-1 text-lg md:text-2xl font-bold tracking-tight text-gray-900">
        {title}
      </h3>
      <div className="grid px-4 pb-4 col-start-2 grid-cols-[auto_1fr] gap-3 leading-normal font-normal text-gray-700">
        <div className="font-bold">Datum:</div>
        <div className="grow">{date}</div>
        <div className="font-bold">Ort:</div>
        <div className="grow">{location}</div>
      </div>
    </div>
  )
}

export default TerminCard
