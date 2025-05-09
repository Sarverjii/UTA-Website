export default function RegistrationHeader() {
  const headerStyle = {
    backgroundImage:
      'linear-gradient(rgba(0, 20, 0, 0.7), rgba(0, 20, 0, 0.7)), url("/public/Bg.png")',
    width: '100%',
    marginBottom: '50px',
    minHeight: '160px',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    color: 'white',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    padding: '20px',
  };


  const h1style = {
    fontSize: '1.8rem'
    }

    const h2style = { 
        fontSize: '1.2rem',
        fontWeight: '400',
        marginTop: '10px'
    }


  return (
    <header style={headerStyle}>
      <h1 style={h1style}>Uttaranchal Tennis Association</h1>
      <h2 style={h2style}>Nissan All India Open Seniors Tennis Tournament 2024</h2>
    </header>
  );
}
