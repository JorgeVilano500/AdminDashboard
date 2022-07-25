import React, {useState} from 'react'
import * as ReactDOM from "react-dom";
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, Legend, Category, Tooltip, DataLabel, BarSeries } from '@syncfusion/ej2-react-charts';
import { barChartData, barCustomSeries, barPrimaryXAxis, barPrimaryYAxis } from '../../data/dummy'; 

const Bar = () => {
  
  const [primaryXAxis, setPrimaryXAxis] = useState({
    minimum: 2005, maximum: 2012, interval: 1, title: 'Year'
  })
  const [primaryYAxis, setPrimaryYAxis] = useState({
    minimum: 3, maximum: 12, interval: 1, title: 'Percentage',
            labelFormat: '{value}%'
  })
  return (
    <div>
       
        <ChartComponent primaryXAxis={barPrimaryXAxis} primaryYAxis={barPrimaryYAxis} id='charts' title='Unemployment rate (%)'>
      <Inject services={[BarSeries, Legend, Tooltip, DataLabel, Category]}/>
      <SeriesCollectionDirective>
        <SeriesDirective dataSource={barCustomSeries} xName='x' yName='y' name='India' type='Bar'>
        </SeriesDirective>
      </SeriesCollectionDirective>
    </ChartComponent>;
        
    </div>
  )
}

export default Bar