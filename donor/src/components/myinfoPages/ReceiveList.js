import React from 'react';

function ReceiveList({date, sender}){
  return(
    <div className='sh_lst'>
      <div className='sh_lst_items lst_items'>{new Date(date).toLocaleDateString()}</div>
      <div className='sh_lst_items lst_item'>{sender}</div>
    </div>
  );
}

export default ReceiveList;