import React from 'react'

const user = {
    name: 'Hedy Lamarr',
    imageUrl: 'https://i.imgur.com/yXOvdOSs.jpg',
    imageSize: 90,
};

function Profile() {
    
  return (
    <div className='bg-gray-900 p-10 rounded-2xl my-5'>
        <h1 className='text-white text-3xl'>{user.name}</h1> 
        <img 
            className='avatar mt-3'
            src={user.imageUrl} 
            alt={'Photo of ' + user.name} 
            style={{
                width: user.imageSize,
                height: user.imageSize
            }}
        />
    </div>
  )
}

export default Profile
