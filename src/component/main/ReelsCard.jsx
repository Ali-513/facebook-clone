import React, { useState } from "react";
import Story from './Story';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';

const ReelsCards = (props) =>{
    const [trans,settrans]=useState(0);
    const [btndisplay,setbtndisplay] = useState('none');
    const [btndisplay2,setbtndisplay2] = useState('flex');


    const handlestyle = (arg) =>{
      
        if(arg=="farward")
        {
          if(trans!=-80){
          settrans(prevState=>prevState-20);
          
            if(trans==0){
          setbtndisplay('flex');
            }
          }
          if(trans==-60)
          {
              setbtndisplay2('none');
          }
  
  
  
  
  
        }
        else{
        console.log(trans)
          if(trans!=0)
        {
          settrans(prevState=>prevState+20);
         
        }
        if(trans==-20)
        {
          setbtndisplay('none');
  
        }
        if(trans==-80)
        {
          setbtndisplay2('flex');
  
        }
        
      }
  
    
  
  
    }

return(

    <div className='cards' style={{display:props.display}}>
            

    <button className='farward' onClick={()=>handlestyle('farward')} style={{display:btndisplay2}}><ChevronRightIcon/></button>
    <button className='backward' onClick={()=>handlestyle('backward')} style={{display:btndisplay}}><ChevronLeftIcon/></button>
    <div className='transition' style={{display:'flex',transform:`translateX(${trans}%)`}} >
    
    <Story
    image="https://picsum.photos/id/10/200/300"
    profileSrc="https://avatars.githubusercontent.com/u/43209472?v=4"
    title="Ishaq Soomro"
    />
      <Story
    image="https://picsum.photos/id/7/200/300"
    profileSrc="https://avatars.githubusercontent.com/u/43209472?v=4"
    title="Tushar Kukra"
    />
  
    <Story
    image="https://picsum.photos/id/6/200/300"
    profileSrc="https://media.istockphoto.com/photos/illustration-of-smiling-happy-man-with-laptop-sitting-in-armchair-picture-id1226886130?s=612x612"
    title="Sonny Sangha"
    />

    {/* Story */}
    <Story
    image="https://picsum.photos/id/5/200/300"
    profileSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT49lVeJq2QAD6w6c-tmzAg31hHmiyrRMrcXw&usqp=CAU"
    title="Sandeep Singh"
    />

    {/* Story */}
    <Story
    image="https://picsum.photos/id/4/200/300"
    profileSrc="https://media.geeksforgeeks.org/wp-content/cdn-uploads/20200326191711/How-to-Think-Like-a-Programmer.png"
    title="Vinit"
    />
      <Story
    image="https://picsum.photos/id/3/200/300"
    profileSrc="https://avatars.githubusercontent.com/u/43209472?v=4"
    title="Tushar Kukra"
    />
      <Story
    image="https://picsum.photos/id/1/200/300"
    profileSrc="https://avatars.githubusercontent.com/u/43209472?v=4"
    title="Tushar Kukra"
    />
        
        <Story
    image="https://picsum.photos/id/2/200/300"
    profileSrc="https://media.istockphoto.com/photos/illustration-of-smiling-happy-man-with-laptop-sitting-in-armchair-picture-id1226886130?s=612x612"
    title="Sonny Sangha"
    />

    {/* Story */}
    <Story
    image="https://picsum.photos/200/300"
    profileSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT49lVeJq2QAD6w6c-tmzAg31hHmiyrRMrcXw&usqp=CAU"
    title="Sandeep Singh"
    />

    {/* Story */}



   

      <Story
    image="https://picsum.photos/200/300"
    profileSrc="https://avatars.githubusercontent.com/u/43209472?v=4"
    title="Northern Sigth"
    />
    
    <Story 
    image="https://picsum.photos/200/300"
    profileSrc="https://avatars3.githubusercontent.com/u/30196405?s=460&u=6bd3c8280b827a0ea3f661fc7c0c65117b19bc61&v=4"
    title="Hardik Kumar"
    />

    {/* Story */}
    <Story
    image="https://business.uoregon.edu/sites/business1.uoregon.edu/files/styles/banner/public/Enews-Covid-Gym-Safety-banner-202101.jpg?itok=gOgJMu0x"
    profileSrc="https://media.istockphoto.com/photos/illustration-of-smiling-happy-man-with-laptop-sitting-in-armchair-picture-id1226886130?s=612x612"
    title="Sonny Sangha"
    />
         </div>
</div>

)


}


export default ReelsCards;