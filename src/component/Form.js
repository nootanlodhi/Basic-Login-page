import React, { useState } from 'react'

const Form = () => {

 const [count,setCount]=useState();

  return (
    <div className='main-div'>
        <div className='inner-div'>
        <form action="" className='form-div'>
        <div className='heading'>
                 <img src='https://logodix.com/logo/94391.png' alt=''/>
                 
                 <h2>It's a delight to have you onboard</h2>
                 <p>Help us know you better.</p>
                 </div>
                 <p>(This is how we optimize wobot as per your business needs)</p>
                 
                 <label>Company Name</label>
                 <input type='text' placeholder='e.g. Example Inc'/>
                 <label>Industry</label>
                 <select defaultValue='select'>
                     <option selected>select</option>
                     <option value='b'>b</option>
                     <option value='a'>a</option>
                 </select>
                 <label>Company Size</label>
                 <div className='com-size-div'>
                     
                     <div className={count==0 ?'active-com-size' : 'com-size-inner-div'} onClick={()=>setCount(0)}>
                         1-20
                     </div>

                     <div className={count==1 ?'active-com-size' : 'com-size-inner-div'} onClick={()=>setCount(1)}>
                         21-50
                     </div>
                     <div className={count==2 ?'active-com-size' : 'com-size-inner-div'} onClick={()=>setCount(2)}>
                         51-200
                     </div >
                     <div className={count==3 ?'active-com-size' : 'com-size-inner-div'} onClick={()=>setCount(3)}>
                         201-500
                     </div>
                     <div className={count==4 ?'active-com-size' : 'com-size-inner-div'} onClick={()=>setCount(4)}>
                         500+
                     </div>
                 </div>
                 <button>Get Started</button>
        </form>
       </div>
    </div>
  )
}

export default Form