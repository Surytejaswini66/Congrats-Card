const element = (
  <div className='container'>
    <h1 className='heading'>Congratulations</h1>
    <div className='card-container'>
      <img
        className='image1'
        src='https://assets.ccbp.in/frontend/react-js/congrats-card-profile-img.png'
      />
      <h2 className='head'>Kiran V</h2>
      <p className='para'>
        Vishnu Institute of Computer Education and Terminology <br /> Bhimavaram
      </p>
      <img
        className='image1'
        src='https://assets.ccbp.in/frontend/react-js/congrats-card-watch-img.png'
      />
    </div>
  </div>
  // Write your code here.
)

ReactDOM.render(element, document.getElementById('root'))
