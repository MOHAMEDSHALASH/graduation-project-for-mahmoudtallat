import React from 'react'
import "./Main.css"

export default function Main() {
  return (
    <main className='main_home flex'>
        <div className='content'>
            <h1>مرحبا بكم</h1>
            <p>تمتع بصحه جيدة من الطبيعة</p>
            <form className='search_container'>
                <input type="text" placeholder='انقر للبحث ' required />
                <button type='submit'>بحث</button>
            </form>
        </div>
    </main>
  )
}
