import React from 'react';
import { Sparklines, SparklinesLine, SparklinesReferenceLine } from 'react-sparklines';
import _ from 'lodash'; 

 const Chart = (props) =>{
     const average=(data)=>{
         return _.round(_.sum(data)/data.length);
     }
     return(
    <div>
    <Sparklines svgWidth={220} svgHeight={180} height={70} width={100} data={props.data} margin={0}>
        <SparklinesLine color={props.color} />
        <SparklinesReferenceLine type="avg" /> 
    </Sparklines>
    <div>{average(props.data)} {props.units}</div>
    </div>
)}

export default Chart;