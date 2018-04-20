import React from 'react'
import ReactDOM from 'react-dom'

let Page = () => {
  return (

    <div className='intro-page'>
      <div className='metax-img'>
        <img height='340' style={{'padding': '10px'}} src='/assets/MetaX_Presents_Date.png' alt='MetaX' />
      </div>
      <div>
        <br />
      </div>
      <div className='intro-adchain'>
        <img height='90' src='/assets/adChain_Publisher_Registry_Logo.png' alt='adChain' />
      </div>
    </div>

  )
}

ReactDOM.render(<Page />, document.getElementById('root'))
