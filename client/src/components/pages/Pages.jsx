import React from "react"
import Header from "../common/header/Header"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Home from "../home/Home"
import Footer from "../common/footer/Footer"
import About from "../about/About"
import Pricing from "../pricing/Pricing"
import Blog from "../blog/Blog"
import Services from "../services/Services"
import Contact from "../contact/Contact"

import Login from "../auth/login/index"
import OTP from "../auth/login/otp"
import Register from "../auth/register"

import { AuthProvider } from "../../contexts/authContext"

import National from "../national/national"
import Chat from "../chat/Chat"
import Form from "../form/form"
import FormData from "../form/formdata"
import State from "../state/state"
import International from "../international/international"



const Pages = () => {
  return (
    <>
    <AuthProvider>
      <Router>
        <Header />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/about' component={About} />
          <Route exact path='/services' component={Services} />
          <Route exact path='/blog' component={Blog} />
          <Route exact path='/pricing' component={Pricing} />
          <Route exact path='/contact' component={Contact} />
          <Route exact path='/register' component={Register} />
          <Route exact path="/login" component={Login}/>
          <Route exact path="/otp" component={OTP}/>
          
          <Route exact path="/national" component={National}/>
          <Route exact path="/chat" component={Chat}/>
          <Route exact path="/form" component={Form}/>
          <Route exact path="/formdata" component={FormData}/>
          <Route exact path="/state" component={State}/>
          <Route exact path="/international" component={International}/>
        </Switch>
        <Footer />
      </Router>
      </AuthProvider>
    </>
  )
}

export default Pages
