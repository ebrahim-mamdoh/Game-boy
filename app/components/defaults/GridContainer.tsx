import React from 'react'


// This is the default layout for the grid page
// that takes to prameters as props (cols , children)
export default function GridContainer(
    {cols, children, className}:
    {cols: number, children: React.ReactNode ,className?:string}) {
    const gridClasses: { [key: number]: string } = {
        1: "grid grid-cols-1",
        2: "grid grid-cols-2",  
        3: "grid grid-cols-3",
        4: "grid grid-cols-4",
        5: "grid grid-cols-5",
        6: "grid grid-cols-6",
        7: "grid grid-cols-7",
        8: "grid grid-cols-8",
        9: "grid grid-cols-9",
        10: "grid grid-cols-10",
        11: "grid grid-cols-11",
        12: "grid grid-cols-12",
    }


        
    return (
        <div className={`grid ${className || ""} ${gridClasses[cols] || ""}`}>
          {children}
        </div>
      )
}
