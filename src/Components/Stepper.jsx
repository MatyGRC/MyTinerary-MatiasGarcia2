import React, { useEffect, useState } from 'react'
import Article from './Article'

const arrayCities =[
    [
        { city: 'Paris',
          country: 'France',
          image: 'https://a.storyblok.com/f/112937/568x464/954a33563a/paris-de-noche.jpg/m/620x0/filters:quality(70)/',    
      },
        { city: 'London',
          country: 'England',
          image: 'https://www.thetrainline.com/cms/media/1376/uk-london-tower-bridge-river-thames.jpg?mode=crop&width=800&height=800&quality=70', 
      },
        { city: 'New York',
          country: 'U.S.A.',
          image: 'https://upload.travelawaits.com/ta/uploads/2022/01/NYC-Cover-800x800.jpg', 
      },
        { city: 'Tokyo',
          country: 'Japan',
          image: 'https://i.pinimg.com/1200x/cb/f0/05/cbf005654b637840da57edec6fca1146.jpg', 
      },
    ],
    [
        { city: 'Sidney',
          country: 'Australia',
          image: 'https://aws-tiqets-cdn.imgix.net/images/content/9c1ac10869c04ab6b7a496e3948447a2.jpg?auto=format&fit=crop&h=800&ixlib=python-3.2.1&q=70&w=800&s=099546eed40dced5824edfc299bd07f4',    
      },
        { city: 'Barcelona',
          country: 'Spain',
          image: 'https://aws-tiqets-cdn.imgix.net/images/content/6beec4efa21d441ca561bbd35caa00c2.jpeg?auto=format&fit=crop&h=800&ixlib=python-3.2.1&q=70&w=800&s=f69857ac5bc0dccc1cb033b24d575964', 
      },
        { city: 'Rome',
          country: 'Italy ',
          image: 'https://aws-tiqets-cdn.imgix.net/images/content/cb5056c8819e4c03be9384b231630b0f.jpg?auto=format&fit=crop&h=800&ixlib=python-3.2.1&q=70&w=800&s=e9d91093c5d4c7b3177ca1d399176681', 
      },
        { city: 'Amsterdam',
          country: 'Netherlands',
          image: 'https://assets.gocity.com/files/go_amsterdam/files/styles/crop_freeform/public/Temp-800x800-min_18.jpg', 
      },
    ],
    [
        { city: 'Berlin',
          country: 'Germany',
          image: 'https://aws-tiqets-cdn.imgix.net/images/content/b60e510d92ba4c828cf60631c16622a6.jpg?auto=format&fit=crop&h=800&ixlib=python-3.2.1&q=70&w=800&s=0e1eed0e02353d01e9a284e318d30942', 
      },
        { city: 'Hong Kong',
          country: 'China',
          image: 'https://i.pinimg.com/originals/c6/f5/ee/c6f5eeb01b7270bc3c16397575662a1d.jpg', 
      },
        { city: 'Buenos Aires',
          country: 'Argentina',
          image: 'https://www.traveloffpath.com/wp-content/uploads/2023/08/Buenos-Aires.jpg.webp', 
      },
        { city: 'Dubai',
          country: 'U.A.E',
          image: 'https://homespheregroup.com/wp-content/uploads/2023/06/dubaicity1-800x800-1.webp',    
      }
      ]
]

export default function Stepper() {
    console.log(arrayCities);
    let [step, setStep] = useState(0)
    let handlerBack = () => {
        if (step != 0) {
            setStep(step -1)
        } else if (step = 0) {
            setStep(2)
        }
    }

    let handlerFront = () => {
        if (step != 2) {
            setStep(step + 1)
        } else if (step = 2) {
            setStep(0)
        }
    }

    useEffect(()=> {
            setInterval(() => {
            handlerFront()
        }, 3000);
        return () => clearInterval()
    }, []);

  return (
    <>
      <div>
      {arrayCities.map((array, index) => {
        if (step === index) 
        return <Article key={index} array={array}/>
      })}
        
          {/*   <>
                {arrayCities.map((array, index) => <Article key={index} array={array}/>)}
                {/* {step == 0 && <p>1</p>}
                {step == 1 && <p>2</p>}
                {step == 2 && <p>3</p>} 
            </> 
            :
            <>
                <p>error</p>
            </>
             */}
    
      </div>
    <div className='flex space-x-4 items-center justify-center pt-4'>
    <button onClick={()=> { handlerBack(); clearInterval()}}><svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 5H1m0 0 4 4M1 5l4-4"/>
  </svg></button>
    <button onClick={()=>{ handlerFront(); clearInterval()}}><svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
  </svg></button>
  </div>         

    </>

  )
}

/* {(step === 0 || step === 1 || step === 2) ?  */