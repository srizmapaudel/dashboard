import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  return (
    <>
      <div>
      {/* Navbar */}
      <nav className="w-full h-14 bg-blue-500 text-white flex justify-between items-center px-5 shadow-md">
        <h4 className="text-2xl">Dashboard</h4>
        <div className="flex items-center">
          <span className="fas fa-search mr-2"></span>
          <img className="object-cover w-10 h-10 rounded-full mr-2" src="https://cdn-icons-png.flaticon.com/512/6867/6867595.png" alt="Profile" />
          <p className="text-lg">Welcome Admin</p>
        </div>
      </nav>
      
      {/* Sidebar */}
      <input type="checkbox" id="toggle" className="hidden" />
      <label htmlFor="toggle" className="side-toggle absolute top-4 left-4 text-2xl cursor-pointer">
        <span className="fas fa-bars"></span>
      </label>
      
      <div className="sidebar fixed top-14 left-0 w-64 bg-blue-500 h-screen p-5 shadow-lg">
        {[
          { icon: 'fas fa-clipboard-list', label: 'Overview' },
          { icon: 'fas fa-users', label: 'Teams' },
          { icon: 'fas fa-credit-card', label: 'Payment' },
          { icon: 'fas fa-chart-line', label: 'Statistics' },
          { icon: 'fas fa-id-card', label: 'Contact' },
          { icon: 'fas fa-cog', label: 'Settings' },
        ].map((item, index) => (
          <div key={index} className="sidebar-menu flex items-center text-white text-lg cursor-pointer p-3 hover:bg-blue-700">
            <span className={`${item.icon} text-xl mr-2`}></span>
            <p>{item.label}</p>
          </div>
        ))}
      </div>
      
      {/* Main Dashboard */}
      <main className="ml-64 p-5 mt-4">
        <div className="dashboard-container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {[
            { color: 'bg-pink-400', title: 'Total Students', value: '500+', icon: 'fas fa-user-friends' },
            { color: 'bg-orange-500', title: 'Pending Request', value: '10', icon: 'fas fa-user-friends' },
            { color: 'bg-yellow-400', title: '+2 Faculty', value: '2', icon: 'fas fa-boxes' },
            { color: 'bg-red-500', title: 'Review', value: 'Students review', icon: 'fas fa-chart-line' },
          ].map((card, index) => (
            <div key={index} className={`card p-5 rounded-lg shadow-lg ${card.color}`}>
              <div className="info flex justify-between items-center">
                <div className="info-detail">
                  <h3 className="text-white text-xl">{card.title}</h3>
                  <h2 className="text-white text-2xl font-bold">{card.value}</h2>
                </div>
                <div className="info-image text-4xl text-blue-500">
                  <i className={card.icon}></i>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="students-header flex justify-between items-center mt-6">
          <h2 className="text-black text-2xl">All Students</h2>
          <button className="px-4 py-2 rounded-full bg-blue-500 text-white">See More</button>
        </div>
        <table className="students-table w-full mt-5 rounded-lg overflow-hidden bg-white shadow-lg">
          <thead className="bg-blue-500 text-white">
            <tr>
              <th className="p-3">Student's Name</th>
              <th className="p-3">Email</th>
              <th className="p-3">Age</th>
              <th className="p-3">Address</th>
              <th className="p-3">Stream</th>
            </tr>
          </thead>
          <tbody>
            {/* Student data will go here */}
          </tbody>
        </table>
      </main>
    </div>

    </>
  )
}

export default App
