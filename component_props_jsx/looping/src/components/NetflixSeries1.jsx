import React from 'react'

const NetflixSeries1 = ({seriesData}) => {
    console.log(seriesData);
  return (
    <div>
        <ul>
            {
                seriesData.map((curEle,index)=>{
                    return <li>
                        <img src={curEle.img_url} alt="" />
                    </li>
                })
            }
        </ul>
    </div>
  )
}

export default NetflixSeries1