import React from 'react'

const HeaderBox = ({title, type,user,subtext}) => {
  return (
    <div className="mb-10 font-serif">
    <h1 className="header-box-title">
      {title}
      {type === "greeting" && (
        <span className="text-bankGradient">&nbsp;{user}</span>
      )}
    </h1>
    <p className="header-box-subtext">{subtext}</p>
  </div>
  )
}

export default HeaderBox