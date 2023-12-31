import React, { useState, useMemo } from 'react';
import axios from 'axios';
import Checkbox from 'rc-checkbox';
import { getTravelorType } from './static';
import 'rc-checkbox/assets/index.css';
import './assets/css/style.css';
import 'animate.css/animate.min.css';

function App() {
  const [name, setName] = useState('');
  const [city, setCity] = useState('');
  const [email, setEmail] = useState('');
  const [favourite, setFavourite] = useState('');
  const [place1, setPlace1] = useState({ name: '', location: '', reason: '' });
  const [place2, setPlace2] = useState({ name: '', location: '', reason: '' });
  const [place3, setPlace3] = useState({ name: '', location: '', reason: '' });
  const [restaurant1, setRestaurant1] = useState('');
  const [restaurant2, setRestaurant2] = useState('');
  const [formStep, setFormStep] = useState(1);
  const [dataRequest, setDataRequest] = useState(false);
  const [message, setMessage] = useState('');
  const [reasons, setReasons] = useState([]);
  const [keptPlaces, setKeptPlaces] = useState([]);
  const [activity1, setActivity1] = useState([]);
  const [activity2, setActivity2] = useState([]);
  const [sharedList, setSharedList] = useState('');
  const [nextTrip, setNextTrip] = useState('');
  const [loading, setLoading] = useState(false);
  const [keepsList, setKeepsList] = useState(false);
  const [plannerType, setPlannerType] = useState('');
  const [isSuccessful, setIsSuccessful] = useState(false);
  const [copiedLink, setCopiedLink] = useState(false);

  const capitalizeFLetter = (str) => {
    if (str) {
      return str.replace(/^./, str[0].toUpperCase());
    } else {
      return '';
    }
  };

  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      );
  };

  const urlToObject = async (url) => {
    const response = await fetch(url);
    const blob = await response.blob();
    const file = new File([blob], 'image.png', { type: blob.type });
    return file;
  };

  const travellerType = useMemo(() => getTravelorType(reasons)?.type || '', [reasons])

  const handleShare = async () => {
    setCopiedLink(false);
    const text =
      `Hi, I came across this amazing new site that understood the type of traveller I am! I just found out that I am ${travellerType}. Try it yourself!`;

    const filesGetter = getTravelorType(reasons)?.images?.map((file) => urlToObject(file.image));
    const newFiles = await Promise.all(filesGetter);

    if (navigator.share) {
    navigator
      .share({
        text,
        url: window.location.href,
        files: newFiles
      })
      .then(() => console.log('Shared successfully'))
      .catch((error) => console.error('Error sharing:', error));
    } else {
      console.log('Web Share API not supported on this browser');
      navigator.clipboard
        .writeText(text + '. Here is the URL: ' + window.location.href)
        .then(() => {
          setCopiedLink(true);
          setTimeout(() => {
            setCopiedLink(false);
          }, 2000);
        })
        .catch((error) => console.error('Error copying:', error));
    }
  };

  const handleStep2 = () => {
    if(place1.name && place2.name) {
      setFormStep(2)
    } else {
      setFormStep(3)
      if(place1.name){
        setFavourite(place1.name)
      } else if (place2.name) {
        setFavourite(place2.name)
      }
    }
  }
 
  const submit = (e) => {
    e.preventDefault();
    setMessage('');
    if (!validateEmail(email)) {
      setMessage(
        'Oops! You entered an invalid email. Kindly check and try again',
      );
      return;
    }
    setLoading(true);
    axios
      .post('https://nairobiservices.go.ke/api/authentication/auth/travel', {
        // .post('http://127.0.0.1:8001/auth/travel', {
        name,
        email,
        dataRequest,
        city,
        place1,
        place2,
        // place3,
        favourite,
        restaurant1,
        // restaurant2,
        activity1,
        activity2,
        keepsList,
        keptPlaces,
        sharedList,
        reasons,
        plannerType,
        nextTrip,
        travellerType
      })
      .then((res) => {
        setLoading(false);
        if (res.status === 201) {
          setFormStep(5);
          // setIsSuccessful(true);
        } else {
          setMessage(
            'Oops! There was an issue capturing your details. Kindly try again',
          );
        }
      });
  };

  return (
    <div className="App">
      <div id="scrollUp" title="Scroll To Top">
        <i class="fas fa-arrow-up"></i>
      </div>
      <div class="main">
        <header class="navbar navbar-sticky navbar-expand-lg navbar-dark">
          <div class="container position-relative">
            <a class="navbar-brand" href="">
              {/* <img class="navbar-brand-regular" src={require("./assets/img/Logo/logo.png")} alt="brand-logo" style={{height: '80px', width: 'auto'}} /> */}
              {/* <img class="navbar-brand-sticky" src={require("./assets/img/adililogo.png")} alt="sticky brand-logo" style={{height: '80px', width: 'auto'}} /> */}
            </a>
            <button
              class="navbar-toggler d-lg-none"
              type="button"
              data-toggle="navbarToggler"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>

            <div class="navbar-inner">
              <button
                class="navbar-toggler d-lg-none"
                type="button"
                data-toggle="navbarToggler"
                aria-label="Toggle navigation"
              >
                <span class="navbar-toggler-icon"></span>
              </button>

              <nav>
                <ul class="navbar-nav" id="navbar-nav">
                  <li class="nav-item">
                    <a class="nav-link scroll" href="#home">
                      Home
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link scroll" href="#features">
                      About Us
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link scroll" href="#contact">
                      Join the Wishlist
                    </a>
                  </li>
                  {/* <li class="nav-item">
                                <a class="nav-link scroll" href="#footer">Contact Us</a>
                            </li> */}
                </ul>
              </nav>
            </div>
          </div>
        </header>
        <section
          id="home"
          class="section welcome-area bg-overlay overflow-hidden d-flex align-items-center"
        >
          <div class="container flex justify-center">
            <div class="row align-items-center justify-center">
              {/* <div class="col-12 col-md-7"> */}
              <div class="welcome-intro intro-layout">
                <h1 class="text-white headerTxt animated-headerTxt">
                  PLAN A TRIP WITH YOUR FRIENDS
                </h1>
                <p class="text-white my-4 animated-headerTxt text text-center">
                  Easy trip planning and collaboration for groups on one
                  consolidated platform, what more could you need?
                </p>
                <div className="explore-btn ripple-btn btn-animated">
                  <a
                    href="#features"
                    style={{ textDecoration: 'none', color: 'white' }}
                  >
                    Explore now
                  </a>
                </div>
              </div>
              {/* </div> */}
            </div>
          </div>
        </section>
        <section
          id="features"
          class="section features-area overflow-hidden ptb_100"
        >
          <div class="container">
            <div class="row justify-content-center">
              <div class="col-12 col-md-10 col-lg-8">
                <div class="section-heading text-center btn-animated">
                  <h2>Why Choose Us?</h2>
                </div>
              </div>
            </div>
            {/* <div class="row align-items-center">
              <div style={{ marginBottom: 20 }}>
                <p className="ptb_50 font20">
                  We want to create a personal, fun & collaborative platform for
                  users to plan trips with friends, create recommended mapped
                  out experiences, in and around the city they live in, and have
                  their people be a part of the journey with them.
                </p>
              </div>
              <div className='info-section reverse'>
                    <div className='info-img'>
                      <img src={require('./assets/img/bg/itenarary.jpg')} style={{height: 350, borderRadius: 10}} />
                    </div>
                    <div className='info-txt'>
                      <h3>Customize itinerary</h3>
                      <p style={{paddingTop: 10}}>By customizing your itenarary, you can create a personalized travel plan that aligns with your preference, allowing you to make the most of your trip and have a memorable experience</p>
                    </div>
                  </div>
            </div> */}
            <div class="row align-items-center">
              <div className="info-section">
                <div className="info-txt">
                  <h3>Collaboratively Plan</h3>
                  <p style={{ paddingTop: 10 }}>
                    You can create your own trips or weekends away, invite and
                    collaborate with your friends to make the planning of it all
                    less fragmented, time orientated, collaborative and fun.
                  </p>
                </div>
                <div className="info-img">
                  <img
                    src={require('./assets/img/bg/collab.jpg')}
                    className="img"
                    style={{ width: 500, height: 350, borderRadius: 10 }}
                  />
                </div>
              </div>
            </div>
            {/* <div class="row align-items-center">
              <div className="info-section reverse">
                <div className="info-img">
                  <img
                    src={require('./assets/img/bg/map-phone.jpg')}
                    className="img"
                    style={{ width: 500, height: 350, borderRadius: 10 }}
                  />
                </div>
                <div className="info-txt">
                  <h3>Interactive maps</h3>
                  <p style={{ paddingTop: 10 }}>
                    With geo-tagging and mapping out your favourite restaurants,
                    activities and adventures (as well as those of friends)- you
                    can discover new places with ease and convenience.
                  </p>
                </div>
              </div>
            </div> */}
            {/* <div class="row align-items-center">
              <div className="info-section">
                <div className="info-txt">
                  <h3>Personalized Recommendation</h3>
                  <p style={{ paddingTop: 10 }}>
                    Based on your preferences, budget, and friend's activities,
                    we will suggest popular destinations, exciting activities
                    and local guides tailored to your interests.
                  </p>
                </div>
                <div className="info-img">
                  <img
                    src={require('./assets/img/bg/sa-coffee.jpg')}
                    className="img"
                    style={{ width: 500, height: 400, borderRadius: 10 }}
                  />
                </div>
              </div>
            </div> */}
          </div>
        </section>
        <section id="contact" class="contact-area bg-blue ptb_100 ph_20">
          <div
            class="container"
            style={{ marginTop: 10, marginBottom: 20, padding: 10 }}
          >
            <div class="row justify-content-center">
              <div class="col-12 col-md-10 col-lg-8">
                <div class="section-heading text-center">
                  <h2 class="text-capitalize">
                    {isSuccessful
                      ? 'Awesome!'
                      : formStep === 1
                      ? "Let's have a bit of fun!"
                      : formStep === 2
                      ? 'Now, pick your best'
                      : formStep === 3
                      ? 'Tell us a bit more'
                      : formStep === 4
                      ? 'One last thing!'
                      : 'We found your type!'}
                  </h2>
                  {formStep === 2 && (
                    <p class="d-block mt-4 bold600">
                      Great choices! {place1.name}
                      {place2.name && place3.name && ','}{' '}
                      {place2.name && !place3.name && 'and'} {place2.name}{' '}
                      {place3.name && 'and '}
                      {place3.name + ' '}are amazing places!
                    </p>
                  )}
                  {formStep === 4 && (
                    <p class="d-block mt-4">
                      To know the type of traveller you are, please leave your
                      name and email for us to keep in touch (we PROMISE no
                      spam- only an update if we launch and you will be the
                      first to know)
                    </p>
                  )}
                  {isSuccessful ? (
                    <p class="d-block mt-4">
                      We will keep in touch! Expect a recommendation list from
                      us soon
                    </p>
                  ) : (
                    <>
                      {/* <p class="d-block mt-4">Do you relate to the struggle when it comes to travel in Africa? If so, you may then be interested to know when the solution becomes available.</p>
                                <p class="d-block mt-2">Please enter your email address here (we PROMISE no spam- only an update if we launch and you will be the first to know, we promise)</p> */}
                    </>
                  )}
                </div>
              </div>
            </div>
            <div class="row justify-content-center">
              <div
                class={
                  formStep === 5 && reasons.length > 1
                    ? 'col-md-10 pt-4 pt-md-0'
                    : 'col-md-6 pt-4 pt-md-0'
                }
                style={{ paddingRight: 0, paddingLeft: 0 }}
              >
                {isSuccessful ? (
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexDirection: 'column',
                    }}
                  >
                    <img
                      src={require('./assets/img/bg/success.jpg')}
                      width={400}
                    />
                    <div class="section-heading text-center">
                      <div
                        class="d-block mt-2"
                        style={{
                          color: 'green',
                          marginTop: '10px',
                          marginLeft: '5px',
                        }}
                      >
                        {copiedLink && (
                          <p style={{ color: 'green', marginBottom: 10 }}>
                            Link copied!
                          </p>
                        )}
                        <div>
                          Great! Click this link to copy:{' '}
                          <button
                            style={{
                              fontWeight: 700,
                              backgroundColor: 'white',
                              borderWidth: 0,
                            }}
                            onClick={() => {
                              setCopiedLink(true);
                              navigator.clipboard.writeText(
                                'http://travel-tech-africa.com/',
                              );
                            }}
                          >
                            http://travel-tech-africa.com/
                          </button>{' '}
                          and pass onto a friend and get the momentum going!
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div class="contact-box text-start">
                    <p
                      class="d-block mt-2"
                      style={{
                        color: 'red',
                        marginTop: '10px',
                        marginBottom: '10px',
                        marginLeft: '5px',
                      }}
                    >
                      {message}
                    </p>
                    <form
                      id="contact-form"
                      method="POST"
                      action="https://theme-land.com/sapp/demo/./assets/php/mail.php"
                    >
                      <div class="row">
                        <div class="col-12">
                          {formStep === 5 ? (
                            <div>
                              <h3
                                className="text-center"
                                style={{ marginBottom: 10 }}
                              >
                                {capitalizeFLetter(name)}, we found the type of
                                traveller you are
                              </h3>
                              <div>
                                <div
                                  style={{
                                    display: 'flex',
                                    justifyContent: 'center',
                                    marginBottom: 10,
                                  }}
                                >
                                  {reasons.length === 2 && (
                                    <h5>You are a mix of</h5>
                                  )}
                                  {reasons.length === 3 && (
                                    <h5>You are a diverse one</h5>
                                  )}
                                </div>
                                <div className="flex travelortype">
                                  {getTravelorType(reasons)?.images?.map(
                                    (travelor, index) => (
                                      <div
                                        className="travellerImg"
                                        style={{
                                          marginRight:
                                            index !== reasons.length - 1
                                              ? '20px'
                                              : '0px',
                                        }}
                                      >
                                        <img
                                          src={travelor.image}
                                          style={{ borderRadius: 10 }}
                                        />
                                      </div>
                                    ),
                                  )}
                                </div>
                              </div>
                            </div>
                          ) : formStep === 4 ? (
                            <>
                              <div class="form-group">
                                <input
                                  type="text"
                                  class="form-control"
                                  name="name"
                                  placeholder="Name"
                                  required="required"
                                  value={name}
                                  onChange={(e) => setName(e.target.value)}
                                />
                              </div>
                              <div class="form-group">
                                <input
                                  type="email"
                                  class="form-control"
                                  name="email"
                                  placeholder="Email"
                                  required="required"
                                  value={email}
                                  onChange={(e) => setEmail(e.target.value)}
                                />
                              </div>
                              {/* <label for="">
                                When we launch, to offer the best experience, we
                                would love to study your activity and
                                tailor-make your personal experiences on our
                                app. To do this, we would need access to your
                                data.
                              </label>
                              <div>
                                <p>
                                  <label>
                                    <Checkbox
                                      name={'dataRequest'}
                                      checked={dataRequest}
                                      onChange={() =>
                                        setDataRequest(!dataRequest)
                                      }
                                    />
                                    &nbsp; I do not mind
                                  </label>
                                  &nbsp;&nbsp;
                                </p>
                              </div>
                              <label
                                style={{ fontSize: '13px', marginBottom: 20 }}
                              >
                                *No information from your data will used for any
                                other purpose other than for your user
                                experience on the app.
                              </label> */}
                            </>
                          ) : formStep === 3 ? (
                            <div>
                              <p className="question">
                                What do you like the most about{' '}
                                <span className="bold600">{favourite}</span>?
                                (select your top 2)
                              </p>
                              <div>
                                <div>
                                  <p>
                                    <label>
                                      <Checkbox
                                        name={'The restaurant(s)'}
                                        checked={reasons.includes(
                                          'The restaurant(s)',
                                        )}
                                        onChange={() => {
                                          if (
                                            reasons.includes(
                                              'The restaurant(s)',
                                            )
                                          ) {
                                            setReasons((prev) =>
                                              prev.filter(
                                                (item) =>
                                                  item !== 'The restaurant(s)',
                                              ),
                                            );
                                          } else {
                                            setReasons((prev) => [
                                              ...prev,
                                              'The restaurant(s)',
                                            ]);
                                          }
                                        }}
                                      />
                                      &nbsp; The restaurant(s)
                                    </label>
                                    &nbsp;&nbsp;
                                  </p>
                                </div>
                                {reasons.includes('The restaurant(s)') && (
                                  <div style={{ width: '90%', marginLeft: 25 }}>
                                    <label style={{ fontSize: '15px' }}>
                                      Could you name one/two of them
                                    </label>
                                    <div class="form-group">
                                      <input
                                        type="text"
                                        class="form-control"
                                        name="Restaurant1"
                                        placeholder="Restaurant name"
                                        value={restaurant1}
                                        onChange={(e) =>
                                          setRestaurant1(e.target.value)
                                        }
                                      />
                                    </div>
                                    {/* <div class="form-group">
                                      <input
                                        type="text"
                                        class="form-control"
                                        name="Restaurant2"
                                        placeholder="Restaurant 2"
                                        value={restaurant2}
                                        onChange={(e) =>
                                          setRestaurant2(e.target.value)
                                        }
                                      />
                                    </div> */}
                                  </div>
                                )}
                                <div>
                                  <p>
                                    <label>
                                      <Checkbox
                                        name={'The activities'}
                                        checked={reasons.includes(
                                          'The activities',
                                        )}
                                        onChange={() => {
                                          if (
                                            reasons.includes('The activities')
                                          ) {
                                            setReasons((prev) =>
                                              prev.filter(
                                                (item) =>
                                                  item !== 'The activities',
                                              ),
                                            );
                                          } else {
                                            setReasons((prev) => [
                                              ...prev,
                                              'The activities',
                                            ]);
                                          }
                                        }}
                                      />
                                      &nbsp; The activities
                                    </label>
                                    &nbsp;&nbsp;
                                  </p>
                                </div>
                                {reasons.includes('The activities') && (
                                  <div style={{ width: '90%', marginLeft: 25 }}>
                                    <label style={{ fontSize: '15px' }}>
                                      Could you name one/two of them
                                    </label>
                                    <div class="form-group">
                                      <input
                                        type="text"
                                        class="form-control"
                                        name="activity1"
                                        placeholder="Activity 1"
                                        value={activity1}
                                        onChange={(e) =>
                                          setActivity1(e.target.value)
                                        }
                                      />
                                    </div>
                                    <div class="form-group">
                                      <input
                                        type="text"
                                        class="form-control"
                                        name="activity1"
                                        placeholder="Activity 1"
                                        value={activity2}
                                        onChange={(e) =>
                                          setActivity2(e.target.value)
                                        }
                                      />
                                    </div>
                                  </div>
                                )}
                                <div>
                                  <p>
                                    <label>
                                      <Checkbox
                                        name={'peaceandquiet'}
                                        checked={reasons.includes(
                                          'peace and quiet',
                                        )}
                                        onChange={() => {
                                          if (
                                            reasons.includes('peace and quiet')
                                          ) {
                                            setReasons((prev) =>
                                              prev.filter(
                                                (item) =>
                                                  item !== 'peace and quiet',
                                              ),
                                            );
                                          } else {
                                            setReasons((prev) => [
                                              ...prev,
                                              'peace and quiet',
                                            ]);
                                          }
                                        }}
                                      />
                                      &nbsp; Peace and quiet
                                    </label>
                                    &nbsp;&nbsp;
                                  </p>
                                </div>
                                <div>
                                  <p>
                                    <label>
                                      <Checkbox
                                        name={'relaxed'}
                                        checked={reasons.includes(
                                          'relaxed environment',
                                        )}
                                        onChange={() => {
                                          if (
                                            reasons.includes(
                                              'relaxed environment',
                                            )
                                          ) {
                                            setReasons((prev) =>
                                              prev.filter(
                                                (item) =>
                                                  item !==
                                                  'relaxed environment',
                                              ),
                                            );
                                          } else {
                                            setReasons((prev) => [
                                              ...prev,
                                              'relaxed environment',
                                            ]);
                                          }
                                        }}
                                      />
                                      &nbsp; Relaxed environment
                                    </label>
                                    &nbsp;&nbsp;
                                  </p>
                                </div>
                                <div>
                                  <p>
                                    <label>
                                      <Checkbox
                                        name={'accomodation'}
                                        checked={reasons.includes(
                                          'accomodation',
                                        )}
                                        onChange={() => {
                                          if (
                                            reasons.includes('accomodation')
                                          ) {
                                            setReasons((prev) =>
                                              prev.filter(
                                                (item) =>
                                                  item !== 'accomodation',
                                              ),
                                            );
                                          } else {
                                            setReasons((prev) => [
                                              ...prev,
                                              'accomodation',
                                            ]);
                                          }
                                        }}
                                      />
                                      &nbsp; The accomodation
                                    </label>
                                    &nbsp;&nbsp;
                                  </p>
                                </div>
                                <div>
                                  <p>
                                    <label>
                                      <Checkbox
                                        name={'nightlife'}
                                        checked={reasons.includes('nightlife')}
                                        onChange={() => {
                                          if (reasons.includes('nightlife')) {
                                            setReasons((prev) =>
                                              prev.filter(
                                                (item) => item !== 'nightlife',
                                              ),
                                            );
                                          } else {
                                            setReasons((prev) => [
                                              ...prev,
                                              'nightlife',
                                            ]);
                                          }
                                        }}
                                      />
                                      &nbsp; The night life
                                    </label>
                                    &nbsp;&nbsp;
                                  </p>
                                </div>
                                <div>
                                  <p>
                                    <label>
                                      <Checkbox
                                        name={'closetothebeach'}
                                        checked={reasons.includes(
                                          'close to the beach',
                                        )}
                                        onChange={() => {
                                          if (
                                            reasons.includes(
                                              'close to the beach',
                                            )
                                          ) {
                                            setReasons((prev) =>
                                              prev.filter(
                                                (item) =>
                                                  item !== 'close to the beach',
                                              ),
                                            );
                                          } else {
                                            setReasons((prev) => [
                                              ...prev,
                                              'close to the beach',
                                            ]);
                                          }
                                        }}
                                      />
                                      &nbsp; Close to the beach
                                    </label>
                                    &nbsp;&nbsp;
                                  </p>
                                </div>
                                <div>
                                  <p>
                                    <label>
                                      <Checkbox
                                        name={'innature'}
                                        checked={reasons.includes('in nature')}
                                        onChange={() => {
                                          if (reasons.includes('in nature')) {
                                            setReasons((prev) =>
                                              prev.filter(
                                                (item) => item !== 'in nature',
                                              ),
                                            );
                                          } else {
                                            setReasons((prev) => [
                                              ...prev,
                                              'in nature',
                                            ]);
                                          }
                                        }}
                                      />
                                      &nbsp; In nature
                                    </label>
                                    &nbsp;&nbsp;
                                  </p>
                                </div>
                              </div>
                              <p className="question">
                                When is your next trip with a group of friends?
                              </p>
                              <div>
                                <div>
                                  <p>
                                    <label>
                                      <Checkbox
                                        name={'nextweek'}
                                        checked={nextTrip === 'next week'}
                                        onChange={() => {
                                          setNextTrip('next week');
                                        }}
                                      />
                                      &nbsp; Next week
                                    </label>
                                    &nbsp;&nbsp;
                                  </p>
                                </div>
                                <div>
                                  <p>
                                    <label>
                                      <Checkbox
                                        name={'nextmonth'}
                                        checked={nextTrip === 'next month'}
                                        onChange={() => {
                                          setNextTrip('next month');
                                        }}
                                      />
                                      &nbsp; Next month
                                    </label>
                                    &nbsp;&nbsp;
                                  </p>
                                </div>
                                <div>
                                  <p>
                                    <label>
                                      <Checkbox
                                        name={'nextyear'}
                                        checked={nextTrip === 'next year'}
                                        onChange={() => {
                                          setNextTrip('next year');
                                        }}
                                      />
                                      &nbsp; Next year
                                    </label>
                                    &nbsp;&nbsp;
                                  </p>
                                </div>
                                <div>
                                  <p>
                                    <label>
                                      <Checkbox
                                        name={'notsure'}
                                        checked={nextTrip === 'not sure'}
                                        onChange={() => {
                                          setNextTrip('not sure');
                                        }}
                                      />
                                      &nbsp; Not sure
                                    </label>
                                    &nbsp;&nbsp;
                                  </p>
                                </div>
                              </div>
                              <p className="question">
                                Are you usually the organiser of the trip or
                                participant/non-organiser?
                              </p>
                              <div>
                                <div>
                                  <p>
                                    <label>
                                      <Checkbox
                                        name={'plannerType'}
                                        checked={plannerType === 'organiser'}
                                        onChange={() => {
                                          setPlannerType('organiser');
                                        }}
                                      />
                                      &nbsp; Organiser
                                    </label>
                                    &nbsp;&nbsp;
                                  </p>
                                </div>
                                <div>
                                  <p>
                                    <label>
                                      <Checkbox
                                        name={'plannerType'}
                                        checked={plannerType === 'participant'}
                                        onChange={() => {
                                          setPlannerType('participant');
                                        }}
                                      />
                                      &nbsp; Participant
                                    </label>
                                    &nbsp;&nbsp;
                                  </p>
                                </div>
                              </div>
                              <p className="question">
                                Do you keep a list of your favourite places? Or
                                activities to do? Or restaurants to go to?
                              </p>
                              <div>
                                <p>
                                  <label>
                                    <Checkbox
                                      name={'keepsList'}
                                      checked={keepsList}
                                      onChange={() => {
                                        setKeepsList(true);
                                      }}
                                    />
                                    &nbsp; Yes
                                  </label>
                                  &nbsp;&nbsp;
                                </p>
                              </div>
                              <div>
                                <p>
                                  <label>
                                    <Checkbox
                                      name={'keepsList'}
                                      checked={!keepsList}
                                      onChange={() => {
                                        setKeepsList(false);
                                      }}
                                    />
                                    &nbsp; No
                                  </label>
                                  &nbsp;&nbsp;
                                </p>
                              </div>
                              {keepsList && (
                                <div>
                                  <p className="question">
                                    Where do you keep it?
                                  </p>
                                  <div>
                                    <p>
                                      <label>
                                        <Checkbox
                                          name={'notes'}
                                          checked={keptPlaces.includes('notes')}
                                          onChange={() => {
                                            if (keptPlaces.includes('notes')) {
                                              setKeptPlaces((prev) =>
                                                prev.filter(
                                                  (item) => item !== 'notes',
                                                ),
                                              );
                                            } else {
                                              setKeptPlaces((prev) => [
                                                ...prev,
                                                'notes',
                                              ]);
                                            }
                                          }}
                                        />
                                        &nbsp; Notes
                                      </label>
                                      &nbsp;&nbsp;
                                    </p>
                                  </div>
                                  <div>
                                    <p>
                                      <label>
                                        <Checkbox
                                          name={'google maps'}
                                          checked={keptPlaces.includes(
                                            'google maps',
                                          )}
                                          onChange={() => {
                                            if (
                                              keptPlaces.includes('google maps')
                                            ) {
                                              setKeptPlaces((prev) =>
                                                prev.filter(
                                                  (item) =>
                                                    item !== 'google maps',
                                                ),
                                              );
                                            } else {
                                              setKeptPlaces((prev) => [
                                                ...prev,
                                                'google maps',
                                              ]);
                                            }
                                          }}
                                        />
                                        &nbsp; Google Maps
                                      </label>
                                      &nbsp;&nbsp;
                                    </p>
                                  </div>
                                  <div class="form-group">
                                    <input
                                      type="text"
                                      class="form-control"
                                      name="other"
                                      placeholder="Other (specify)"
                                      onBlur={(e) =>
                                        e.target.value &&
                                        setKeptPlaces([
                                          ...keptPlaces,
                                          e.target.value,
                                        ])
                                      }
                                    />
                                  </div>

                                  <p className="question">
                                    If you would like to share this list with
                                    us, please add it here
                                  </p>
                                  <div class="form-group">
                                    <input
                                      type="textArea"
                                      class="form-control"
                                      name="sharedList"
                                      placeholder="Google maps link/copy & paste from notes/other"
                                      onChange={(e) =>
                                        setSharedList(e.target.value)
                                      }
                                      style={{ height: 100 }}
                                    />
                                  </div>
                                </div>
                              )}
                            </div>
                          ) : formStep === 2 ? (
                            <div>
                              <label style={{ marginBottom: 20 }}>
                                Out of the two places, which is your
                                <span className="bold600"> favourite?</span>
                              </label>
                              <div>
                                <div>
                                  <p>
                                    <label>
                                      <Checkbox
                                        name={'favourite'}
                                        checked={favourite === place1.name}
                                        onChange={() =>
                                          setFavourite(place1.name)
                                        }
                                      />
                                      &nbsp; {place1.name}
                                    </label>
                                    &nbsp;&nbsp;
                                  </p>
                                </div>
                                <div>
                                  <p>
                                    <label>
                                      <Checkbox
                                        name={'favourite'}
                                        checked={favourite === place2.name}
                                        onChange={() =>
                                          setFavourite(place2.name)
                                        }
                                      />
                                      &nbsp; {place2.name}
                                    </label>
                                    &nbsp;&nbsp;
                                  </p>
                                </div>
                                {/* <div>
                                  <p>
                                    <label>
                                      <Checkbox
                                        name={'favourite'}
                                        checked={favourite === place3.name}
                                        onChange={() =>
                                          setFavourite(place3.name)
                                        }
                                      />
                                      &nbsp; {place3.name}
                                    </label>
                                    &nbsp;&nbsp;
                                  </p>
                                </div> */}
                              </div>
                            </div>
                          ) : (
                            <>
                              <p
                                style={{ marginBottom: 20 }}
                                className="bold600"
                              >
                                Nairobi and Cape Town travellers
                              </p>
                              <p style={{ marginBottom: 20 }}>
                                To know the type of traveller you are we need to
                                get to know you a bit better…
                              </p>
                              <p style={{ marginBottom: 20 }}>
                                We would love for you to list your top{' '}
                                <span className="bold600">ONE or TWO</span> all time
                                favourite weekend away places or places that
                                you have recently gone to, not too far from the
                                city you live in, and why you would{' '}
                                <span className="bold600">HIGHLY</span>{' '}
                                recommend them to a friend.
                              </p>
                              <label style={{ marginBottom: 10 }}>
                                In return, we will email you an ENTIRE list of
                                accommodation recommendations, from people who
                                are a similar traveller to you!!
                              </label>
                              <p
                                style={{ marginBottom: 20 }}
                                className="bold600"
                              >
                                For this to work, we need to know the type of
                                traveller you are. Let’s get started.
                              </p>
                              <div class="form-group">
                                <input
                                  type="text"
                                  class="form-control"
                                  name="city"
                                  placeholder="Which city do you live in? e.g. Cape Town"
                                  required="required"
                                  value={city}
                                  onChange={(e) => setCity(e.target.value)}
                                />
                              </div>
                              <label
                                for=""
                                className="bold600"
                                style={{ marginBottom: 10 }}
                              >
                                Where do you like to go away for the weekend?
                                (Or where have you been recently and had a great
                                experience. List one or two)
                              </label>
                              <p style={{ marginBottom: 10 }}>
                                Favorite destination 1
                              </p>
                              <div
                                class="form-group row align-items-center"
                                style={{ justifyContent: 'space-between' }}
                              >
                                <input
                                  style={{ width: '45%' }}
                                  type="text"
                                  class="form-control"
                                  name="Accommodation name"
                                  placeholder="Accommodation name"
                                  required="required"
                                  value={place1.name}
                                  onChange={(e) =>
                                    setPlace1({
                                      ...place1,
                                      name: e.target.value,
                                    })
                                  }
                                />
                                <input
                                  style={{ width: '50%' }}
                                  type="text"
                                  class="form-control"
                                  name="place1"
                                  placeholder="Location"
                                  required="required"
                                  value={place1.location}
                                  onChange={(e) =>
                                    setPlace1({
                                      ...place1,
                                      location: e.target.value,
                                    })
                                  }
                                />
                              </div>
                              <div class="form-group">
                                <input
                                  type="text"
                                  class="form-control"
                                  name="place1"
                                  placeholder="Why do you like it?"
                                  required="required"
                                  value={place1.reason}
                                  onChange={(e) =>
                                    setPlace1({
                                      ...place1,
                                      reason: e.target.value,
                                    })
                                  }
                                />
                              </div>
                              <p style={{ marginBottom: 10 }}>
                                Favorite destination 2
                              </p>
                              <div
                                class="form-group row align-items-center"
                                style={{ justifyContent: 'space-between' }}
                              >
                                <input
                                  style={{ width: '45%' }}
                                  type="text"
                                  class="form-control"
                                  name="place2"
                                  placeholder="Accommodation name"
                                  required="required"
                                  value={place2.name}
                                  onChange={(e) =>
                                    setPlace2({
                                      ...place2,
                                      name: e.target.value,
                                    })
                                  }
                                />
                                <input
                                  style={{ width: '50%' }}
                                  type="text"
                                  class="form-control"
                                  name="place2"
                                  placeholder="Location"
                                  required="required"
                                  value={place2.location}
                                  onChange={(e) =>
                                    setPlace2({
                                      ...place2,
                                      location: e.target.value,
                                    })
                                  }
                                />
                              </div>
                              <div class="form-group">
                                <input
                                  type="text"
                                  class="form-control"
                                  name="place2"
                                  placeholder="Why do you like it?"
                                  required="required"
                                  value={place2.reason}
                                  onChange={(e) =>
                                    setPlace2({
                                      ...place2,
                                      reason: e.target.value,
                                    })
                                  }
                                />
                              </div>
                              {/* <div
                                class="form-group row align-items-center"
                                style={{ justifyContent: 'space-between' }}
                              >
                                <input
                                  style={{ width: '25%' }}
                                  type="text"
                                  class="form-control"
                                  name="place3"
                                  placeholder="Place"
                                  required="required"
                                  value={place3.name}
                                  onChange={(e) =>
                                    setPlace3({
                                      ...place3,
                                      name: e.target.value,
                                    })
                                  }
                                />
                                <input
                                  style={{ width: '70%' }}
                                  type="text"
                                  class="form-control"
                                  name="place3"
                                  placeholder="Why do you like it?"
                                  required="required"
                                  value={place3.reason}
                                  onChange={(e) =>
                                    setPlace3({
                                      ...place3,
                                      reason: e.target.value,
                                    })
                                  }
                                />
                              </div> */}
                            </>
                          )}
                        </div>
                        <div
                          style={{
                            display: 'flex',
                            justifyContent: 'flex-end',
                            width: '100%',
                          }}
                        >
                          {copiedLink && (
                            <p
                              style={{
                                color: 'green',
                                marginTop: 10,
                                marginRight: 20,
                              }}
                            >
                              Link copied!
                            </p>
                          )}
                        </div>

                        <div
                          class="col-12 flex row justify-space-between"
                          style={{ flexWrap: 'wrap' }}
                        >
                          {formStep !== 1 && (
                            <button
                              style={{ width: '20%' }}
                              type="back"
                              class="mt-3"
                              onClick={(e) => {
                                e.preventDefault();
                                setMessage('');
                                formStep === 2
                                  ? setFormStep(1)
                                  : formStep === 3
                                  ? place1.name && place2.name ? setFormStep(2) : setFormStep(1)
                                  : formStep === 4
                                  ? setFormStep(3)
                                  : setFormStep(4);
                              }}
                            >
                              Back
                            </button>
                          )}
                          <button
                            style={{
                              width:
                                formStep !== 1
                                  ? '60%'
                                  : formStep === 4
                                  ? '70%'
                                  : '100%',
                            }}
                            disabled={
                              (formStep === 1 &&
                                (!place1.name && !place2.name || !city)) ||
                              (formStep === 2 && !favourite) ||
                              (formStep === 3 &&
                                (!reasons.length ||
                                  (keepsList && !keptPlaces.length))) ||
                              (formStep === 4 && (!name || !email))
                            }
                            onClick={(e) => {
                              e.preventDefault();
                              formStep === 1
                                ? handleStep2() 
                                : formStep === 2
                                ? setFormStep(3)
                                : formStep === 3
                                ? setFormStep(4)
                                : formStep === 4
                                ? submit(e)
                                : formStep === 5 && handleShare();
                            }}
                            type="submit"
                            class="btn btn-lg btn-block mt-3"
                          >
                            {loading
                              ? 'Sending info...'
                              : formStep === 1 ||
                                formStep === 2 ||
                                formStep === 3
                              ? 'Next'
                              : formStep === 4
                              ? 'Find out your traveller type!'
                              : 'Click here to share'}
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                )}
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
                      <li class="py-2">
                        <a href="#">Home</a>
                      </li>
                      <li class="py-2">
                        <a href="#features">About Us</a>
                      </li>
                      <li class="py-2">
                        <a href="#contact">join Wishlist</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div class="col-12 col-sm-6 col-lg-3">
                  <div class="footer-items">
                    <h3 class="footer-title mb-2">Product Help</h3>
                    <ul>
                      <li class="py-2">
                        <a href="#">Privacy Policy</a>
                      </li>
                      <li class="py-2">
                        <a href="#">Terms &amp; Conditions</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div class="col-12 col-sm-6 col-lg-3">
                  <div class="footer-items">
                  <img class="navbar-brand-regular" src={require("./assets/img/Logo/logo.png")} alt="brand-logo" style={{height: '60px', width: 'auto'}} />
                    <h3 class="footer-title mb-2">Soon available on</h3>
                    <div class="button-group store-buttons store-black d-flex flex-wrap">
                      <a href="#">
                        <img
                          src={require('./assets/img/icon/google-play-black.png')}
                          alt=""
                        />
                      </a>
                      <a href="#">
                        <img
                          src={require('./assets/img/icon/app-store-black.png')}
                          alt=""
                        />
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
                    <div class="copyright-left">
                      &copy; Copyrights 2023 All rights reserved.
                    </div>
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
