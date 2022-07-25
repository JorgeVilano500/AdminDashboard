import React from 'react';
import { financialChartData } from '../../data/dummy';
import * as ReactDOM from "react-dom";
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, HiloSeries, Category, Tooltip, Zoom, Crosshair } from '@syncfusion/ej2-react-charts';


const Financial = () => {
  return (
    <div>
      <ChartComponent id='charts' style={{ textAlign: "center" }} primaryXAxis={{ valueType: 'Category', title: 'Months' }} primaryYAxis={ { labelFormat: '{value}mm', edgeLabelPlacement: 'Shift', title: 'Rainfall' }} legendSettings={ { visible: true }} title='Maximum and Minimum Rainfall'>
      <Inject services={[HiloSeries, Tooltip, Category, Crosshair, Zoom]}/>
      <SeriesCollectionDirective>
        <SeriesDirective dataSource={financialChartData} xName='x' yName='low' name='India' type='Hilo' low='low' high='high'>
        </SeriesDirective>
      </SeriesCollectionDirective>
    </ChartComponent>;
    </div>
  )
}

export default Financial