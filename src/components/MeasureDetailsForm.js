import React,{Component} from 'react';
import Checkbox from 'react-md/lib/SelectionControls/Checkbox';
import DataTable from 'react-md/lib/DataTables/DataTable';
import TableBody from 'react-md/lib/DataTables/TableBody';
import TableColumn from 'react-md/lib/DataTables/TableColumn';
import TableHeader from 'react-md/lib/DataTables/TableHeader';
import TableRow from 'react-md/lib/DataTables/TableRow';
import { dataSet } from '../utils/dataSets';
import { Paper } from 'react-md';
import { TabsContainer, Tabs, Tab } from 'react-md';
import '../assets/styleSheets/measureDetails.scss';

class MeasureDetailsForm extends Component{
  render(){
    console.log(dataSet);
    var Tabs = require('react-simpletabs');
    return(
      <div>
        <Paper className="md-block-centered container">      
           <h4>{"Enter details for "}{this.props.measureName}</h4>
        <Tabs>
        <Tabs.Panel title='1. Select Dataset'>
           <h4 className="header-background bold">Existing Datasets</h4>
           <Paper className="dataTable">
           <div>  
            <DataTable  baseId="simple-selectable-table" indeterminate>
              <TableHeader>
                <TableRow>
                  <TableColumn>Data set</TableColumn>
                  <TableColumn>Last executed on</TableColumn>
                </TableRow>
              </TableHeader>
              <TableBody>
              {dataSet.map(data =>
                <TableRow>
                    <TableColumn>
                     {data.dataSet}
                    </TableColumn>
                    <TableColumn>
                      {data.LastExecutedOn}
                    </TableColumn>
                </TableRow>
              )}     
              </TableBody>
            </DataTable>
          </div>
         </Paper>
         <Paper className="selectedData">
          <div><p className="TextBold">Selected Datasets</p></div>
        </Paper>
        </Tabs.Panel>
        <Tabs.Panel title='2. Refine Dataset'>
          <h2>Refine Dataset here</h2>
        </Tabs.Panel>
        <Tabs.Panel title='3. Add Computations'>
          <h2>Add Computations here</h2>
        </Tabs.Panel>
        <Tabs.Panel title='4. Output Attributes'>
          <h2>Output Attributes here</h2>
        </Tabs.Panel>
        <Tabs.Panel title='5. Summary'>
          <h2>Summary here</h2>
        </Tabs.Panel>
      </Tabs> 
        <div>
        <a href="#" className="previous">&laquo; Previous</a>
        <a href="#" className="next">Next &raquo;</a></div>
        </Paper>
      </div>
    );   
  }
}

export default MeasureDetailsForm;