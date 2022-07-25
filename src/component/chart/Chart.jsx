import "./chart.scss"
import { AreaChart, Area, XAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
//                  (YAxis) can be added to this import ^ 
const data = [
  { name: "January", Total: 1200 },
  { name: "February", Total: 2100 },
  { name: "March", Total: 800 },
  { name: "April", Total: 1600 },
  { name: "May", Total: 900 },
  { name: "June", Total: 1700 },
];

const chart = ({ aspect, title }) => {
  return (
    <div className="chart">
      <div className="title">{title}</div>
      <ResponsiveContainer width="100%" aspect={aspect}>
        <AreaChart width={730} height={250} data={data}
          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
          <defs>
            <linearGradient id="Total" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#60AC35" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#EBFCF7" stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis dataKey="name" stroke="gray"/>
          {/* <YAxis /> */}
          <CartesianGrid strokeDasharray="3 3" className="chartgrid"/>
          <Tooltip />
          <Area type="monotone" dataKey="Total" stroke="#E9F3F5" fillOpacity={1} fill="url(#Total)" />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  )
}

export default chart