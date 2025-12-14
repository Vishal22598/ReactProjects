import React from 'react'
function AdminPanel(){
    return (
        <>
            <h1 className='bg-violet-700 text-4xl p-3 rounded-2xl my-3'>Admin Panel Page</h1>
        </>
    )
}

function LoginForm(){
    return (
        <>
            <h1 className='bg-yellow-700 text-4xl p-3 rounded-2xl text-white'>Login Form Page</h1>
        </>
    )
}
let content;
let isLoggedIn = true
if(!isLoggedIn){
    content = <AdminPanel/>
}else{
    content = <LoginForm/>
}

function Page() {
  return (
    <div>
      {/* {content} */}
        {isLoggedIn?(<AdminPanel/>):(<LoginForm/>)}
        {isLoggedIn && <LoginForm/>}
    </div>
  )
}

export default Page
