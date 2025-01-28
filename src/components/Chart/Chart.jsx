import PropTypes from 'prop-types';
import {
  ComposedChart,
  Area,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Scatter,
  ResponsiveContainer,
} from 'recharts';



const Chart = ({ data }) => {
  return (
    <ResponsiveContainer>
      <ComposedChart
        width={500}
        height={500}
        data={data}

        margin={{
          top: 20,
          right: 20,
          bottom: 20,
          left: 20
        }}
      >
        <CartesianGrid stroke="#f5f5f5" />
        <XAxis className='text-[11px]' dataKey="product_title" />
        <YAxis className='text-[11px]'/>
        <Tooltip />
        <Legend />
        <Area type="monotone" dataKey="price" fill="#DABBDF" stroke="#8884d8" />
        <Bar dataKey="price" barSize={20} fill="#AD46FF" />
        <Scatter dataKey="rating" fill="red" />
      </ComposedChart>
    </ResponsiveContainer>

  );
}

Chart.propTypes = {
  data: PropTypes.array.isRequired,
};

export default Chart;