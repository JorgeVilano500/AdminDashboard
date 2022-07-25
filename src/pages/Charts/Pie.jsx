import React from 'react'
import * as ReactDOM from "react-dom";
import {
AccumulationChartComponent, AccumulationSeriesCollectionDirective, AccumulationSeriesDirective,
  IAccTooltipRenderEventArgs, Inject, AccumulationDataLabel, AccumulationTooltip, PieSeries,
  AccumulationDataLabelSettingsModel,TooltipSettingsModel
} from '@syncfusion/ej2-react-charts';
import{ EmitType } from '@syncfusion/ej2-base';
import { pieChartData } from '../../data/dummy';

const Pie = () => {
  return (
    <div>
      <AccumulationChartComponent id='charts' tooltip={ { enable: true }}   title='Mobile Browser Statistics'
      >
      <Inject services={[AccumulationTooltip, PieSeries, AccumulationDataLabel]} />
      <AccumulationSeriesCollectionDirective>
        <AccumulationSeriesDirective dataSource={pieChartData} xName='x' yName='y' radius='70%' dataLabel={{ visible: true, position: 'Inside', name: 'text' }} >
        </AccumulationSeriesDirective>
      </AccumulationSeriesCollectionDirective>
    </AccumulationChartComponent>
    </div>
  )
}

export default Pie