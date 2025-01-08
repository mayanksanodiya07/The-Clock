'use client'

import React, { useState } from 'react'
import Button  from "@/app/_components/ui/Button"

const AgeCalculator = () => {
  const [birthDate, setBirthDate] = useState('')
  const [age, setAge] = useState(null)

  const calculateAge = (e) => {
    e.preventDefault()
    const today = new Date()
    const birthDateObj = new Date(birthDate)
    
    let ageYears = today.getFullYear() - birthDateObj.getFullYear()
    let ageMonths = today.getMonth() - birthDateObj.getMonth()
    let ageDays = today.getDate() - birthDateObj.getDate()

    if (ageMonths < 0 || (ageMonths === 0 && ageDays < 0)) {
      ageYears--
      ageMonths += 12
    }

    if (ageDays < 0) {
      const daysInLastMonth = new Date(today.getFullYear(), today.getMonth(), 0).getDate()
      ageDays += daysInLastMonth
      ageMonths--
    }

    setAge({ years: ageYears, months: ageMonths, days: ageDays })
  }

  return (
    <div className="flex flex-col items-center space-y-4  p-6 ">
      <form onSubmit={calculateAge} className="flex space-x-2">
        <input
          type="date"
          value={birthDate}
          onChange={(e) => setBirthDate(e.target.value)}
          required
          className="w-48 rounded-md px-2 outline-none border-2 border-transparent focus:border-secondary-dark"
        />
        <Button type="submit">Calculate Age</Button>
      </form>
      {age && (
        <div className="text-3xl font-semibold">
          Your age is: {age.years} years, {age.months} months, and {age.days} days
        </div>
      )}
    </div>
  )
}

export default AgeCalculator

