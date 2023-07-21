import { FaRunning ,FaGlassWhiskey} from 'react-icons/fa';
import { CgGym } from 'react-icons/cg';
import { GiNightSleep } from 'react-icons/gi';
import { FcReading } from 'react-icons/fc';


export const habits = [{
  name:"Water",
  detail:"Drinking 3L of water daily",
  icon: <FaGlassWhiskey className='w-100 h-100' />,
  Status:false,
},{
  name:"Running",
  detail:"5KM of running daily",
  icon: <FaRunning className='w-100 h-100'/>,
  Status:false,
},{
  name:"gym",
  detail:"2hr of gym daily",
  icon: <CgGym className='w-100 h-100'/>,
  Status:false,
},{
  name:"reading",
  detail:"5 pages of reading daily",
  icon: <FcReading className='w-100 h-100'/>,
  Status:false,
},{
  name:"Sleep",
  detail:"8hr of sleep daily",
  icon: <GiNightSleep className='w-100 h-100'/>,
  completed:false,
}]
