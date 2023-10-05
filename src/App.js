import React, {useState} from 'react';
import axios from 'axios'
import './assets/css/style.css';
import "animate.css/animate.min.css";


function App() {
  const [name, setName] = useState('')
  const [city, setCity] = useState('')
  const [email, setEmail] = useState('')
  const [restaurant1, setRestaurant1] = useState({name: '', reason: ''})
  const [restaurant2, setRestaurant2] = useState({name: '', reason: ''})
  const [restaurant3, setRestaurant3] = useState({name: '', reason: ''})
  const [restaurant4, setRestaurant4] = useState({name: '', reason: ''})
  const [restaurant5, setRestaurant5] = useState({name: '', reason: ''})
  const [formStep, setFormStep] = useState(1)
  const [platforms, setPlatforms] = useState([])
  const [message, setMessage] = useState('')
  const [comment, setComment] = useState('')
  const [loading, setLoading] = useState(false)
  const [isSuccessful, setIsSuccessful] = useState(false)

  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

  const submit = (e) => {
    e.preventDefault()
    setMessage('')
    if (!validateEmail(email)) {
        setMessage('Oops! You entered an invalid email. Kindly check and try again')
        return
    }
    setLoading(true)
    axios.post("https://nairobiservices.go.ke/api/authentication/auth/travel", {
      name,
      email,
      platforms,
      city,
      restaurant1,
      restaurant2,
      restaurant3,
      restaurant4,
      restaurant5,
      comment
    }).then(res => {
        setLoading(false)
        if (res.status === 201){
            setMessage("Great! Copy link (button here) to pass this onto a friend and let’s get the momentum going!")
            setFormStep(1)
            setIsSuccessful(true)
      } else {
        setMessage("Oops! There was an issue capturing your details. Kindly try again later")
      }
    })
  }

  return (
    <div className="App">
      <div id="scrollUp" title="Scroll To Top">
          <i class="fas fa-arrow-up"></i>
      </div>
          <div class="main">
        <header class="navbar navbar-sticky navbar-expand-lg navbar-dark">
            <div class="container position-relative">
                <a class="navbar-brand" href="">
                    {/* <img class="navbar-brand-regular" src={require("./assets/img/adililogo.png")} alt="brand-logo" style={{height: '80px', width: 'auto'}} /> */}
                    {/* <img class="navbar-brand-sticky" src={require("./assets/img/adililogo.png")} alt="sticky brand-logo" style={{height: '80px', width: 'auto'}} /> */}
                </a>
                <button class="navbar-toggler d-lg-none" type="button" data-toggle="navbarToggler" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="navbar-inner">
                    <button class="navbar-toggler d-lg-none" type="button" data-toggle="navbarToggler" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <nav>
                        <ul class="navbar-nav" id="navbar-nav">
                            <li class="nav-item">
                                <a class="nav-link scroll" href="#home">Home</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link scroll" href="#features">About Us</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link scroll" href="#contact">Join the Wishlist</a>
                            </li>
                            {/* <li class="nav-item">
                                <a class="nav-link scroll" href="#footer">Contact Us</a>
                            </li> */}
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
        <section id="home" class="section welcome-area bg-overlay overflow-hidden d-flex align-items-center">
            <div class="container flex justify-center">
                <div class="row align-items-center justify-center">
                    {/* <div class="col-12 col-md-7"> */}
                        <div class="welcome-intro intro-layout">
                            <h1 class="text-white headerTxt animated-headerTxt">EXPLORE AFRICA</h1>
                             <p class="text-white my-4 animated-headerTxt text text-center">Embark on your next African adventure with confidence</p>
                             <div className='explore-btn ripple-btn btn-animated'>
                             <a href="#features" style={{textDecoration: 'none', color: 'white'}}>
                              Explore now
                             </a>
                             </div>
                        </div>
                    {/* </div> */}
                </div>
            </div>
        </section>
        <section id="features" class="section features-area overflow-hidden ptb_100">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-12 col-md-10 col-lg-8">
                        <div class="section-heading text-center btn-animated">
                            <h2>Why Choose Us?</h2>
                        </div>
                    </div>
                </div>
                <div class="row align-items-center">
                    <div style={{marginBottom: 20}}>
                        <p className='text-center ptb_50 font20'>We want to create a personal, fun & collaborative platform for users to plan trips with friends, create recommended mapped out experiences, in and around the city they live in, and have their people be a part of the journey with them.</p>
                    </div>
                  {/* <div className='info-section reverse'>
                    <div className='info-img'>
                      <img src={require('./assets/img/bg/itenarary.jpg')} style={{height: 350, borderRadius: 10}} />
                    </div>
                    <div className='info-txt'>
                      <h3>Customize itinerary</h3>
                      <p style={{paddingTop: 10}}>By customizing your itenarary, you can create a personalized travel plan that aligns with your preference, allowing you to make the most of your trip and have a memorable experience</p>
                    </div>
                  </div> */}
                </div>
                <div class="row align-items-center">
                  <div className='info-section'>
                    <div className='info-txt'>
                      <h3>Collaboratively Plan</h3>
                      <p style={{paddingTop: 10}}>You can create your own trips or weekend aways, invite and collaborate with your friends to make the planning of it all less fragmented, time orientated, collaborative and fun.</p>
                    </div>
                    <div className='info-img'>
                        <img src={require('./assets/img/bg/collab.jpg')} className='img' style={{width: 500, height: 350, borderRadius: 10}} />
                    </div>
                  </div>
                </div>
                <div class="row align-items-center">
                  <div className='info-section reverse'>
                    <div className='info-img'>
                      <img src={require('./assets/img/bg/map.jpg')} className='img' style={{width: 500, height: 350, borderRadius: 10}} />
                    </div>
                    <div className='info-txt'>
                      <h3>Interactive maps</h3>
                      <p style={{paddingTop: 10}}>With geo-tagging and mapping out your favourite restaurants, activities and adventures (as well as those of friends)- you can discover new places with ease and convenience.</p>
                    </div>
                  </div>
                </div>
                <div class="row align-items-center">
                  <div className='info-section'>
                    <div className='info-txt'>
                      <h3>Personalized Recommendation</h3>
                      <p style={{paddingTop: 10}}>Based on your preferences, budget, and friend's activities, we will suggest popular destinations, exciting activities and local guides tailored to your interests.</p>
                    </div>
                    <div className='info-img'>
                      <img src={require('./assets/img/bg/SA.jpg')} className='img' style={{width: 500, height: 350, borderRadius: 10}} />
                    </div>
                  </div>
                </div>
            </div>
        </section>
        <section id="contact" class="contact-area bg-blue ptb_100 ph_20">
            <div class="container" style={{marginTop: 10, marginBottom: 20, padding: 10}}>
                <div class="row justify-content-center">
                    <div class="col-12 col-md-10 col-lg-8">
                        <div class="section-heading text-center">
                            <h2 class="text-capitalize">{formStep === 1 ? isSuccessful ? 'Awesome!' : "Let's have a bit of fun!" : 'One last thing!'}</h2>
                            {formStep === 2 &&  <p class="d-block mt-4">Please leave your name and email for us to keep in touch (we PROMISE no spam- only an update if we launch and you will be the first to know)</p>}
                            {isSuccessful ? <p class="d-block mt-4">We will keep in touch! Expect a recommendation list from us soon</p> :
                            <>
                                {/* <p class="d-block mt-4">Do you relate to the struggle when it comes to travel in Africa? If so, you may then be interested to know when the solution becomes available.</p>
                                <p class="d-block mt-2">Please enter your email address here (we PROMISE no spam- only an update if we launch and you will be the first to know, we promise)</p> */}
                            </>
                            }
                        </div>
                    </div>
                </div>
                <div class="row justify-content-center">
                    <div class="col-md-6 pt-4 pt-md-0" style={{paddingRight: 0, paddingLeft: 0}}>
                        {isSuccessful ? <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column'}}>
                          <img src={require('./assets/img/bg/success.jpg')} width={400} /> 
                          <div class="section-heading text-center">
                            <p class="d-block mt-2" style={{color: 'green', marginTop: '10px', marginLeft: '5px'}}>{message}</p>
                          </div>
                        </div> : <div class="contact-box text-start">
                            <p class="d-block mt-2" style={{color: 'red', marginTop: '10px', marginBottom: '10px', marginLeft: '5px'}}>{message}</p>
                            <form id="contact-form" method="POST" action="https://theme-land.com/sapp/demo/./assets/php/mail.php">
                                <div class="row" >
                                    <div class="col-12">
                                        {formStep === 2 ? 
                                        <>
                                            <div class="form-group">
                                                <input type="text" class="form-control" name="name" placeholder="Name" required="required" value={name} onChange={(e) => setName(e.target.value)} />
                                            </div>
                                            <div class="form-group">
                                                <input type="email" class="form-control" name="email" placeholder="Email" required="required" value={email} onChange={(e) => setEmail(e.target.value)} />
                                            </div>
                                            <label for="">
                                                When we launch, to offer the best experience, we would love to study your activity and tailor-make your personal experiences on our app. To do this, we would need access to your data.* 
                                            </label>
                                            {/* <div class="form-check" onClick={() => {
                                                platforms.includes('instagram') ? setPlatforms(platforms.filter(age => age !== 'instagram')) : setPlatforms([...platforms, 'instagram']) 
                                            }}>
                                                <input class="form-check-input" type="radio" name="instagram" id="instagram" 
                                                checked={platforms.includes('instagram')}
                                                />
                                                <label class="form-check-label" for="instagram">
                                                    Instagram
                                                </label>
                                            </div>
                                            <div class="form-check" onClick={() => {
                                                platforms.includes('Google Maps') ? setPlatforms(platforms.filter(age => age !== 'Google Maps')) : setPlatforms([...platforms, 'Google Maps']) 
                                            }}>
                                                <input class="form-check-input" type="radio" name="Google Maps" id="Google Maps"
                                                checked={platforms.includes('Google Maps')}
                                                />
                                                <label class="form-check-label" for="Google Maps">
                                                    Google Maps
                                                </label>
                                            </div>
                                            <div class="form-check" onClick={() => {
                                                platforms.includes('Phone gallery') ? setPlatforms(platforms.filter(age => age !== 'Phone gallery')) : setPlatforms([...platforms, 'Phone gallery']) 
                                            }}>
                                                <input class="form-check-input" type="radio" name="Phone gallery" id="phonegallery"
                                                checked={platforms.includes('Phone gallery')}
                                                />
                                                <label class="form-check-label" for="Phone gallery">
                                                    Phone gallery
                                                </label>
                                            </div> */}
                                            <div class="form-check" onClick={() => {
                                                platforms.includes('I do not mind') ? setPlatforms(platforms.filter(age => age !== 'I do not mind')) : setPlatforms([...platforms, 'I do not mind']) 
                                            }}>
                                                <input class="form-check-input" type="radio" name="I do not mind" id="phonegallery"
                                                checked={platforms.includes('I do not mind')}
                                                />
                                                <label class="form-check-label" for="I do not mind">
                                                    I do not mind
                                                </label>
                                            </div>
                                            <label style={{fontSize: '13px', marginBottom: 20}}>*No information from your data will used for any other purpose other than for your user experience on the app.</label>
                                        </>
                                        : (
                                            <>
                                                {/* <div className='flex' style={{justifyContent: 'center', marginBottom: 10}}>
                                                    <h4 style={{fontWeight: 600}}>Now for the fun part! </h4>
                                                </div> */}
                                                <label for="" style={{marginBottom: 10}}>
                                                We would love for you to list your <span style={{fontWeight: 600}}>top 3</span> all time favourite restaurants, in the city you live in, and why you highly recommend them. In return, based on your listings and preference, we will email you an entire list of restaurants, from people who have similar interests as you! 
                                                </label>
                                                <label style={{marginBottom: 10}}>The best part about this is that it will be recommendations from your friends and friends of friends- so you know you are in good hands! <span style={{fontWeight: 600}}>How cool is that?!?</span></label>
                                                <div class="form-group">
                                                    <input type="text" class="form-control" name="city" placeholder="Which city do you live in? e.g. Cape Town" required="required" value={city} onChange={(e) => setCity(e.target.value)} />
                                                </div>
                                                <div class="form-group row align-items-center" style={{justifyContent: 'space-between'}}>
                                                    <input style={{width: '25%'}} type="text" class="form-control" name="restaurant1" placeholder="Restaurant" required="required" value={restaurant1.name} onChange={(e) => setRestaurant1({...restaurant1, name: e.target.value})} />
                                                    <input style={{width: '70%'}} type="text" class="form-control" name="restaurant1" placeholder="Why do you like it?" required="required" value={restaurant1.reason} onChange={(e) => setRestaurant1({...restaurant1, reason: e.target.value})} />
                                                </div>
                                                <div class="form-group row align-items-center" style={{justifyContent: 'space-between'}}>
                                                    <input style={{width: '25%'}} type="text" class="form-control" name="restaurant2" placeholder="Restaurant" required="required" value={restaurant2.name} onChange={(e) => setRestaurant2({...restaurant2, name: e.target.value})} />
                                                    <input style={{width: '70%'}} type="text" class="form-control" name="restaurant2" placeholder="Why do you like it?" required="required" value={restaurant2.reason} onChange={(e) => setRestaurant2({...restaurant2, reason: e.target.value})} />
                                                </div>
                                                <div class="form-group row align-items-center" style={{justifyContent: 'space-between'}}>
                                                    <input style={{width: '25%'}} type="text" class="form-control" name="restaurant3" placeholder="Restaurant" required="required" value={restaurant3.name} onChange={(e) => setRestaurant3({...restaurant3, name: e.target.value})} />
                                                    <input style={{width: '70%'}} type="text" class="form-control" name="restaurant3" placeholder="Why do you like it?" required="required" value={restaurant3.reason} onChange={(e) => setRestaurant3({...restaurant3, reason: e.target.value})} />
                                                </div>
                                                {/* <div class="form-group row align-items-center" style={{justifyContent: 'space-between'}}>
                                                    <input style={{width: '25%'}} type="text" class="form-control" name="restaurant4" placeholder="Restaurant" required="required" onChange={(e) => setRestaurant4({...restaurant4, name: e.target.value})} />
                                                    <input style={{width: '70%'}} type="text" class="form-control" name="restaurant4" placeholder="Why do you like it?" required="required" onChange={(e) => setRestaurant4({...restaurant4, reason: e.target.value})} />
                                                </div>
                                                <div class="form-group row align-items-center" style={{justifyContent: 'space-between'}}>
                                                    <input style={{width: '25%'}} type="text" class="form-control" name="restaurant5" placeholder="Restaurant" required="required" onChange={(e) => setRestaurant5({...restaurant5, name: e.target.value})} />
                                                    <input style={{width: '70%'}} type="text" class="form-control" name="restaurant5" placeholder="Why do you like it?" required="required" onChange={(e) => setRestaurant5({...restaurant5, reason: e.target.value})} />
                                                </div> */}
                                                {/* <div class="form-group" style={{marginTop: 50}}>
                                                    <input style={{height: '100px'}} type="text" class="form-control" name="comment" placeholder="Any feedback, comments or suggestions?" onChange={(e) => setComment(e.target.value)} />
                                                </div> */}
                                            </>
                                        )
                                    }
                                    </div>
                                    <div class="col-12 flex row justify-space-between" style={{flexWrap: 'wrap'}}>
                                        {formStep === 2 && <button style={{width: '20%'}} type="back" class="mt-3" onClick={(e) => {
                                            e.preventDefault()
                                            setFormStep(1)
                                        }} >Back</button>}
                                        <button style={{width: formStep === 2 ? '60%' : '100%'}} disabled={
                                            (formStep === 1 && (!restaurant1.name || !restaurant2.name || !restaurant3.name || !city)) || 
                                            (formStep === 2 && (!name || !email))} onClick={(e) => formStep === 1 ? setFormStep(2) : submit(e)} type="submit" class="btn btn-lg btn-block mt-3">{loading ? 'Sending info...' : formStep === 1 ? "Next" : "Let's explore!"}</button>
                                    </div>
                                </div>
                            </form>
                            {/* <p class="form-message"></p> */}
                        </div>}
                    </div>
                </div>
            </div>
        </section>
        <div class="height-emulator d-none d-lg-block" id="footer"></div>
        <footer class="footer-area footer-fixed">
            <div class="footer-top ptb_100">
                <div class="container">
                    <div class="row">
                        <div class="col-12 col-sm-6 col-lg-3">
                            {/* <div class="footer-items">
                                <h3 class="footer-title mb-2">Contact Us</h3>
                                <p class="mt-2 mb-3"><a href="mailto:info@getadili.com">info@getadili.com</a></p>
                                <p class="mt-2 mb-3">+254722585714</p>

                            </div> */}
                        </div>
                        <div class="col-12 col-sm-6 col-lg-3">
                            <div class="footer-items">
                                <h3 class="footer-title mb-2">Useful Links</h3>
                                <ul>
                                    <li class="py-2"><a href="#">Home</a></li>
                                    <li class="py-2"><a href="#">About Us</a></li>
                                    <li class="py-2"><a href="#">join Wishlist</a></li>
                                </ul>
                            </div>
                        </div>
                        <div class="col-12 col-sm-6 col-lg-3">
                            <div class="footer-items">
                                <h3 class="footer-title mb-2">Product Help</h3>
                                <ul>
                                    <li class="py-2"><a href="#">Privacy Policy</a></li>
                                    <li class="py-2"><a href="#">Terms &amp; Conditions</a></li>
                                </ul>
                            </div>
                        </div>
                        <div class="col-12 col-sm-6 col-lg-3">
                            <div class="footer-items">
                                <h3 class="footer-title mb-2">Soon available on</h3>
                                <div class="button-group store-buttons store-black d-flex flex-wrap">
                                    <a href="#">
                                        <img src={require("./assets/img/icon/google-play-black.png")} alt="" />
                                    </a>
                                    <a href="#">
                                        <img src={require("./assets/img/icon/app-store-black.png")} alt="" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="footer-bottom">
                <div class="container">
                    <div class="row">
                        <div class="col-12">
                            <div class="copyright-area d-flex flex-wrap justify-content-center justify-content-sm-between text-center py-4">
                                <div class="copyright-left">&copy; Copyrights 2023 All rights reserved.</div>
                                {/* <div class="copyright-right">Backed By <a href="https://www.antler.co/">Antler</a></div> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    </div>


    </div>
  );
}

export default App;
