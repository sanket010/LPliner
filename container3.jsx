import  React  from 'react';
import './container.css';
import samsung from './imgs/samsung.jpg';
import forebs from './imgs/forbes.jpg';
import tesla from './imgs/tesla.jpg';
import slack from './imgs/slack.jpg';
import ibm from './imgs/ibm.jpg';







const Containerthree = () => {
    return(

        <div>
          <h3>560.065+websites created by liner</h3>
        
        <div>
          
          <img className='img' src={samsung}  alt="" />
        </div>
        <div>
          
          <img className='img' src={ibm} alt="" />
        </div>
        <div>
          
          <img className='img' src={tesla} alt="" />
        </div>
        <div>
          
          <img className='img' src={slack} alt="" />
        </div>
        <div>
        
        <img className='img' src={forebs} alt="" />
      </div>
      
    </div>
   
























    );
};


export default Containerthree;

