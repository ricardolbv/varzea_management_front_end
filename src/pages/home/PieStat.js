
import React from 'react';
import { PieChart, Pie, Cell, LabelList} from 'recharts';
  
  
const PieStat = () => {
  
const data = [
  {name: 'Vitórias', qtd: 5},
  {name: 'Empates', qtd: 4},
  {name: 'Derrotas', qtd: 2},
];

return (
        <PieChart width={300} height={300}>
          <Pie data={data} dataKey="qtd" outerRadius={150}>
              <LabelList />
              <Cell key={'Vitórias'} fill='#32CD32' />
              <Cell key={'Empates'} fill='Grey' />
              <Cell key={'Derrotas'} fill='#FF0000' />
          </Pie>
        </PieChart>
    );
}
  
export default PieStat;