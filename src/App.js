// import logo from './logo.svg';
import './App.css';
import { Bar } from 'react-chartjs-2';
import { PolarArea } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  RadialLinearScale,
  ArcElement,
  Tooltip,
  Legend,
} from 'chart.js';
ChartJS.register(
  RadialLinearScale,
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  );

function App() {
  const data = {
     
  }
  const options = {
    
  }
  return (
   <>
   <Bar data={data} options={options}></Bar>
   <PolarArea data={data} />
   </>
  );
}

export default App;
