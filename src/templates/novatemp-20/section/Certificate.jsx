import React from 'react'

const Certificate = ({certificate}) => {
  return (
    <div className='px-4'>
         <h1 className="font-semibold uppercase text-base mt-4 text-emerald-800">
        Certification
      </h1>
      <div>
      <ul className="list-disc flex flex-col gap-1 text-sm list-inside">
              {certificate?.map((item, index) => (
                <li key={index}>{item?.certificate}</li>
              ))}
            </ul>
      </div>
    </div>
  )
}

export default Certificate
